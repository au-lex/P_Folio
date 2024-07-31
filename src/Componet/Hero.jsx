import React from 'react';
import { GoDotFill } from "react-icons/go";
import { FaChevronDown, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/your-profile", icon: <FaLinkedin /> },
  { href: "https://twitter.com/your-profile", icon: <FaTwitter /> },
  { href: "https://www.instagram.com/your-profile", icon: <FaInstagram /> },
  { href: "https://github.com/your-profile", icon: <FaGithub /> },
  { href: "mailto:your-email@example.com", icon: <FaEnvelope /> }
];

const Hero = () => {
  return (
    <section className="hero pt-[8rem] relative overflow-hidden px-4 md:px-6 lg:px-8">
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

      <h1 className='text-white text-center text-[1rem] flex justify-center items-center'>
        Hello <GoDotFill className="text-[#EA6E54] ml-1" />
      </h1>
      <h1 className='text-white text-center text-[1.5rem] mt-2'>I'm Aulex</h1>
      <div className="border flex justify-center mt-2">
        <span className='bg-[#EA6E54] w-[20%] h-[2px]'></span>
      </div>
      <h1 className='text-white text-center text-[1.5rem] font-bold mt-2'>SOFTWARE DEVELOPER</h1>
      <p className='text-white text-center mt-4 px-4 md:px-6 lg:px-8'>
        Passionate about creating interactive applications and experiences on the web. Skilled in a variety of front-end and back-end technologies.
      </p>
      
      <section className="btn flex  justify-center space-x-4 md:space-y]-0 md:space-x-6 pt-[2rem]">
        <button className="getP bg-[#EA6E54] w-full md:w-auto h-[3rem] text-zinc-200 font-bold hover:bg-[#d55c45] transition-colors">Get Project ?</button>
        <button className="resume border-2 border-[#EA6E54] w-full md:w-auto h-[3rem] font-bold text-zinc-200 hover:bg-[#EA6E54] transition-colors">My resume</button>
      </section>
      
      <figure className='flex justify-center pt-[4rem] relative'>
        <div className="image-container relative w-[200px] h-[200px]">
          <div className="absolute inset-0 bg-[#EA6E54] opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 bg-[#121F28] rounded-full"></div>
          <img 
            src="https://res.cloudinary.com/durbee4ln/image/upload/v1722374230/rsz_download_prev_ui_mt9xkd.png"
            className='absolute inset-4 w-[175px] h-[178px] object-cover rounded-full z-10'
            alt="profile"
          />
          <div className="absolute inset-0 border-4 border-[#EA6E54] rounded-full animate-spin-slow"></div>
        </div>
      </figure>

      <div className="social-links flex flex-wrp justify-center space-x-5 mt-8">
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

      <div className="scroll-indicator flex justify-center mt-8">
        <FaChevronDown className="text-[#EA6E54] text-3xl animate-bounce" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[800px] bg-[#EA6E54] rounded-full filter blur-[120px] opacity-20 -z-10"></div>
    </section>
  );
}

export default Hero;
