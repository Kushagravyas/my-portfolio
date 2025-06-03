"use client"

import React, { useState } from "react"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  // Keep this for desktop navigation
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ]

  const socialLinks = [
    {
      id: 1,
      child: <FaGithub size={30} />,
      href: "https://github.com/Kushagravyas",
      style: "bg-[#333333]/90",
      text: "GitHub"
    },
    {
      id: 2,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/kushagra-vyas-141394256/",
      style: "bg-[#0A66C2]/90",
      text: "LinkedIn"
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: "mailto:kushagravyas1122@gmail.com",
      style: "bg-[#EA4335]/90",
      text: "Mail"
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={30} />,
      href: "/KushagraVyasResume.pdf",
      style: "bg-[#565f69]/90",
      text: "Resume",
      download: true,
    },
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 text-white bg-slate-900/95 backdrop-blur-lg fixed z-50 border-b border-white/10">
      <div className="group">
        <h1 className="text-4xl font-signature ml-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transform transition-all duration-300 group-hover:scale-110">
          Kushagra
        </h1>
        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ml-2"></div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="relative group px-4 py-2 cursor-pointer capitalize font-medium text-gray-300 hover:text-white transition-all duration-300"
          >
            <Link to={link} smooth duration={500} className="relative z-10">
              {link}
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"></div>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden relative group">
        <div className="p-2 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 group-hover:bg-white/10 transition-all duration-300">
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu - Social Links Only */}
      {nav && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg animate-fadeIn flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            {socialLinks.map(({ id, child, href, style, download, text }, index) => (
              <a
                key={id}
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center w-48 h-14 rounded-lg ${style} backdrop-blur-lg border border-white/10 
                  hover:scale-110 hover:shadow-xl hover:shadow-white/20 
                  transition-all duration-300 animate-slideInRight
                  relative overflow-hidden px-4`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setNav(false)}
              >
                {/* Icon and text in a row */}
                <div className="flex items-center gap-3 z-10">
                  <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {child}
                  </div>
                  <span className="text-white text-sm font-light">
                    {text}
                  </span>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 
                  transition-all duration-300 rounded-lg blur-sm">
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                  transition-all duration-700">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent 
                    transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
