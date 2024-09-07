import React, { useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from 'emailjs-com';
import Modal from "./Modal";

const socialLinks = [
  { href: "https://www.linkedin.com/in/boniface-ifebuche-aulex-467a74247/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://x.com/Aulex_0", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://www.instagram.com/aul__ex/", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://github.com/au-lex?tab=repositories", icon: <FaGithub />, label: "GitHub" },
  { href: "mailto:aulex500@gmail.com", icon: <FaEnvelope />, label: "Email" }
];

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skill", href: "#skill" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      'service_oqyie5k',
      'template_45ye9i1',
      e.target,
      '4TaXyPnuVdxuAeg43'
    )
    .then((result) => {
      console.log('Email sent:', result.text);
      setModalMessage('Message sent successfully!');
      setShowModal(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.error('Email send error:', error.text);
      setModalMessage('An error occurred. Please try again later.');
      setShowModal(true);
      setIsLoading(false);
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <footer id='contact' className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative lg:pt-10 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="relative">
            <h1 className='flex text-zinc-100 text-[2rem] logo font-bold mb-4'>
              Aulex
              <span className='pt-2'><GoDotFill className="text-[#EA6E54] animate-bounce" /></span>
            </h1>
            <div className="mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EA6E54] to-[#F3A183]">Let's Connect</h2>
              <p className="text-gray-300 mt-2">Reach out for collaborations or just to say hi!</p>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#EA6E54] opacity-20 rounded-full blur-xl"></div>
          </div>

          {/* Quick Links Section */}
          <div className='hidden lg:block'>
            <h3 className="text-xl font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#EA6E54]"></span>
            </h3>
            <ul className=''>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <a href={link.href} className="text-gray-300 hover:text-[#EA6E54] transition-colors duration-300 flex items-center">
                    <span className="mr-2">&#8227;</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-span-2 relative">
            <h3 className="text-xl font-bold mb-6 relative">
              Send a Message
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#EA6E54]"></span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#EA6E54] transition-all duration-300"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#EA6E54] transition-all duration-300"
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#EA6E54] transition-all duration-300"
                  rows="4"
                  required
                ></textarea>
              </div>
              {/* submit button */}
              <button type="submit" className="bg-gradient-to-r from-[#EA6E54] to-[#F3A183] text-white px-6 py-3 rounded-lg w-full hover:from-[#F3A183] hover:to-[#EA6E54] transition-all duration-300 flex items-center justify-center group">
                <span className="mr-2">{isLoading ? "Loading..." : "Send Message"}</span>
                <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F3A183] opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#EA6E54] transition-colors duration-300 group relative"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(link.icon, { className: "w-8 h-8" })}
              </div>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#EA6E54] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aulex. All rights reserved.</p>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#EA6E54] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-[#F3A183] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Modal Component */}
      <Modal 
        isOpen={showModal} 
        onClose={closeModal} 
        message={modalMessage}
      />
    </footer>
  );
};

export default Footer;
