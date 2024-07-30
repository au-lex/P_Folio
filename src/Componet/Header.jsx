import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <>
<section className="mainHeader border-b bg-white flex justify-between items-center px-4 border-white h-[3rem] fixed w-full  ">
    <div className="">
        <h1 className=' flex text-zinc-900 text-[1.4rem] logo font-bold'>Aulex
             <span className='pt-2'><GoDotFill className ="text-[#EA6E54]  animate-bounce" /></span> </h1>
    </div>

    <div className="meune flex space-x-[2.5rem]">
        
       <span><FaGithubSquare className=' cursor-pointer flex text-zinc-900 text-[1.6rem] font-bold' /></span> 
       <span className=''><FiMenu  className=' cursor-pointer flex text-zinc-900 text-[1.6rem] font-bold' /></span> 
    </div>
</section>
    </>
  )
}

export default Header