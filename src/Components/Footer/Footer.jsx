import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import {CiLinkedin} from "react-icons/ci"
import {FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold'>Contact Me ➤ </h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel free to react Out 🤗</h3>
        </div>

           <ul className='text-sm md:text-xl'>

             <li className='flex gap-1 items-center' > 
                <MdOutlineEmail/> 
             <a href="mailto:armanfarooqui078601@gmail.com" className="hover:underline">
                    armanfarooqui078601@gmail.com
              </a> 
             </li>

             <li className='flex gap-1 items-center'>  
             <CiLinkedin/>
             <a 
             href="http://www.linkedin.com/in/armanfarooqui038501" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="hover:underline"
               >
               http://www.linkedin.com/in/armanfarooqui038501
                </a>
              </li>

             <li className='flex gap-1 items-center'> 
             <FaGithub/> 
             <a 
             href="https://github.com/Mrfarooqui038501" 
             target="_blank" 
             rel="noopener noreferrer"
             className="hover:underline"
               >
               https://github.com/Mrfarooqui038501
             </a>
              </li>
        </ul>
    </div>
  )
}

export default Footer;
