import React from 'react'
import { GoDotFill } from "react-icons/go";
const Hero = () => {
  return (
    <>
    <section className="hero pt-[8rem]">
        <h1 className='text-white  text-center text-[1rem] flex justify-center'>Hello <span className='pt-1'><GoDotFill className ="text-[#EA6E54]" /></span></h1>
        <h1 className='text-white  text-center text-[1.5rem] mt-2'>I'm Aulex</h1>
        <div className="bord flex justify-center px-[9rem]">

        <span className='bg-[#EA6E54] flex justify-center w-[100%] h-[2px]'></span>
        </div>
        <h1 className='text-white  text-center text-[1.5rem] font-bold'>SOFTWARE DEVELOPER</h1>
    </section>

    <section className="btn flex justify-center space-x-6 px-[1rem] pt-[2rem]">
<button className="getP bg-[#EA6E54] w-full h-[3rem] text-zinc-200 font-bold">Get Project ?</button>
<button className="resume  border-2 border-[#EA6E54] w-full h-[3rem] font-bold text-zinc-200 ">My resume</button>
    </section>
    
    
    </>
  )
}

export default Hero