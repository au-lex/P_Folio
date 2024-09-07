import React from 'react';
import { FaNodeJs, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaPython, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostgresql, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiFirebase } from 'react-icons/si';

const skills = [
  { icon: <FaNodeJs className="text-xl text-green-500" />, name: 'Node.js' },
  { icon: <SiExpress className="text-xl textblack" />, name: 'Express.js' },
  { icon: <SiMongodb className="text-xl text-green-600" />, name: 'MongoDB' },
  // { icon: <SiPostgresql className="text-xxl text-blue-500" />, name: 'PostgreSQL' },
  { icon: <SiJavascript className="text-xl text-yellow-500" />, name: 'JavaScript' },
  { icon: <SiTypescript className="text-xl text-blue-500" />, name: 'TypeScript' },
  { icon: <FaReact className="text-xl text-blue-400" />, name: 'React' },
  { icon: <SiTailwindcss className="text-xl text-teal-500" />, name: 'Tailwind ' },
  { icon: <FaHtml5 className="text-xl text-orange-500" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-xl text-blue-600" />, name: 'CSS3' },
  // { icon: <FaDatabase className="text-xl text-gray-700" />, name: 'SQL' },
  { icon: <SiNextdotjs className="text-xl text-wh" />, name: 'Next.js' },
  { icon: <SiFirebase className="text-xl text-yellow-500" />, name: 'Firebase' },
  // { icon: <FaPython className="text-xxl text-blue-400" />, name: 'Python' },
  { icon: <FaGithub className="text-xl text-gray[-700" />, name: 'GitHub' },
];

const SkillSet = () => {
  return (
    <div className="p-8 px-4 lg:px-16 pt-16 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[1.5rem] lg:text-4xl font-bold lg:text-center mb-4 relative z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EA6E54] to-[#F3A183]">
            Skill Set
          </span>
        </h2>
        <p className="lg:text-center mt-2 mb-12 text-gray-300 max-w-2xl mx-auto relative z-10">
          These skills represent the core areas of expertise I have developed over time. Each skill is complemented by hands-on experience and continuous learning to stay up-to-date with industry trends.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`group flex flex-col justify-center items-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg`}
            >
              <div className={`text-4xl mb-4 text-${skill.color} group-hover:animate-bounce`}>
                {skill.icon}
              </div>
              <h3 className="text-sm font-semibold group-hover:text-[#EA6E54] transition-colors duration-300">{skill.name}</h3>
              <div className="w-0 group-hover:w-full h-0.5 bg-[#EA6E54] mt-2 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#EA6E54] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-[#F3A183] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-[#EA6E54] rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;