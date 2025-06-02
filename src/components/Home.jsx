import { useEffect, useRef } from "react"
import Typed from "typed.js"
import myImage from "../assets/newimage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"

const Home = () => {
  const typedElement = useRef(null)

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "Frontend Developer", "UI/UX Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    }

    const typed = new Typed(typedElement.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div
      name="home"
      className="w-full min-h-screen h-auto sm:h-screen pt-20 md:pt-24 bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 md:px-8">
        <div className="flex flex-col justify-center h-full md:w-1/2 mt-8 md:mt-0">
          <div className="mb-4 md:mb-8">
            <h1 className="text-xl sm:text-3xl font-light mb-2 md:mb-4">
              Hello, I'm
            </h1>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-2 md:mb-4">
              Kushagra
            </h2>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2">
              I'm a{" "}
              <span
                ref={typedElement}
                className="text-cyan-400"
              ></span>
            </h3>
          </div>

          <p className="text-gray-400 py-2 md:py-4 max-w-md text-base md:text-lg">
            I have experience with various technologies and have built several
            projects utilizing them. Let's create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="group relative overflow-hidden text-white w-full sm:w-fit px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center text-sm md:text-base">
                View Portfolio
                <MdOutlineKeyboardArrowRight 
                  className="ml-1 md:ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="group relative overflow-hidden text-white w-full sm:w-fit px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 flex items-center justify-center rounded-xl border-2 border-cyan-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 text-sm md:text-base"
            >
              <span className="relative z-10">Get In Touch</span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-[500px]">
            <img
              src={myImage || "/placeholder.svg"}
              alt="Kushagra's profile"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
