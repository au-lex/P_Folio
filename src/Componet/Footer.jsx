import React from 'react';
import { GoDotFill } from "react-icons/go";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/your-profile", icon: <FaLinkedin /> },
  { href: "https://twitter.com/your-profile", icon: <FaTwitter /> },
  { href: "https://www.instagram.com/your-profile", icon: <FaInstagram /> },
  { href: "https://github.com/your-profile", icon: <FaGithub /> },
  { href: "mailto:your-email@example.com", icon: <FaEnvelope /> }
];

const Footer = () => {
  return (
    <footer className="bg-[#121F28] text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="">
        <h1 className=' flex text-zinc-100 text-[1.4rem] logo font-bold'>Aulex
             <span className='pt-2'><GoDotFill className ="text-[#EA6E54]  animate-bounce" /></span> </h1>
             <div className=" mb">
          <h2 className="text-2">Let's Connect</h2>
          <p className="text-gray-300 mt-">Reach out for collaborations or just to say hi!</p>
        </div>

    </div>
    

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#EA6E54] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#EA6E54] transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-[#EA6E54] transition-colors">Resume</a></li>
              <li><a href="#" className="hover:text-[#EA6E54] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: aulex500@gmail.com</p>
            <p className="text-gray-300 mb-2">Tele: +2348158772715</p>
            {/* <p className="text-gray-300">Location: Your City, Country</p> */}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#EA6E54] transition-colors"
            >
              {React.cloneElement(link.icon, { className: "w-6 h-6" })}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aulex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;