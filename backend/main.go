package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"sync"
	"time"

	"cloud.google.com/go/bigtable"
	"github.com/gorilla/websocket"
	genai "google.golang.org/genai"
)

// Message represents a chat message
type Message struct {
	Text      string    `json:"text"`
	Sender    string    `json:"sender"`
	Timestamp time.Time `json:"timestamp"`
}

// WebSocketMessage represents messages sent over WebSocket
type WebSocketMessage struct {
	Type      string    `json:"type"`
	Text      string    `json:"text,omitempty"`
	Timestamp time.Time `json:"timestamp,omitempty"`
	Error     string    `json:"error,omitempty"`
}

// Server represents the chat server
type Server struct {
	clients    map[*websocket.Conn]bool
	broadcast  chan WebSocketMessage
	register   chan *websocket.Conn
	unregister chan *websocket.Conn
	mutex      sync.RWMutex

	btClient     *bigtable.Client
	geminiClient *genai.Client
	projectID    string
	instanceID   string
	tableID      string
}

// NewServer creates a new chat server
func NewServer() (*Server, error) {
	projectID := os.Getenv("GOOGLE_CLOUD_PROJECT")
	instanceID := os.Getenv("BIGTABLE_INSTANCE_ID")
	tableID := os.Getenv("BIGTABLE_TABLE_ID")
	ctx := context.Background()

	btClient, err := bigtable.NewClient(ctx, projectID, instanceID)
	if err != nil {
		return nil, fmt.Errorf("failed to create BigTable client: %v", err)
	}

	// Gemini client using go-genai
	geminiClient, err := genai.NewClient(ctx, &genai.ClientConfig{
		APIKey:  os.Getenv("GOOGLE_API_KEY"),
		Backend: genai.BackendGeminiAPI,
	})
	if err != nil {
		return nil, fmt.Errorf("failed to create Gemini client: %v", err)
	}

	return &Server{
		clients:      make(map[*websocket.Conn]bool),
		broadcast:    make(chan WebSocketMessage),
		register:     make(chan *websocket.Conn),
		unregister:   make(chan *websocket.Conn),
		btClient:     btClient,
		geminiClient: geminiClient,
		projectID:    projectID,
		instanceID:   instanceID,
		tableID:      tableID,
	}, nil
}

// Run starts the server
func (s *Server) Run() {
	for {
		select {
		case client := <-s.register:
			s.mutex.Lock()
			s.clients[client] = true
			s.mutex.Unlock()

		case client := <-s.unregister:
			s.mutex.Lock()
			delete(s.clients, client)
			s.mutex.Unlock()

		case message := <-s.broadcast:
			s.mutex.RLock()
			for client := range s.clients {
				err := client.WriteJSON(message)
				if err != nil {
					log.Printf("error: %v", err)
					client.Close()
					delete(s.clients, client)
				}
			}
			s.mutex.RUnlock()
		}
	}
}

// handleWebSocket handles WebSocket connections
func (s *Server) handleWebSocket(w http.ResponseWriter, r *http.Request) {
	upgrader := websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			return true // Allow all origins for development
		},
	}

	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Printf("upgrade error: %v", err)
		return
	}

	s.register <- conn

	// Send welcome message
	welcomeMsg := WebSocketMessage{
		Type:      "connection",
		Text:      "Connected to Rogo AI Assistant",
		Timestamp: time.Now(),
	}
	conn.WriteJSON(welcomeMsg)

	// Handle incoming messages
	for {
		var msg WebSocketMessage
		err := conn.ReadJSON(&msg)
		if err != nil {
			log.Printf("read error: %v", err)
			s.unregister <- conn
			break
		}

		// Handle different message types
		switch msg.Type {
		case "connection":
			// Handle initial connection
			log.Printf("New connection")

		case "message":
			// Handle chat message
			go s.handleChatMessage(conn, msg)

		default:
			log.Printf("Unknown message type: %s", msg.Type)
		}
	}
}

// handleChatMessage processes a chat message
func (s *Server) handleChatMessage(conn *websocket.Conn, wsMsg WebSocketMessage) {
	message := Message{
		Text:      wsMsg.Text,
		Sender:    "user",
		Timestamp: time.Now(),
	}
	err := s.saveMessage(message)
	if err != nil {
		log.Printf("Error saving user message: %v", err)
	}
	aiResponse, err := s.generateAIResponse(wsMsg.Text)
	if err != nil {
		log.Printf("Error generating AI response: %v", err)
		errorMsg := WebSocketMessage{
			Type:      "error",
			Text:      "Sorry, I encountered an error processing your message. Please try again.",
			Timestamp: time.Now(),
		}
		conn.WriteJSON(errorMsg)
		return
	}
	botMessage := Message{
		Text:      aiResponse,
		Sender:    "bot",
		Timestamp: time.Now(),
	}
	err = s.saveMessage(botMessage)
	if err != nil {
		log.Printf("Error saving bot message: %v", err)
	}
	responseMsg := WebSocketMessage{
		Type:      "message",
		Text:      botMessage.Text,
		Timestamp: botMessage.Timestamp,
	}
	conn.WriteJSON(responseMsg)
}

// saveMessage saves a message to BigTable
func (s *Server) saveMessage(message Message) error {
	ctx := context.Background()
	table := s.btClient.Open(s.tableID)
	rowKey := fmt.Sprintf("%d", message.Timestamp.UnixNano())
	mut := bigtable.NewMutation()
	mut.Set("messages", "text", bigtable.Now(), []byte(message.Text))
	mut.Set("messages", "sender", bigtable.Now(), []byte(message.Sender))
	mut.Set("messages", "timestamp", bigtable.Now(), []byte(message.Timestamp.Format(time.RFC3339)))
	return table.Apply(ctx, rowKey, mut)
}

// getChatHistory retrieves chat history from BigTable
func (s *Server) getChatHistory() ([]Message, error) {
	ctx := context.Background()
	table := s.btClient.Open(s.tableID)
	var messages []Message
	err := table.ReadRows(ctx, bigtable.InfiniteRange(""), func(row bigtable.Row) bool {
		msg := Message{}
		for _, column := range row["messages"] {
			switch column.Column {
			case "messages:text":
				msg.Text = string(column.Value)
			case "messages:sender":
				msg.Sender = string(column.Value)
			case "messages:timestamp":
				if t, err := time.Parse(time.RFC3339, string(column.Value)); err == nil {
					msg.Timestamp = t
				}
			}
		}
		messages = append(messages, msg)
		return true
	})
	return messages, err
}

// generateAIResponse generates a response using Google Gemini
func (s *Server) generateAIResponse(userMessage string) (string, error) {
	ctx := context.Background()
	parts := []*genai.Part{
		{Text: userMessage},
	}
	result, err := s.geminiClient.Models.GenerateContent(ctx, "gemini-2.5-pro", []*genai.Content{{Parts: parts}}, nil)
	if err != nil {
		return "", err
	}
	if len(result.Candidates) == 0 {
		return "No response from Gemini.", nil
	}
	return result.Candidates[0].Content.Parts[0].Text, nil
}

// handleHealthCheck handles health check requests
func (s *Server) handleHealthCheck(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("OK"))
}

func main() {
	// Create server
	server, err := NewServer()
	if err != nil {
		log.Fatalf("Failed to create server: %v", err)
	}
	defer server.btClient.Close()

	// Start server goroutine
	go server.Run()

	// Setup routes
	http.HandleFunc("/ws", server.handleWebSocket)
	http.HandleFunc("/health", server.handleHealthCheck)

	// Get port from environment
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Starting server on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
