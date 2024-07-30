import React from 'react';
import { GoDotFill } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero pt-[8rem] relative overflow-hidden">
      <h1 className='text-white text-center text-[1rem] flex justify-center items-center'>
        Hello <GoDotFill className="text-[#EA6E54] ml-1" />
      </h1>
      <h1 className='text-white text-center text-[1.5rem] mt-2'>I'm Aulex</h1>
      <div className="bord flex justify-center px-[9rem]">
        <span className='bg-[#EA6E54] w-full h-[2px]'></span>
      </div>
      <h1 className='text-white text-center text-[1.5rem] font-bold'>SOFTWARE DEVELOPER</h1>
      
      <section className="btn flex justify-center space-x-6 px-[1rem] pt-[2rem]">
        <button className="getP bg-[#EA6E54] w-full h-[3rem] text-zinc-200 font-bold hover:bg-[#d55c45] transition-colors">Get Project ?</button>
        <button className="resume border-2 border-[#EA6E54] w-full h-[3rem] font-bold text-zinc-200 hover:bg-[#EA6E54] transition-colors">My resume</button>
      </section>
      
      <figure className='flex justify-center pt-[4rem] relative'>
        <div className="image-container relative w-[200px] h-[200px]">
          <div className="absolute inset-0 bg-[#EA6E54] opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute  inset-2 bg-[#121F28] rounded-full"></div>
          <img 
            src="https://res.cloudinary.com/durbee4ln/image/upload/v1722374230/rsz_download_prev_ui_mt9xkd.png"
            className='absolute inset-4 w-[175px] h-[178px] flex justify-center object-cover rounded-full z-10'
            alt="profile"
          />
          <div className="absolute inset-0 border-4 border-[#EA6E54] rounded-full animate-spin-slow"></div>
        </div>
      </figure>
      <div className="scroll-indicator flex justify-center mt-8">
        <FaChevronDown className="text-[#EA6E54] text-3xl animate-bounce" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[800px] bg-[#EA6E54] rounded-full filter blur-[400px] opacity-50 -z-10"></div>
    </section>
  );
}

export default Hero;