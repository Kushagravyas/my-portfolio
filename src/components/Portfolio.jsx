import React from "react";
import Dashboard from '../assets/portfolio/Dashboard.png'
import Image_slider from '../assets/portfolio/animal.png'
import StockGenius from '../assets/portfolio/Stockgenius.png'
import EventIT from '../assets/portfolio/Eventit.png'
import AICodeReviewer from '../assets/portfolio/codereviewer.png'


const Portfolio = () => {

    const portfolios = [
      {
        id: 1, 
        src: StockGenius,
        code: "https://github.com/Kushagravyas/StockGenius.git",
        demo:"https://stock-genius-ivory.vercel.app/"
      },
      {
        id: 2, 
        src: AICodeReviewer,
        code: "https://github.com/Kushagravyas/Minor_project.git",
        demo:"https://minor-project-khaki-one.vercel.app/"
      },
      {
        id: 3, 
        src: EventIT,
        code: "https://github.com/Kushagravyas/EventIT.git",
        demo:"https://kushagravyas.github.io/EventIT/"
      },
      {
        id: 4, 
        src: Image_slider,
        code: "https://github.com/Kushagravyas/Animal-image-slider.git",
        demo: "https://kushagravyas.github.io/Animal-image-slider/"
      },
      {
        id: 5, 
        src: Dashboard,
        code: "https://github.com/Kushagravyas/shoppy-dashboard-app.git",
        demo: "dashboard-app-phi-ochre.vercel.app"
      },
      
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8 mt-14">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6 text-xl" >Check out some of my work right here</p>
          </div>

          

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {
            portfolios.map(({id, src,code,demo}) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                 <img src={src} 
                 alt=""
                 className="rounded-md duration-200 hover:scale-105"
                 />
                 <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"><a href={demo} target="_blank" rel="noreferrer">Demo</a></button>
                    <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"><a href={code} target="_blank" rel="noreferrer">Code</a></button>  
                 </div>
             </div>
            ))
          }


             

          </div>
        </div>
    </div>
  )
}

export default Portfolio
