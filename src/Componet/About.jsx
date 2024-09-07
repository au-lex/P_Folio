import React from 'react';
import { FaCode, FaLaptop, FaServer, FaCheckCircle, FaSmile, FaClock, FaPlus, FaPercentage, FaLightbulb, FaPencilAlt, FaCogs, FaRocket } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white text-black py-16 lg:px-[4rem]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold md:text-center mb-8 border-b-2 border-[#EA6E54] pb-2">About Me</h2>
        
        <div className="flex flex-col items-center justify-between mb-12">
          <div className="md:w-[70%]">
            <p className="mb-6 lg:text-center">
              Hello! I'm Aulex, a passionate software developer with a keen interest in creating
              efficient and user-friendly applications. With over 2 years of experience in the field,
              I specialize in full-stack development, focusing on modern web technologies.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <FaCode className="text-[#EA6E54] text-2xl mr-2" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center">
                <FaServer className="text-[#EA6E54] text-2xl mr-2" />
                <span>Backend Development</span>
              </div>
              <div className="flex items-center">
                <FaLaptop className="text-[#EA6E54] text-2xl mr-2" />
                <span>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center mb-12">
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

          {/* work */}
          <div className="mb-12 mt-[4rem]">
          <h3 className="text-2xl font-semibold mb-12 text-center">My Work Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaLightbulb, title: "1. Ideation", description: "Brainstorming and conceptualizing innovative solutions" },
              { icon: FaPencilAlt, title: "2. Planning", description: "Detailed project planning and architecture design" },
              { icon: FaCogs, title: "3. Development", description: "Agile development with regular client check-ins" },
              { icon: FaRocket, title: "4. Launch", description: "Thorough testing and smooth deployment" }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#EA6E54] to-[#F3A183] rounded-lg transform -skew-y-3 group-hover:skew-y-0 transition-all duration-300"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg group-hover:translate-y-2 transition-all duration-300">
                  <step.icon className="text-[#EA6E54] text-4xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;