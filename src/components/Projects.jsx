import Dashboard from "../assets/portfolio/Dashboard.png"
import Image_slider from "../assets/portfolio/animal.png"
import StockGenius from '../assets/portfolio/Stockgenius.png'
import EventIT from '../assets/portfolio/Eventit.png'
import AICodeReviewer from '../assets/portfolio/codereviewer.png'
import TaskBoard from '../assets/portfolio/Taskboard.png'

const Projects = () => {
  const projects = [
    {
      id: 1, 
      src: StockGenius,
      title: "StockGenius AI",
      description: "A modern stock analysis app with smart AI suggestions and real time charts",
      code: "https://github.com/Kushagravyas/StockGenius.git",
      demo: "https://stock-genius-ivory.vercel.app/",
      tech: ["React", "NodeJs", "JavaScript", "GenAI", "API", "MongoDB", "Redis"],
      gradient: "from-emerald-400 to-cyan-500",
      glowColor: "hover:shadow-[0_0_2rem_-0.5rem_#10b981]",
      buttonGlow: "hover:shadow-[0_0_1rem_#10b98166]"
    },
    {
      id: 2, 
      src: AICodeReviewer,
      title: "Code reviewer by AI",
      description: "personalized code reviewer by using AI suggestions",
      code: "https://github.com/Kushagravyas/Minor_project.git",
      demo: "https://minor-project-khaki-one.vercel.app/",
      tech: ["React", "GenAI", "JavaScript"],
      gradient: "from-violet-400 to-indigo-500",
      glowColor: "hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6]",
      buttonGlow: "hover:shadow-[0_0_1rem_#8b5cf666]"
    },
    {
      id: 3, 
      src: EventIT,
      title: "EventIT calendar App.",
      description: "A modern calendar app with customized event selection.",
      code: "https://github.com/Kushagravyas/EventIT.git",
      demo: "https://kushagravyas.github.io/EventIT/",
      tech: ["React", "CSS", "JavaScript"],
      gradient: "from-blue-400 to-sky-500",
      glowColor: "hover:shadow-[0_0_2rem_-0.5rem_#3b82f6]",
      buttonGlow: "hover:shadow-[0_0_1rem_#3b82f666]"
    },
    {
      id: 4,
      src: Dashboard,
      title: "Dashboard App",
      description: "A modern dashboard with analytics and data visualization",
      code: "https://github.com/Kushagravyas/shoppy-dashboard-app.git",
      demo: "https://dashboard-app-phi-ochre.vercel.app",
      tech: ["React", "Chart.js", "Tailwind"],
      gradient: "from-purple-400 to-pink-500",
      glowColor: "hover:shadow-[0_0_2rem_-0.5rem_#a855f7]",
      buttonGlow: "hover:shadow-[0_0_1rem_#a855f766]"
    },
    {
      id: 5,
      src: Image_slider,
      title: "Image Slider",
      description: "An interactive image gallery with smooth transitions",
      code: "https://github.com/Kushagravyas/Animal-image-slider.git",
      demo: "https://kushagravyas.github.io/Animal-image-slider/",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-rose-400 to-orange-500",
      glowColor: "hover:shadow-[0_0_2rem_-0.5rem_#f43f5e]",
      buttonGlow: "hover:shadow-[0_0_1rem_#f43f5e66]"
    },
    {
      id: 6,
      src: TaskBoard,
      title: "Task Board App",
      description: "An personalized Task management app.",
      code: "https://github.com/Kushagravyas/Task-Board-App",
      demo: "https://task-board-app-1nni.vercel.app/",
      tech: ["HTML", "CSS", "JavaScript","React"],
     gradient: "from-yellow-400 to-lime-500",
      glowColor: "hover:shadow-[0_0_2rem_-0.5rem_#84cc16]",
      buttonGlow: "hover:shadow-[0_0_1rem_#84cc1666]" 
    }
  ]

  return (
    <div 
      name="Projects"
      className="w-full min-h-screen py-8 bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-4xl mx-auto p-4 flex flex-col justify-center w-full">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-3xl font-extrabold tracking-wide uppercase mb-4 w-fit mx-auto text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <h4 className="text-base text-gray-400 mb-8 text-center font-medium">
          Here are some examples of my work
        </h4> 
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 sm:px-0">
          {projects.map(({ id, src, title, description, code, demo, tech, gradient, glowColor, buttonGlow }) => (
            <div
              key={id}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 
                rounded-xl overflow-hidden transform transition-all duration-500 
                hover:scale-105 hover:-translate-y-1
                ${glowColor} hover:border-opacity-50 hover:bg-white/10
                [transform-style:preserve-3d] shadow-md shadow-black/20`}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${gradient} opacity-0 
                  group-hover:opacity-40 blur-md transition-all duration-500 -z-10`}
              />

              {/* Image container with gradient overlay */}
              <div className="relative overflow-hidden h-36">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transform transition-all duration-500 
                    group-hover:scale-105 group-hover:brightness-110"
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} mix-blend-overlay 
                    opacity-0 group-hover:opacity-20 transition-all duration-500`}
                    
                />
              </div>

              {/* Content Container */}
              <div className="p-3 relative z-10">
                <h3 
                  className={`text-base font-bold mb-1 group-hover:text-transparent bg-clip-text 
                    transition-all duration-500 bg-gradient-to-r ${gradient}`}
                >
                  {title}
                </h3>
                <p className="text-xs text-gray-400 mb-2 line-clamp-2 group-hover:text-gray-300 transition-colors duration-500">
                  {description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {tech.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-1.5 py-0.5 text-[10px] bg-white/5 rounded-full text-gray-400
                        transition-all duration-500 group-hover:bg-white/10
                        group-hover:text-gray-200 ${buttonGlow}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 text-xs">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 text-center py-1.5 px-3 rounded-lg font-medium 
                      transition-all duration-500 bg-gradient-to-r ${gradient}
                      hover:scale-105 ${buttonGlow}`}
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 text-center py-1.5 px-3 rounded-lg font-medium 
                      transition-all duration-500 border border-white/20
                      hover:scale-105 ${buttonGlow} hover:bg-white/10`}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
