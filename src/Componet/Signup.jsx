import React, { useState } from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { BsInfo } from "react-icons/bs";
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false); 

  return (

    

    <>
    
    <main className="signupCon flex">
        <figure className="signuimg w-[30%] bg">
           <div className="logo flex justify-center pt-[5rem]">
            <img src="https://res.cloudinary.com/dytlpvw1o/image/upload/v1716454354/WhatsApp_Image_2024-02-22_at_08.00_1_t40adw.png" alt="" />
           </div>

           <div className="handshake">
            <img src="https://res.cloudinary.com/dytlpvw1o/image/upload/v1716454338/Light-brown-in-Jacket10_benxbk.png" 
            
            className='w-full h-[350px] object-cover'
            alt="" />
           </div>

           <section className="desc pt-[3rem]">
            <h1 className='text-[2.5rem] tx font-semibold text-center  leading-[2.6rem]'>Partnership for <br /> Business Growth</h1>
            <p className="desc text-center text-slate-300 tx my-4 text-[12px]">Partnerships are pivotal for business growth,
             enabling<br /> companies to leverage mutual strengths, share risks,<br />
              and capitalize on opportunities.</p>
           </section>
        </figure>

        <figcaption className="signupInput w-[70%] h-[120vh] border  bg-[#EEF0F3] g-red-500">
<section className="formContainer">
    <section className="flex justify-between px-6 mt-5">
        <span className='flex'>
            <HiOutlineChevronLeft className='text-[20px] mr-1 pt-[0.5px]' />
            <h6 className='text-[13px]'>Return Home</h6>
        </span>
        <span>
            <h6 className='text-[13px]'>Already a Member?<a className='font-semibold' href="/"> LOG IN NOW</a></h6>
        </span>
    </section>

    {/* form */}

    <section className="formGeneral flex justify-center items-center h-[100vh]">

   

    <form  className="formCont ">

        <section className="formdesc text-center">


        <h2 className='text-[25px] font-bold'>BECOME AN EXCLUSIVE MEMBERS</h2>
        <p  className='text-[12px] my-4'>SIGN UP and join the partnership </p>
        </section>

        <section className="inputContent">


        <div className="firstname relative mb-[2rem]">
            <input  type="text" placeholder='Johnson doe' className='p-4  px-[3rem] w-full   bx ' />
            <span className='absolute left-[.8rem] top-4'>
         <RiUser3Line className='text-[25px]  opacity-50' />
            </span>
        </div>
        <div className="firstname relative mb-[2rem]">
            <input  type="email" placeholder='example@email.com' className='p-4  px-[3rem] w-full   bx ' />
            <span className='absolute left-[.8rem] top-[1.2rem]'>
         <HiOutlineMail className='text-[25px] opacity-50' />
            </span>
        </div>
        <div className="firstname relative mb-[2rem]">
            <input  type={showPassword ? "text" : "password"}  placeholder='*********' className='p-4  px-[3rem] w-full   bx ' />
            <span className='absolute left-[.8rem] top-4'>
         <IoLockClosedOutline  className='text-[25px] opacity-50' />
            </span>
            <span className='absolute right-[2rem] top-4'>
                {showPassword ? (
                    <h2 className='text-[18px] cursor-pointer opacity-50' onClick={() => setShowPassword(false)}>close</h2>

                ): (
<h2 className='text-[18px] cursor-pointer opacity-50' onClick={() => setShowPassword(true)}>show</h2>
                )}
         
            </span>
        </div>
        <div className="firstname relative mb-[2rem]">
           
            <button className="btn px-[2rem] bg-[#24243E] text-slate-200 w-full p-4 text-left">Become a Mentor</button>
            <span className='absolute right-[2rem] top-4'>
         <MdArrowForward   className='text-[20px] text-slate-200' />
            </span>
        </div>
        </section>
    </form>
    </section>

    <section className="flex justify-between px-6 mt-">
        <span className='flex'>
           
            <h6 className='text-[13px]'>Copyright 2021 - 2022 5Starcompany. All rights Reserved</h6>
        </span>
        <span className='flex'>
            <BsInfo className='text-[20px] text-slate-600 pt-[0.5px]' />
            <h6 className='text-[13px]'>Need help?</h6>
        </span>
       
    </section>
</section>
        </figcaption>
    </main>
    </>
  )
}

export default Signup