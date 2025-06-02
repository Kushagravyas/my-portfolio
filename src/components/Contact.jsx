const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto relative z-10">
        <div className="pb-8 text-center animate-fadeInUp">
          <p className="text-5xl font-bold inline bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mt-4 rounded-full mx-auto animate-slideInLeft"></div>
          <p className="py-6 text-xl text-gray-300 animate-fadeInUp animation-delay-500">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center animate-fadeInUp animation-delay-1000">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 transform transition-all duration-700 hover:scale-105 hover:shadow-cyan-500/25">
            <form action="https://getform.io/f/aqonllwa" method="POST" className="flex flex-col space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 group-hover:border-purple-400"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="E-mail"
                  placeholder="Enter your E-mail"
                  className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 group-hover:border-purple-400"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none group-hover:border-purple-400"
                ></textarea>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <button className="relative overflow-hidden text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-8 py-4 mx-auto flex items-center rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 group">
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
