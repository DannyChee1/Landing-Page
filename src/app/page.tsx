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
      <nav className="w-full flex items-center justify-between px-8 py-3 bg-transparent z-10 relative ">
        <div className="text-white text-3xl font-bold" style={{ fontFamily: 'sans-serif' }}>
          rogo
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Product</a>
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Security</a>
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Company</a>
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">News</a>
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Careers</a>
        </div>

        <div className="flex items-center gap-3 ml-6">
          <a href="#" className="text-white text-lg font-medium hover:text-gray-400">Log in</a>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-gray-400">
            Request Demo
          </button>
        </div>
      </nav>

      {/*Video section*/}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-16 pb-16 bg-black">
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
            <button className="bg-white text-black px-8 md:px-14 py-2 rounded-full transition-colors duration-300 hover:bg-gray-400 text-base md:text-lg">
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
      </section>

      {/*Features*/}
      <section className="w-full bg-white py-24 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 front-medium">
          <span className="text-black">Augment Your Firm with an</span> <br className="hidden md:block" />
            <span className="text-gray-500">AI Platform Built for Finance</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
          <div className="flex-1 text-left">
            <h3 className="text-5xl md:text-5xl font-serif mb-4 text-black">Tailored for Finance</h3>
            <p className="text-gray-500 text-">
              Delegate research tasks to a domain-specific <br className="hidden md:block" /> 
              personal analyst that understands finance.
            </p>
          </div>
          
          <div className="flex-1 relative flex justify-center items-center">
            <div className="relative w-full flex justify-center">
              <div className="relative w-full md:w-[650px] h-[400px] overflow-hidden shadow-lg border border-gray-300">
                <img
                  src="https://framerusercontent.com/images/VWrvlR0FlWhLdDBqhNpMf2aSf7w.jpeg"
                  alt="Building Image"
                  className="w-full h-full object-cover"
                />
                {/*Card*/}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-lg shadow-xl px-8 py-6 min-w-[300px]">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-16 px-4 bg-white">
        <div className="flex-1 flex justify-center">
          <div className="relative w-full md:w-[650px] h-[400px] overflow-hidden shadow-lg border border-gray-300 bg-white">
            <img
              src="https://framerusercontent.com/images/SgW8fw8R3fjCVXFB8CId5hi9F4.jpeg"
              alt="Green Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-lg shadow-xl px-8 py-6 min-w-[300px]">
                  </div>
                </div>
          </div>
        </div>
        <div className="flex-1 max-w-md text-left">
        <h3 className="text-5xl md:text-5xl font-serif mb-4 text-black">Accurate, Grounded Research Across 
          <br className="hidden md:block" />All Your Data</h3>
            <p className="text-gray-500">
            Rogo seamlessly integrates internal and external data sources, maintaining accuracy, transparency and auditability.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-24 px-4 flex flex-col items-center">

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
          <div className="flex-1 text-left">
            <h3 className="text-5xl md:text-5xl font-serif mb-4 text-black">Leverage Your Firm's Workflows</h3>
            <p className="text-gray-500 text-">
            Use agents designed to create work outputs exactly as you would across PowerPoint, Excel and Word.
            </p>
          </div>
          
          <div className="flex-1 relative flex justify-center items-center">
            <div className="relative w-full flex justify-center">
              <div className="relative w-full md:w-[650px] h-[400px] overflow-hidden shadow-lg border border-gray-300">
                <img
                  src="https://framerusercontent.com/images/7RikvNOaGWGdC81zREctYsGVYF0.jpeg"
                  alt="Building Image"
                  className="w-full h-full object-cover"
                />
                {/*Card*/}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-lg shadow-xl px-8 py-6 min-w-[300px]">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-16 px-4 bg-white">
        <div className="flex-1 flex justify-center">
          <div className="relative w-full md:w-[650px] h-[400px] overflow-hidden shadow-lg border border-gray-300 bg-white">
            <img
              src="https://framerusercontent.com/images/KmNjEBvnwNKdBuTbkE2ehpbUUxk.jpeg"
              alt="Green Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-lg shadow-xl px-8 py-6 min-w-[300px]">
                  </div>
                </div>
          </div>
        </div>
        <div className="flex-1 max-w-md text-left">
        <h3 className="text-5xl md:text-5xl font-serif mb-4 text-black">Embed AI into Your Firm's DNA</h3>
            <p className="text-gray-500">
            Rogo seamlessly integrates internal and external data sources, maintaining accuracy, transparency and auditability.
          </p>
        </div>
      </section>

      {/* Enterprise*/}
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-5xl md:text-5xl font-serif text-black mb-4">
            Built for Enterprise Deployment
          </h2>
          <p className="text-gray-500 text-xl">
            Rogo keeps your data safe with world-class security and data privacy measures.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 flex flex-col items-start rounded-none shadow-sm">
            <div className="bg-black w-12 h-12 mb-6 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.692V1.077H1.111v8.615zM10 9.692h8.889v8.616H10m0-8.616v8.616m0 0H1.111v8.615H10zm0-12.923v8.615M5.556 9.692h8.888" fill="transparent" stroke="#fff" strokeWidth="1.62" strokeLinecap="round" strokeLinejoin="bevel"/>
              </svg>
            </div>
            <h3 className="text-xm mb-2 text-black">Custom-Trained Models</h3>
            <p className="text-gray-600 text-base">
              LLMs built for finance, using professionally labeled data tailored to the standards of your firm's best analysts.
            </p>
          </div>
          <div className="bg-gray-100 p-8 flex flex-col items-start rounded-none shadow-sm">
            <div className="bg-black w-12 h-12 mb-6 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.556 7.583L13 1.167 1.445 7.583m23.111 0v12.834L13 26.833m11.556-19.25L13 14m0 12.833L1.445 20.417V7.583M13 26.833V14M1.445 7.583L13 14" fill="transparent" stroke="#fff" strokeWidth="1.74" strokeLinecap="round" strokeLinejoin="bevel"/>
              </svg>
            </div>
            <h3 className="text-xm mb-2 text-black">Single Tenant Deployments</h3>
            <p className="text-gray-600 text-base">
              Flexible deployment options to meet the security & infrastructure needs for the most conscious firms.
            </p>
          </div>
          <div className="bg-gray-100 p-8 flex flex-col items-start rounded-none shadow-sm">
            <div className="bg-black w-12 h-12 mb-6 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.001 0.668C21.365 0.668 27.335 6.637 27.335 14.001C27.335 21.365 21.365 27.335 14.001 27.335C6.637 27.335 0.668 21.365 0.668 14.001C0.668 6.637 6.637 0.668 14.001 0.668ZM14.001 25.668C14.871 25.668 16.107 24.92 17.225 22.684C17.657 21.82 18.03 20.803 18.321 19.668L9.681 19.668C9.973 20.803 10.346 21.82 10.778 22.684C11.896 24.92 13.131 25.668 14.001 25.668ZM9.328 18.001L18.675 18.001C18.885 16.759 19.001 15.415 19.001 14.001C19.004 12.774 18.913 11.548 18.728 10.335L9.275 10.335C9.09 11.548 8.999 12.774 9.001 14.001C9.001 15.415 9.118 16.759 9.328 18.001ZM20.037 19.668C19.523 21.856 18.72 23.719 17.727 25.061C20.48 24.13 22.788 22.207 24.201 19.668ZM24.964 18.001C25.431 16.719 25.669 15.366 25.668 14.001C25.668 12.721 25.461 11.488 25.08 10.335L20.413 10.335C20.585 11.549 20.67 12.775 20.668 14.001C20.668 15.395 20.561 16.739 20.363 18.001ZM7.64 18.001C7.435 16.678 7.333 15.341 7.335 14.001C7.335 12.73 7.423 11.499 7.59 10.335L2.923 10.335C2.532 11.518 2.334 12.756 2.335 14.001C2.335 15.407 2.583 16.754 3.039 18.001ZM3.801 19.668C5.214 22.207 7.523 24.13 10.276 25.061C9.283 23.719 8.479 21.856 7.965 19.668ZM9.599 8.668L18.404 8.668C18.102 7.398 17.699 6.267 17.225 5.319C16.107 3.083 14.871 2.335 14.001 2.335C13.132 2.335 11.896 3.083 10.778 5.319C10.304 6.267 9.901 7.399 9.599 8.668ZM20.113 8.668L24.38 8.668C22.989 5.968 20.603 3.915 17.727 2.942C18.77 4.351 19.604 6.335 20.113 8.668ZM10.276 2.942C7.399 3.915 5.013 5.968 3.623 8.668L7.889 8.668C8.399 6.335 9.233 4.351 10.276 2.942Z" fill="#fff"/>
              </svg>
            </div>
            <h3 className="text-xm mb-2 text-black">Admin Governance & Permissions</h3>
            <p className="text-gray-600 text-base">
              Granular permission controls, role-based access management, comprehensive audit trails, & customizable governance policies.
            </p>
          </div>
        </div>
      </section>

      {/* ecurity Section*/}
      <section className="w-full bg-[#181818] text-white py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-8">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Security Label */}
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-white rounded w-8 h-8 flex items-center justify-center">
                {/* Lock Icon */}
                <svg width="20" height="20" fill="none" stroke="#181818" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="5" y="11" width="14" height="8" rx="2" stroke="#181818" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="#181818" strokeWidth="2"/>
                </svg>
              </div>
              <span className="font-mono text-lg">Security</span>
            </div>
            {/* Headings */}
            <h2 className="text-4xl md:text-5xl font-serif text-gray-400 mb-2">Built for Enterprise</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">Secure by Design</h3>
            {/* Features List */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="5" y="11" width="14" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="#fff" strokeWidth="2"/>
                </svg>
                <span>No training on your data</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <ellipse cx="12" cy="12" rx="8" ry="5" stroke="#fff" strokeWidth="2"/>
                  <path d="M4 12a8 5 0 0016 0" stroke="#fff" strokeWidth="2"/>
                </svg>
                <span>Modern & secure data practices</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 15v2" stroke="#fff" strokeWidth="2"/>
                </svg>
                <span>End to end encryption</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 17v-2a2 2 0 012-2h12a2 2 0 012 2v2" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 12V7" stroke="#fff" strokeWidth="2"/>
                  <circle cx="12" cy="5" r="2" stroke="#fff" strokeWidth="2"/>
                </svg>
                <span>Audited & tested</span>
              </li>
            </ul>
            {/* Find out more button */}
            <a href="#" className="inline-flex items-center gap-2 text-white font-medium mt-4 group">
              Find out more
              <span className="bg-[#222] rounded w-7 h-7 flex items-center justify-center group-hover:bg-[#444] transition">
                <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2"/>
                </svg>
              </span>
            </a>
          </div>
          {/* Right Side */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-0 border border-gray-700">
            {/* SOC2 */}
            <div className="flex flex-col items-center justify-center border border-gray-700 h-56">
              <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mb-2">
                {/* Placeholder for SOC2 badge */}
                <span className="text-gray-300 font-bold text-lg">SOC2</span>
              </div>
              <span className="text-gray-400 text-sm mt-2">SOC2</span>
            </div>
            {/* CCPA */}
            <div className="flex flex-col items-center justify-center border border-gray-700 h-56">
              <div className="w-20 h-20 bg-gray-600 rounded flex items-center justify-center mb-2">
                {/* Placeholder for CCPA badge */}
                <span className="text-gray-300 font-bold text-lg">CA</span>
              </div>
              <span className="text-gray-400 text-sm mt-2">CCPA</span>
            </div>
            {/* ISO 27001 */}
            <div className="flex flex-col items-center justify-center border border-gray-700 h-56">
              <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mb-2">
                {/* Placeholder for ISO badge */}
                <span className="text-gray-300 font-bold text-lg">ISO</span>
              </div>
              <span className="text-gray-400 text-sm mt-2">ISO 27001</span>
            </div>
            {/* GDPR */}
            <div className="flex flex-col items-center justify-center border border-gray-700 h-56">
              <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mb-2">
                {/* Placeholder for GDPR badge */}
                <span className="text-gray-300 font-bold text-lg">EU</span>
              </div>
              <span className="text-gray-400 text-sm mt-2">GDPR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Headings */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black">What Customers Say</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-400 mt-2">About Rogo</h3>
          </div>
          {/* Testimonial Card and Image */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Testimonial Card */}
            <div className="bg-[#f5f3ee] flex-1 p-10 flex flex-col justify-between">
              <div>
                <div className="font-bold text-lg mb-4 tracking-widest">NOMURA</div>
                <p className="text-2xl md:text-3xl text-black mb-8 leading-snug">
                  "Our strategic integration of Rogo is going to transform how we deliver value to clients. Rogo enables our teams to analyze market data and identify opportunities with unprecedented speed and precision, while allowing our bankers to focus more deeply on client relationships and strategic advisory."
                </p>
              </div>
              <div>
                <div className="font-bold text-lg text-black">Patrice Maffre</div>
                <div className="text-xs text-gray-500 tracking-widest mt-1">
                  INTERNATIONAL HEAD OF INVESTMENT BANKING, NOMURA
                </div>
              </div>
            </div>
            {/**/}
            <div className="flex-1 min-h-[350px] bg-gray-200 flex items-center justify-center overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/uWpIUeiCXzNAcme71jTlsaj2kZw.jpg?scale-down-to=1024"
                alt="Nomura testimonial image"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Optional: Carousel Arrows */}
          <div className="flex justify-end gap-2 mt-4">
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-400 hover:bg-gray-200 transition">
              &#8592;
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-400 hover:bg-gray-200 transition">
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top: Heading, Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              {/* Headings */}
              <h2 className="text-5xl font-serif text-black mt-4">Unlock Financial AI</h2>
              <h3 className="text-5xl font-serif text-gray-400 mt-2">For Your Firm</h3>
            </div>
            {/* Request Demo Button */}
            <div className="mt-8 md:mt-0">
              <button className="bg-black text-white px-6 py-2 rounded-full text-base font-medium hover:bg-gray-900 transition">
                Request Demo
              </button>
            </div>
          </div>
          {/* Divider */}
          <hr className="border-t border-gray-200 my-10" />
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:pl-8 text-black">
            {/* Overview */}
            <div>
              <div className="uppercase text-xs text-gray-400 font-mono mb-4 tracking-widest">Overview</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400 text-black">Product</a></li>
                <li><a href="#" className="hover:text-gray-400 text-black">Features</a></li>
                <li><a href="#" className="hover:text-gray-400 text-black">Security</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <div className="uppercase text-xs text-gray-400 font-mono mb-4 tracking-widest">Company</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400 text-black">About</a></li>
                <li><a href="#" className="hover:text-gray-400 text-black">Careers</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <div className="uppercase text-xs text-gray-400 font-mono mb-4 tracking-widest">Legal</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400 text-black">Terms of Use</a></li>
                <li><a href="#" className="hover:text-gray-400 text-black">Privacy Policy</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <div className="uppercase text-xs text-gray-400 font-mono mb-4 tracking-widest">Contact</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400e text-black">Request Demo</a></li>
                <li><a href="#" className="hover:text-gray-400 text-black">Email</a></li>
                <li><a href="#" className="hover:text-gray-400 text-black">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-400 text-black">X / Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
