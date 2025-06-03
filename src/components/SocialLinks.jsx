import { FaLinkedin, FaGithub } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kushagra-vyas-141394256/",
      style: "rounded-tr-md",
      gradient: "from-blue-500 to-blue-700",
      hoverGradient: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Kushagravyas",
      gradient: "from-gray-700 to-gray-900",
      hoverGradient: "from-gray-600 to-gray-800",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kushagravyas1122@gmail.com",
      gradient: "from-red-500 to-pink-600",
      hoverGradient: "from-red-400 to-pink-500",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "KushagraVyasResume.pdf",
      style: "rounded-br-md",
      download: true,
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-400 to-emerald-500",
    },
  ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul className="space-y-2">
        {links.map(({ id, child, href, style, download, gradient, hoverGradient }, index) => (
          <li
            key={id}
            className={`group flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-500 transform transition-all ${style || ""} animate-slideInLeft`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-md transition-all duration-300`}
            ></div>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${hoverGradient} rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300`}
            ></div>

            {/* Glowing effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-md blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300`}
            ></div>

            <a
              href={href}
              className="relative z-10 flex justify-between items-center w-full text-white font-semibold transform transition-all duration-300 group-hover:scale-105"
              download={download ? "true" : undefined}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>

            {/* Animated particles */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            <div
              className="absolute bottom-2 left-2 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
