import React from 'react';
import Ed1 from "../assets/chimchar.jpg";
import Edd from "../assets/Piplup.png";
import Eddy from "../assets/tirwtig.jpg";
import tepig from "../assets/tepig.jpg";
import oshawott from "../assets/oshawott.png";
import snivy from "../assets/snivy.jpg";
const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src: Ed1,
      link: "https://github.com/PatrickMame/RegistrationAndClockIn"
    },
    {
      id:2,
      src: Edd
    },
    {
      id:3,
      src: Eddy
    },
    {
      id:4,
      src: tepig
    },
    {
      id:5,
      src:oshawott
    },
    {
      id:6,
      src:snivy
    }
  ]
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check out some of my work right here</p>
            </div>
        

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

        {portfolios.map(({id, src, href}) =>(
              
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex    items-center justify-center">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div 
              href={href}
              className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
               Github Repo
              </button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;