"use client"

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 text-white bg-slate-900/95 backdrop-blur-lg fixed z-50 border-b border-white/10">
      <div className="group">
        <h1 className="text-4xl font-signature ml-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transform transition-all duration-300 group-hover:scale-110">
          Kushagra
        </h1>
        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ml-2"></div>
      </div>

      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="relative group px-4 py-2 cursor-pointer capitalize font-medium text-gray-300 hover:text-white transition-all duration-300"
          >
            <Link to={link} smooth duration={500} className="relative z-10">
              {link}
            </Link>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"></div>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden relative group">
        <div className="p-2 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 group-hover:bg-white/10 transition-all duration-300">
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {nav && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg animate-fadeIn">
          <ul className="flex flex-col justify-center items-center h-full space-y-8">
            {links.map(({ id, link }, index) => (
              <li
                key={id}
                className="relative group px-8 py-4 cursor-pointer capitalize text-3xl font-light text-gray-300 hover:text-white transition-all duration-300 animate-slideInRight"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} className="relative z-10">
                  {link}
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
