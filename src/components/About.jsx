import React from "react";


const About = () => {
  return (
    <div name="about" className="w-full h-scren bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-2xl mt-2"> I am a Full Stack Developer with expertise in the React ecosystem and modern web technologies such as JavaScript, Node.js, and MongoDB.
           I build responsive, user-focused applications with a strong emphasis on performance, scalability, and clean code practices.
            With a proven history of delivering high-quality web solutions, I thrive in collaborative environments and enjoy working with teams to solve complex problems. 
            I’m committed to continuous learning and staying updated with the latest trends to create efficient and impactful applications..</p>
            
      </div>
    </div>
  )
}

export default About
