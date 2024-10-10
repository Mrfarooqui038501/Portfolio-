import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects 🖥️ </h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard 
          title="IMBD Clone"
          main="As a Front-end Developer, I successfully developed a dynamic IMBD clone using React, Tailwind CSS, and state management tools. The application allows users to explore trending movies, manage personal watchlists, and filter content effectively. I leveraged React's component-based architecture and Tailwind CSS for efficient development and a visually appealing interface." 
          demoUrl="https://my-imdb-website.netlify.app/" 
          sourceCodeUrl="https://github.com/Mrfarooqui038501/IMBD-clone-React"
          />

          <ProjectCard 
          title="Blog Website"
          main="I developed a feature-rich blog website using React, Redux, and modern web technologies.
            The platform includes robust user management for account creation, authentication,and profile
            handling.It incorporates a powerful content management system with TinyMCE editor integration.
            Users can effortlessly create, edit, and manage their blog posts, enhancing the overall blogging
           experience.." 
          demoUrl="https://myblogingwebsite.netlify.app/" 
          sourceCodeUrl="https://github.com/Mrfarooqui038501/React_learning/tree/main/Blog"
          /> 

         <ProjectCard 
          title="TODO List"
          main="I've developed a robust and user-friendly todo list application using React, HTML, CSS, JavaScript, and React Router Dom. The app allows users to create, edit, delete, and prioritize tasks, making it an essential tool for staying organized and productive. Key features include seamless navigation between different task views, real-time updates, and the ability to filter and search for tasks." 
          demoUrl="https://arman-todo-list.netlify.app/" 
          sourceCodeUrl="https://github.com/Mrfarooqui038501/React_learning/tree/main/09todoList"
          />

         <ProjectCard 
          title="Landing Page"
          main="I've developed a visually appealing and engaging landing page using React, HTML, CSS, JavaScript, and React Router Dom. The page effectively showcases the key features and benefits of the product or service, with a clear call to action that encourages visitors to learn more or take the next step. I've optimized the page for SEO and ensured a seamless user experience across different devices and browsers." 
          demoUrl="https://arman-landing-page.netlify.app/" 
          sourceCodeUrl="https://github.com/Mrfarooqui038501/React_learning/tree/main/07reactRouter"
          />

           </div>
      
    </div>
  )
}

export default Project
