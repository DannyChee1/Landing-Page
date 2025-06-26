"use client";
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatInterface({ isOpen, onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]); {/* State to store the messages */}
  const [inputText, setInputText] = useState(''); {/* State to store the input text */}
  const [isConnected, setIsConnected] = useState(false); {/* State to store the connection status */}
  const [isLoading, setIsLoading] = useState(false); {/* State to store the loading status */}
  const wsRef = useRef<WebSocket | null>(null); {/* Reference to the WebSocket connection */}
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => { {/* Scroll to the bottom of the chat interface when new messages arrive */}
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // WebSocket connection
  useEffect(() => {
    if (!isOpen) return;

    const connectWebSocket = () => {
      // Replace with your Cloud Run WebSocket endpoint
      const wsUrl = process.env.NEXT_PUBLIC_WS_URL!;

      console.log("▶️ Connecting WebSocket to:", wsUrl);
      const ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        console.log('WebSocket connected');
        setIsConnected(true);
        // Send initial connection message
        ws.send(JSON.stringify({    
          type: 'connection',
          userId: 'user-' + Date.now(), // Generate a simple user ID
          timestamp: new Date().toISOString()
        }));
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          
          if (data.type === 'message') {
            const newMessage: Message = {
              id: data.id || Date.now().toString(),
              text: data.text,
              sender: 'bot',
              timestamp: new Date(data.timestamp || Date.now()),
              status: 'sent'
            };
            
            setMessages(prev => [...prev, newMessage]);
            setIsLoading(false);
          } else if (data.type === 'error') {
            console.error('WebSocket error:', data.message);
            setIsLoading(false);
            // Add error message to chat
            setMessages(prev => [...prev, {
              id: Date.now().toString(),
              text: 'Sorry, there was an error processing your message. Please try again.',
              sender: 'bot',
              timestamp: new Date(),
              status: 'error'
            }]);
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.onclose = () => {
        console.log('WebSocket disconnected');
        setIsConnected(false);
        // Attempt to reconnect after 3 seconds
        setTimeout(connectWebSocket, 3000);
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setIsConnected(false);
      };

      wsRef.current = ws;
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputText.trim() || !isConnected || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Update message status to sent
    setMessages(prev => prev.map(msg => 
      msg.id === userMessage.id ? { ...msg, status: 'sent' } : msg
    ));

    // Send message via WebSocket
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'message',
        text: userMessage.text,
        userId: 'user-' + Date.now(),
        timestamp: userMessage.timestamp.toISOString()
      }));
    } else {
      // WebSocket not available
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: 'Connection lost. Please refresh the page to reconnect.',
        sender: 'bot',
        timestamp: new Date(),
        status: 'error'
      }]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) { {/* Shift key is used for multiline input */}
      event.preventDefault(); {/* Prevent default behavior of the enter key */}
      sendMessage();
    }
  };

  if (!isOpen) return null; {/* If the chat interface is not open, return null */}

  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b bg-gray-50">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-black">Chatbot</span>
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-medium text-gray-500">
            {isConnected ? 'Status: Connected' : 'Status: Disconnected'}
          </span>
          <button
            className="text-gray-500 hover:text-black text-xl"
            onClick={onClose}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-gray-400 text-center mt-10">
            <div className="text-medium mt-1">Hello! How can I help you today?</div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 border'
                  } ${message.status === 'error' ? 'border-red-300 bg-red-50' : ''}`}
                >
                  <div className="text-sm">{message.text}</div>
                  <div className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                    {message.status === 'sending' && ' • Sending...'}
                    {message.status === 'error' && ' • Error'}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
                    <span className="text-sm">Chatbot is processing your message...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message here..."
            className="flex-1 p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={1}
            disabled={!isConnected || isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!inputText.trim() || !isConnected || isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
        {!isConnected && (
          <div className="text-xs text-red-500 mt-2">
            Connecting to server...
          </div>
        )}
      </div>
    </div>
  );
} 