import React from 'react';
import { FaCode, FaLaptop, FaServer, FaCheckCircle, FaSmile, FaClock } from 'react-icons/fa';
import { FaPlus, FaPercentage } from 'react-icons/fa';
const AboutMe = () => {
  return (
    <section id="about" className="bg-white ext-white py-16 lg:px-[4rem]">
      <div className="c px-4">
        <h2 className="text-3xl font-bold md:text-center mb-4 border-[#EA6E54] ">About Me</h2>
        
        <div className="flex flex-col  items-center justify-between mb-12">
        
          <div className="md:w-[50%] ">
            <p className="mb-4  lg:text-center">
              Hello! I'm Aulex, a passionate software developer with a keen interest in creating 
              efficient and user-friendly applications. With over 2 years of experience in the field, 
              I specialize in full-stack development, focusing on modern web technologies.
            </p>
           
            
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <FaCode className="text-[#EA6E54] lg:text-[2rem] mr-2" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center">
                <FaServer className="text-[#EA6E54] lg:text-[1.3rem] mr-2" />
                <span>Backend Development</span>
              </div>
              <div className="flex items-center">
                <FaLaptop className="text-[#EA6E54] lg:text-[1.3rem] mr-2" />
                <span>Responsive Design</span>
              </div>
              {/* Add more skills as needed */}
            </div>
          </div>
        </div>
        
        {/* New section for achievements */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center">
          10 <FaPlus className="ml-1 text-[#EA6E54]" />
        </h3>
        <p>Completed Projects</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center">
          95 <FaPercentage className="ml-1 text-[#EA6E54]" />
        </h3>
        <p>Client Satisfaction</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center">
          2 <FaPlus className="ml-1 text-[#EA6E54]" />
        </h3>
        <p>Years of Experience</p>
      </div>
    </div>
      </div>
    </section>
  );
}

export default AboutMe;