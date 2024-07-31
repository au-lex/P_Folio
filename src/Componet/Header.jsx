import React, { useState } from 'react';
import { FiHome, FiUser, FiBriefcase, FiMail, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { GoDotFill } from "react-icons/go";
import { FaGithubSquare } from "react-icons/fa"
import { FiMenu } from "react-icons/fi";

const SideMenu = ({ isOpen, toggleMenu }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { icon: FiHome, text: 'Home', color: '#EA6E54' },
    { icon: FiUser, text: 'About', color: '#4A90E2' },
    { icon: FiBriefcase, text: 'Projects', color: '#50C878' },
    { icon: FiMail, text: 'Contact', color: '#9B59B6' },
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
          className="fixed top-[3.6rem] right-0 h-full w-full bg-white shadow-lg z-50"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
       
          <nav className="flex flex-col h-ull pt-4 justify-center">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.text}
                className="relative py-4 px-6 cursor-pointer"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className="flex itemscenter space-x-4">
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
              </motion.div>
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
      <section className="mainHeader bor z-50 shadow bo border-[#EA6E54] bg-white flex justify-between items-center px-4 e h-[3.6rem] fixed w-full">
        <div className="">
          <h1 className='flex text-zinc-900 text-[1.4rem] logo font-extrabold'>
            Aulex
            <span className='pt-2'>
              <GoDotFill className="text-[#EA6E54] animate-bounce" />
            </span>
          </h1>
        </div>
        <div className="meune flex space-x-[2.5rem]">
          <span>
            <FaGithubSquare className='cursor-pointer flex text-zinc-900 text-[1.7rem] font-bold' />
          </span>
          <span className='' onClick={toggleMenu}>
            <FiMenu className='cursor-pointer flex text-zinc-900 text-[1.7rem] font-bold' />
          </span>
        </div>
      </section>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;