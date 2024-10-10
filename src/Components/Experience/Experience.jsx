import React from "react";
// import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact,} from "react-icons/fa";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaDatabase, FaNode, FaWind } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Languages & Libraries ⚛ </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaWind color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNode color="#47A248" size={50} />
          </span>
          
        </div>
        <div>
           
        <h3 className="text-2xl md:text-4xl text-white font-bold">Work Experience 🗂️</h3>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
           
           
            <span className="text-white">
              <h2 className="leading-tight">CRR, IGT Solutions</h2>
              <p>Gurgaon</p>
              <p className="text-sm leading-tight font-thin">
                Sept 2019 - May-2022
              </p>
              <ul className="text-sm p-2">
                <li>- My Role was Resolving the Customer queries and Help them to provide real time resolution</li>
                
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            {/* <RiNetflixFill color="#E50914" size={50} /> */}
            <span className="text-white">
              <h2 className="leading-tight">Content Moderator, Concentrix </h2>
              <p>Gurgaon</p>
              <p className="text-sm leading-tight font-thin">
                May-2022 to July-204
              </p>
              <ul className="text-sm p-2">
                <li>- Work as content moderator My role was to filter the conent on the client app as per there Policies and Instructions.</li>
                
              </ul>
              </span>
             </div>
          <p className="text-white"> Note: I am a Fresher for IT jobs </p>

         

        </div>
      </div>
    </div>
  );
};

export default Experience;