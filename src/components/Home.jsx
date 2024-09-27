import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import myImage from "../assets/newimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "Frontend Developer", "Designer", "Cricketer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full"> 
          {/* Dynamic Typed.js Text */}
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            I'm a <span ref={typedElement}></span>
          </h2>
          
          <p className="text-gray-500 py-4 max-w-md">
            I have experience with various technologies and have built several projects utilizing them.
          </p>
          
          <div>
            <Link 
              to="portfolio" 
              smooth 
              duration={500} 
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img 
            src={myImage} 
            alt="my profile" 
            className="rounded-full mx-auto w-2/3 md:w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
