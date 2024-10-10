import React from 'react';
import Photo from '../../assets/portfolio1.jpg';
import TextChange from '../TextChanger';

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChange /> 🙋‍♂️
        </h1>
        <br />
        <p className='text-sm md:text-2xl tracking-tight'>Full-Stack Developer</p>
        <br />
        <a
          href='https://drive.google.com/file/d/1mW14tTKjYAUH4x8pWoI8tUd7cw_QKrmw/view?usp=drivesdk'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-5 md:mt-10 text-white py-2 px-4 text-lg md:text-xl md:py-3 md:px-5 hover:opacity-85 duration-300 hover:scale-110 font-semibold rounded-3xl bg-[#465697]'
        >
          Resume
        </a>
      </div>

      <div className='flex-shrink-0'>
        <img
          src={Photo}
          alt='Portfolio'
          className='w-70 md:w-100 transform transition-transform duration-300 hover:scale-105 p-4 pl-8 pr-20'
        />
      </div>
    </div>
  );
};

export default Home;
