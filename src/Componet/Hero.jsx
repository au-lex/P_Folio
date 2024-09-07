import React from 'react';
import { GoDotFill } from "react-icons/go";
import { FaChevronDown, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";


const socialLinks = [
  { href: "https://www.linkedin.com/in/boniface-ifebuche-aulex-467a74247/", icon: <FaLinkedin /> },
  { href: "https://x.com/Aulex_0", icon: <FaTwitter /> },
  { href: "https://www.instagram.com/aul__ex/", icon: <FaInstagram /> },
  { href: "https://github.com/au-lex?tab=repositories", icon: <FaGithub /> },
  { href: "mailto:aulex500@gmail.com", icon: <FaEnvelope /> }
];

const Hero = () => {
  return (
    <section id='home' className="heo  bg-rgradient-to-b from-gray-900 to-gray-800 pt-16 sm:pt-24 md:pt-32 relative  overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full border border-[#EA6E54] opacity-10 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="md:max-w-6xl mx-auto  plg:x-[5rem] lg:pt-0 pt-[5rem]">
        <div className="flex flex-col lg:flex-row items-center lg:h-[30rem] justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className='text-white text-center lg:text-left text-base sm:text-lg flex justify-center lg:justify-start items-center'>
              Hello <GoDotFill className="text-[#EA6E54] ml-1" />
            </h1>
            <h1 className='text-white text-center lg:text-left text-2xl sm:text-3xl -2'>I'm Aulex</h1>
            <div className="flex justify-center lg:justify-start mt-">
              {/* <span className='bg-[#EA6E54] border border-dashed w-20 sm:w-24 h-[2px]'></span> */}
            </div>
            <h1 className='text-white text-center lg:text-left text-2xl sm:text-3xl font-bold mt-2'>SOFTWARE DEVELOPER</h1>
            <div className="border flex justify-center my-2 px-[8rem]">

              <span className='bg-[#EA6E54] flex justify-center w-[100%] h-[2px]'></span>
            </div>
            <p className='text-white text-center hidden lg:block lg:text-left mt-4 max-w-2xl'>

              Breathing life into pixels and code.
              Crafting immersive digital experiences that engage and inspire.
              From concept to creation, bringing visions to virtual reality.
            </p>
            <p className='text-white text-center lg:hidden block mt-1 max-w-2xl'>

              Breathing life into pixels and code.
              {/* Crafting immersive digital experiences that engage and inspire. */}
              From concept to creation, bringing visions to virtual reality.
            </p>

            <div className="flex flex-ol sm:flex-row justify-center lg:justify-start space-x-4 sm:space-y-0 sm:space-x-6 mt-8">
              <button className="getP bg-[#EA6E54] w-full sm:w-auto px-6 py-3 text-zinc-200 font-bold hover:bg-[#d55c45] transition-colors">Get Project ?</button>
              <button className="resume border-2 border-[#EA6E54] w-full sm:w-auto px-6 py-3 font-bold text-zinc-200 hover:bg-[#EA6E54] transition-colors">My resume</button>
            </div>


          </div>


          {/* mobile */}
          <section className="mobile">
            <figure className='flex lg:hidden justify-center  relative'>
              <div className="image-container relative w-[200px] h-[200px]">
                <div className="absolute inset-0 bg-[#EA6E54] opacity-20 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-[#d7d8d8] rounded-full"></div>
                <img
                  src="https://res.cloudinary.com/durbee4ln/image/upload/v1722374230/rsz_download_prev_ui_mt9xkd.png"
                  className='absolute inset-4 w-[175px] h-[178px] object-cover rounded-full z-10'
                  alt="profile"
                />
                <div className="absolute inset-0 border-4 border-[#EA6E54] rounded-full animate-spin-slow"></div>
              </div>
            </figure>

            <div className="social-links flex flex-wrp lg:hidden justify-center space-x-5 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 border-2 border-[#EA6E54] rounded-full text-white hover:text-white hover:bg-[#EA6E54] transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </section>


          <figure className=" hidden  lg:block ">



            <div >
              <div className="image-containe  relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                <div className="absolute inset-0 bg-[#EA6E54] opacity-20 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-[#d7d8d8] rounded-full"></div>

                <img
                  src="https://res.cloudinary.com/durbee4ln/image/upload/v1722374230/rsz_download_prev_ui_mt9xkd.png"
                  className='absolute inset-4 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover rounded-full z-10'
                  alt="profile"
                />


                <div className="absolute inset-0 border-4 border-[#EA6E54] rounded-full animate-spin-slow"></div>
              </div>

            </div>
            <div className="social-links flex  justify-center lg:justify-start space-x-4 sm:space-x-5 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#EA6E54] rounded-full text-white hover:text-white hover:bg-[#EA6E54] transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </figure>
        </div>

        <div className="scroll-indicator flex justify-center mt-12">
          <FaChevronDown className="text-[#EA6E54] text-2xl sm:text-3xl animate-bounce" />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] lg:w-[]
       lg:h-[300px] bg-[#EA6E54] rounded-full filter blur-[120px] lg:blur-[250px] opacity-10 lg:opacity-80
       
        -z-10"></div>
    </section>
  );
}

export default Hero;