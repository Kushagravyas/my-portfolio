import Dashboard from "../assets/portfolio/Dashboard.png"
import Image_slider from "../assets/portfolio/animal.png"
import StockGenius from '../assets/portfolio/Stockgenius.png'
import EventIT from '../assets/portfolio/Eventit.png'
import AICodeReviewer from '../assets/portfolio/codereviewer.png'

const Portfolio = () => {
  const portfolios = [
    {
        id: 1, 
        src: StockGenius,
        title: "StockGenius AI",
        description: "A modern stock analysis app with smart AI suggestions and real time charts",
        code: "https://github.com/Kushagravyas/StockGenius.git",
        demo:"https://stock-genius-ivory.vercel.app/",
        tech: ["React", "NodeJs", "JavaScript","GenAI","API","MongoDB","Redis"],
        gradient: "from-green-400 to-cyan-500",
    },
    {
      id: 2, 
        src: AICodeReviewer,
        title: "Code reviewer by AI",
        description: "personalized code reviewer by using AI suggestions",
        code: "https://github.com/Kushagravyas/Minor_project.git",
        demo:"https://minor-project-khaki-one.vercel.app/",
        tech: ["React", "GenAI", "JavaScript"],
        gradient: "from-green-400 to-cyan-500",
    },
    {
       id: 3, 
       src: EventIT,
       title: "EventIT calendar App.",
       description: "A modern calendar app with customized event selection.",
       code: "https://github.com/Kushagravyas/EventIT.git",
       demo:"https://kushagravyas.github.io/EventIT/",
       tech: ["React", "CSS", "JavaScript"],
       gradient: "from-green-400 to-cyan-500",
    },
    {
      id: 4,
      src: Dashboard,
      title: "Dashboard App",
      description: "A modern dashboard with analytics and data visualization",
      code: "https://github.com/Kushagravyas/shoppy-dashboard-app.git",
      demo: "https://dashboard-app-phi-ochre.vercel.app",
      tech: ["React", "Chart.js", "Tailwind"],
      gradient: "from-blue-400 to-purple-500",
    },
    {
      id: 5,
      src: Image_slider,
      title: "Image Slider",
      description: "An interactive image gallery with smooth transitions",
      code: "https://github.com/Kushagravyas/Animal-image-slider.git",
      demo: "https://kushagravyas.github.io/Animal-image-slider/",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-pink-400 to-orange-500",
    },
  ]

  return (
    <div 
      name="portfolio"
      className="w-full min-h-screen py-8 bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold inline bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </p>
          <p className="py-4 text-lg text-gray-400">
            Check out some of my featured work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 sm:px-0">
          {portfolios.map(({ id, src, title, description, code, demo, tech, gradient }, index) => (
            <div
              key={id}
              className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-lg"
            >
              {/* Image container */}
              <div className="relative overflow-hidden h-36">
                <img
                  src={src || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 relative z-10">
                <h3 className="text-base font-bold mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-400 text-xs mb-2 line-clamp-2 group-hover:text-gray-300">
                  {description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {tech.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-1.5 py-0.5 text-[10px] bg-white/5 rounded-full text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 text-sm">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-1.5 px-3 bg-cyan-600 rounded-md font-medium transition-all duration-300 hover:bg-cyan-700"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-1.5 px-3 border border-cyan-600/30 rounded-md font-medium transition-all duration-300 hover:bg-cyan-600/10"
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

export default Portfolio
