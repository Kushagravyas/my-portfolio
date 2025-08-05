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
// import linux from "../assets/linuxlogo.webp";
import CICD from "../assets/CI image.png";


const techDomains = [
  {
    heading: "Frontend",
    color: "hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent",
    techs: [
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
        gradient: "from-blue-400 to-cyan-900",
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
    ],
  },
  {
    heading: "Backend",
    color: "hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent",
    techs: [
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
        src: node,
        title: "Node JS",
        style: "shadow-green-500/50 hover:shadow-emerald-400/70",
        gradient: "from-green-500 to-emerald-600",
      },
      {
        id: 9,
        src: expressjs,
        title: "Express JS",
        style: "shadow-yellow-500/50 hover:shadow-yellow-400/70",
        gradient: "from-yellow-200 to-orange-300"
      },
      {
        id: 10,
        src: redis,
        title: "Redis",
        style: "shadow-red-500/50 hover:shadow-red-400/70",
        gradient: "from-red-400 to-red-600",
      },
    ],
  },
  {
    heading: "Database",
    color: "hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent",
    techs: [
      {
        id: 11,
        src: sql,
        title: "SQL",
        style: "shadow-pink-400/50 hover:shadow-purple-400/70",
        gradient: "from-pink-400 to-purple-500",
      },
      {
        id: 12,
        src: mongodb,
        title: "MongoDB",
        style: "shadow-green-500/50 hover:shadow-emerald-400/70",
        gradient: "from-green-400 to-emerald-500"
      },
    ],
  },
  {
    heading: "Cloud & DevOps",
    color: "hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent",
    techs: [
      {
        id: 13,
        src: aws1,
        title: "AWS",
        style: "shadow-purple-500/50 hover:shadow-violet-400/70",
        gradient: "from-purple-400 to-violet-600"
      },
      {
        id: 14,
        src: docker,
        title: "Docker",
        style: "shadow-blue-400/50 hover:shadow-blue-500/70",
        gradient: "from-blue-300 to-blue-600",
      },
      {
        id: 15,
        src: CICD,
        title: "CI/CD",
        style: "shadow-yellow-400/50 hover:shadow-yellow-600/70",
        gradient: "from-yellow-200 to-yellow-300",
      },
      {
        id: 16,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400/50 hover:shadow-slate-400/70",
        gradient: "from-gray-400 to-slate-600",
      },
    ],
  },
];

const TechGrid = ({ techs }) => (
  <div className="grid grid-cols-2 sm:grid-cols-2 gap-5">
    {techs.map(({ id, src, title, style, gradient }) => (
      <div
        key={id}
        className={`relative group bg-white/5 rounded-xl p-4
          hover:scale-105 hover:-translate-y-1
          duration-300 cursor-pointer
          border border-transparent hover:border-opacity-100
          transition-all ${style}
          shadow-md shadow-black/20
          `}
      >
        {/* Gradient shadow on hover */}
        <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} 
          opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500 rounded-xl
          -z-10`} />
        {/* Icon */}
        <div className="w-12 h-12 mx-auto mb-2 p-2 rounded-lg group-hover:bg-white/10 transition-all duration-500">
          <img
            src={src}
            alt={title}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
        {/* Title */}
        <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-all duration-300 text-center">
          {title}
        </p>
      </div>
    ))}
  </div>
);

const Technologies = () => (
  <div
    name="Technologies"
    className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-8"
  >
    <div className="max-w-6xl mx-auto p-4 flex flex-col justify-center w-full">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Technologies
        </p>
        <p className="py-3 text-base text-gray-400">
          These are the technologies I've mastered
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {techDomains.map((domain, idx) => (
          <div
            key={domain.heading}
            className="bg-white/5 rounded-xl border border-cyan-900/40 shadow-md shadow-black/20 p-4 flex flex-col transition-all duration-300 hover:border-cyan-400/70 hover:bg-white/10 hover:scale-105"
          >
            <h3
              className={`
                text-lg font-bold mb-4 text-center cursor-pointer transition-all duration-300
                bg-gradient-to-r
                ${
                  idx === 0
                    ? "from-orange-400 to-red-400"
                    : idx === 1
                    ? "from-green-400 to-blue-400"
                    : idx === 2
                    ? "from-pink-400 to-purple-400"
                    : "from-cyan-400 to-purple-400"
                }
                bg-clip-text text-transparent
                hover:from-white hover:to-cyan-400 hover:text-transparent
                hover:scale-105
              `}
            >
              {domain.heading}
            </h3>
            <TechGrid techs={domain.techs} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Technologies;
