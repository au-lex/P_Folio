import React, { useState } from 'react';
import { FiHome, FiUser, FiBriefcase, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import { FaGithubSquare } from "react-icons/fa";

const SideMenu = ({ isOpen, toggleMenu }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { icon: FiHome, text: 'Home', color: '#EA6E54', href: '#home' },
    { icon: FiUser, text: 'About', color: '#4A90E2', href: '#about' },
    { icon: FiBriefcase, text: 'Projects', color: '#50C878', href: '#projects' },
    { icon: FiMail, text: 'Contact', color: '#9B59B6', href: '#contact' },
  ];

  const menuVariants = {
    closed: { x: '100%' },
    open: { x: 0 },
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed  top-[3.6rem] right-0 h-full w-full md:w-[20%]  bg-white shadow-lg z-50 border"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <nav className="flex flex-col pt-4 justify-center">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.text}
                href={item.href}
                className="relative py-4 px-6 cursor-pointer"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                <div className="flex items-center space-x-4">
                  <item.icon size={24} color={item.color} />
                  <span className="text-lg font-semibold">{item.text}</span>
                </div>
                <AnimatePresence>
                  {hoveredItem === index && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 bg-gray-100"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </AnimatePresence>
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="mainHeader z-50 shadow border-b border-[#EA6E54] bg-white flex justify-between items-center px-4 h-[3.6rem] fixed w-full">
        <div className="">
          <h1 className='flex text-zinc-900 text-[1.2rem] sm:text-[1.4rem] logo font-extrabold'>
            Aulex
            <span className='pt-2'>
              <GoDotFill className="text-[#EA6E54] animate-bounce" />
            </span>
          </h1>
        </div>
        <div className="menu flex items-center space-x-8 sm:space-x-[2.5rem]">
          <a href='https://github.com/au-lex?tab=repositories' target='_blank' className="block">
            <FaGithubSquare  className='cursor-pointer text-zinc-900 text-[1.5rem] sm:text-[1.7rem] font-bold' />
          </a>
          <span className='' onClick={toggleMenu}>
            {isMenuOpen ? (
              <FiX className='cursor-pointer text-zinc-900 text-[1.5rem] sm:text-[1.7rem] font-bold' />
            ) : (
              <FiMenu className='cursor-pointer text-zinc-900 text-[1.5rem] sm:text-[1.7rem] font-bold' />
            )}
          </span>
        </div>
      </section>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
