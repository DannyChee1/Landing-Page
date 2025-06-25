import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/*Announcement bar*/}
      <div className="w-full bg-[#181818] py-3 flex justify-center items-center">
        <span className="flex items-center gap-2 text-white text-base font-medium">
          <span className=" w-2 h-2 rounded-full bg-green-500 text-xs"></span>
            Rogo Raises $50M Series B led by Thrive Capital
            <a href="#" className="underline ml-4 hover:text-gray-300 text-sm">Read our announcement</a>
            <a href="#" className="underline ml-4 hover:text-gray-300 text-sm">Financial Times</a>
        </span>
      </div>

      {/*Navigation bar*/}
      <nav className="w-full flex items-center justify-between px-12 py-4 bg-transparent z-10 relative ">
        <div className="text-white text-3xl font-bold" style={{ fontFamily: 'sans-serif' }}>
          rogo
        </div>

        <div className="flex gap-12">
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Product</a>
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Security</a>
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Company</a>
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">News</a>
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Careers</a>
        </div>

        <div className="flex items-center gap-4 ml-8">
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Log in</a>
          <button className="bg-white text-black px-8 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-gray-400">
            Request Demo
          </button>
        </div>
      </nav>

      {/*Video section*/}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-16 bg-black">
        <video
          src="https://framerusercontent.com/assets/wTrzp9MQkGsUlvTmGBWbubFlo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Secure AI for <br className="hidden sm:block" /> Financial Professionals
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mb-8">
            Domain-specific AI for investment banks, private equity firms, and hedge funds
          </p>
          <div className="relative group mb-12">
            <span className="absolute -top-5 -left-5 w-5 h-5 border-t-4 border-l-4 border-white rounded-tl-lg transition-all duration-300 group-hover:-top-1 group-hover:-left-1"></span>
            <span className="absolute -bottom-5 -right-5 w-5 h-5 border-b-4 border-r-4 border-white rounded-br-lg transition-all duration-300 group-hover:-bottom-1 group-hover:-right-1"></span>
            <button className="bg-white text-black px-8 md:px-14 py-2 rounded-full transition-colors duration-300 hover:bg-gray-400 text-base md:text-lg font-semibold">
              Request a Demo
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-400 text-sm md:text-lg mb-4">
              Trusted by leading financial institutions
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4 text-white text-lg md:text-2xl font-serif opacity-90">
              <span>LAZARD</span>
              <span>TIGERGLOBAL</span>
              <span>Moelis</span>
              <span>GTCR</span>
              <span>NOMURA</span>
              <span>RAYMOND JAMES</span>
            </div>
          </div>
        </div>
        <div/>
      </section>
    </div>
  );
}
