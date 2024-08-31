import React, { useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/boniface-ifebuche-aulex-467a74247/", icon: <FaLinkedin /> },
  { href: "https://x.com/Aulex_0", icon: <FaTwitter /> },
  { href: "https://www.instagram.com/aul__ex/", icon: <FaInstagram /> },
  { href: "https://github.com/au-lex?tab=repositories", icon: <FaGithub /> },
  { href: "mailto:aulex500@gmail.com", icon: <FaEnvelope /> }
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" }
];

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id='contact' className="bg[#121F28] text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h1 className='flex text-zinc-100 text-[1.4rem] logo font-bold'>
              Aulex
              <span className='pt-2'><GoDotFill className="text-[#EA6E54] animate-bounce" /></span>
            </h1>
            <div className="mb-4">
              <h2 className="text-2xl">Let's Connect</h2>
              <p className="text-gray-300 mt-2">Reach out for collaborations or just to say hi!</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className='hidden lg:block'>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-gray-300 hover:text-[#EA6E54] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 rounded text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 rounded text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 rounded text-white"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-[#EA6E54] text-white px-4 py-2 rounded w-full hover:bg-[#d15a42]">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index}
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