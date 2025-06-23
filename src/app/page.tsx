import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        
        <video
          src="https://framerusercontent.com/assets/wTrzp9MQkGsUlvTmGBWbubFlo.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto" }}
        />

        <div className="absolute top-50 left-0 w-full h-full text-white text-center text-7xl font-bold">
          Secure AI for <br /> Financial Professionals
        </div>
        
        <div className="absolute top-90 left-0 w-full h-full text-gray-400 text-center text-2xl">
          Domain-specific AI for Investment banks, private equity firms, and hedge funds
        </div>

        <div className="absolute top-30 left-0 w-full h-full flex justify-center items-center">
          <button className="bg-white text-black px-4 py-2 rounded-full px-14">Request a demo</button>
        </div>
      </section>
    </div>
  );
}
