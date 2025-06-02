const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full min-h-screen relative z-10">
        <div className="pb-8 transform transition-all duration-1000 hover:scale-105">
          <p className="text-5xl font-bold inline border-b-4 border-gradient-to-r from-cyan-400 to-purple-400 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeInUp">
            About
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mt-2 rounded-full animate-slideInLeft"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 transform transition-all duration-700 hover:scale-105 hover:shadow-purple-500/25 animate-fadeInUp animation-delay-500">
          <p className="text-xl leading-relaxed text-gray-100 animate-fadeInUp animation-delay-1000">
            I am a highly skilled{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              full-stack developer
            </span>{" "}
            with a strong foundation in database technologies and modern development tools. My experience in crafting
            user-friendly web applications is backed by a passion for learning and adapting to new technologies,
            ensuring that I stay at the forefront of industry advancements.
          </p>

          <p className="text-xl leading-relaxed text-gray-100 mt-6 animate-fadeInUp animation-delay-1500">
            Through my recent{" "}
            <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent font-semibold">
              React Developer internship
            </span>
            , I honed my expertise in front-end frameworks, working on real-world projects that emphasized responsive
            design, dynamic user interfaces, and seamless user experiences. I thrive in collaborative environments,
            where I can contribute to innovative solutions and develop efficient, scalable applications alongside
            talented teams.
          </p>

          <p className="text-xl leading-relaxed text-gray-100 mt-6 animate-fadeInUp animation-delay-2000">
            I am eager to bring my{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              technical skills, problem-solving abilities, and creative mindset
            </span>{" "}
            to projects that make a meaningful impact.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
