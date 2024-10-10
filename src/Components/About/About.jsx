import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import Photo from  "../../assets/about2.jpg"

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center 
    bg-black shadow-xl md-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About 💁 </h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className="md:h-80" src={Photo} alt="about Img" />
                  <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                            Front-end Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            Front-end Developer with a strong foundation in Html, Css, Javascript, React.js, Redux, Axios. Skilled in building intuitive and visually appealing web interfaces. Proven ability to deliver high-quality projects and collaborate effectively. Eager to contribute to innovative teams and drive technological advancements.
                             </p>

                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                            Back-end Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            Dedicated Back-end Developer with a strong foundation in Node.js and Express.js. Skilled in building scalable and efficient server-side applications. Proficient in working with MongoDB and other databases to manage and store data effectively. Experienced in designing and implementing RESTful APIs for seamless integration with front-end applications. Committed to writing clean, maintainable, and optimized code. Eager to contribute my expertise to innovative projects and collaborate with talented teams.
                            </p>

                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                            Full-Stack Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                            Dedicated Full-Stack Developer with a strong foundation in both front-end and back-end technologies. Proficient in  technologies, e.g., HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB. Skilled in building scalable, responsive, and user-friendly web applications from start to finish. Experienced in designing and implementing RESTful APIs, managing databases, and crafting intuitive user interfaces. Committed to writing clean, maintainable, and optimized code. Eager to contribute my expertise to innovative projects and collaborate with talented teams.
                            </p>

                        </span>
                    </div>

                  </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About
