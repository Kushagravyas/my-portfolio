import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import java from "../assets/java.png"
import sql from "../assets/sql.png"
import mongodb from "../assets/mongodb.png";
import aws1 from "../assets/aws1.png";
import expressjs from "../assets/expressjs.png";
import python from "../assets/pythonlogo.png";
import redis from "../assets/redislogo.png";
import docker from "../assets/Dockerlogo.png";
import linux from "../assets/linuxlogo.webp";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500/50 hover:shadow-orange-400/70",
      gradient: "from-orange-400 to-red-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500/50 hover:shadow-blue-400/70",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500/50 hover:shadow-yellow-400/70",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600/50 hover:shadow-cyan-400/70",
      gradient: "from-cyan-400 to-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400/50 hover:shadow-teal-400/70",
      gradient: "from-teal-400 to-sky-500",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-red-500/50 hover:shadow-orange-400/70",
      gradient: "from-red-500 to-orange-600",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-700/50 hover:shadow-yellow-600/70",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      id: 8,
      src: sql,
      title: "SQL",
      style: "shadow-pink-400/50 hover:shadow-purple-400/70",
      gradient: "from-pink-400 to-purple-500",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500/50 hover:shadow-emerald-400/70",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      id: 10,
      src: node,
      title: "Node JS",
      style: "shadow-green-500/50 hover:shadow-emerald-400/70",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 11,
      src: expressjs,
      title: "Express JS",
      style: "shadow-yellow-500/50 hover:shadow-yellow-400/70",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      id: 12,
      src: redis,
      title: "Redis",
      style: "shadow-red-500/50 hover:shadow-red-400/70",
      gradient: "from-red-400 to-red-600",
    },
    {
      id: 13,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400/50 hover:shadow-blue-500/70",
      gradient: "from-blue-300 to-blue-600",
    },
    {
      id: 14,
      src: linux,
      title: "Linux",
      style: "shadow-gray-500/50 hover:shadow-gray-700/70",
      gradient: "from-gray-400 to-gray-700",
    },
    {
      id: 15,
      src: aws1,
      title: "AWS",
      style: "shadow-purple-500/50 hover:shadow-violet-400/70",
      gradient: "from-purple-400 to-violet-600"
    },
    {
      id: 16,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400/50 hover:shadow-slate-400/70",
      gradient: "from-gray-400 to-slate-600",
    },
  ]

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-8"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        <div className="text-center mb-6">
          <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technologies
          </p>
          <p className="py-3 text-base text-gray-400">
            These are the technologies I've mastered
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center px-2 sm:px-0">
          {techs.map(({ id, src, title, style, gradient }) => (
            <div
              key={id}
              className={`relative group bg-white/5 rounded-xl p-4
                hover:scale-110 hover:-translate-y-2 hover:rotate-3
                duration-500 cursor-pointer
                border border-transparent hover:border-opacity-100
                transition-all ${style}
                transform perspective-1000 hover:shadow-2xl
                [transform-style:preserve-3d]`}
            >
              {/* Deep shadow for 3D depth */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} 
                opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500 rounded-xl
                transform -translate-y-4 -z-10 group-hover:translate-z-0`} />
              
              {/* Inner glow */}
              <div className={`absolute inset-0.5 bg-gradient-to-br ${gradient} 
                opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl
                transform [transform-style:preserve-3d] translate-z-12`} />

              {/* Content wrapper */}
              <div className="relative transform transition-transform duration-500 
                [transform-style:preserve-3d] group-hover:[transform:translateZ(20px)]">
                {/* Icon container */}
                <div className="w-12 h-12 mx-auto mb-3 p-2 rounded-lg 
                  group-hover:bg-white/10 transition-all duration-500
                  transform group-hover:rotate-6 group-hover:scale-110
                  [transform-style:preserve-3d] group-hover:[transform:translateZ(30px)]">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-contain drop-shadow-2xl
                      transform transition-all duration-500 group-hover:rotate-[-6deg]"
                  />
                </div>

                {/* Title */}
                <p className="text-sm font-medium text-gray-300 group-hover:text-white
                  transform transition-all duration-500
                  [transform-style:preserve-3d] group-hover:[transform:translateZ(20px)]">
                  {title}
                </p>
              </div>

              {/* Back face shadow */}
              <div className={`absolute inset-0 bg-black/50 
                opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl
                transform -translate-z-12`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
