import React from 'react';
import { FaNodeJs, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaPython, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostgresql, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiFirebase } from 'react-icons/si';

const skills = [
  { icon: <FaNodeJs className="text-xl text-green-500" />, name: 'Node.js' },
  { icon: <SiExpress className="text-xl textblack" />, name: 'Express.js' },
  { icon: <SiMongodb className="text-xl text-green-600" />, name: 'MongoDB' },
//   { icon: <SiPostgresql className="text-4xl text-blue-500" />, name: 'PostgreSQL' },
  { icon: <SiJavascript className="text-2xl text-yellow-500" />, name: 'JavaScript' },
  { icon: <SiTypescript className="text-xl text-blue-500" />, name: 'TypeScript' },
  { icon: <FaReact className="text-xl text-blue-400" />, name: 'React' },
  { icon: <SiTailwindcss className="text-xl text-teal-500" />, name: 'Tailwind ' },
  { icon: <FaHtml5 className="text-xl text-orange-500" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-xl text-blue-600" />, name: 'CSS3' },
  // { icon: <FaDatabase className="text-xl text-gray-700" />, name: 'SQL' },
  { icon: <SiNextdotjs className="text-4xl text-wh" />, name: 'Next.js' },
  { icon: <SiFirebase className="text-xl text-yellow-500" />, name: 'Firebase' },
//   { icon: <FaPython className="text-4xl text-blue-400" />, name: 'Python' },
  { icon: <FaGithub className="text-xl text-gray[-700" />, name: 'GitHub' },
];

const SkillSet = () => {
  return (
    <div className="p8 px-[1rem]  pt-[3rem] text-white pb-[2rem] lg:px-[16rem]">
      <h2 className="text-3xl font-bold text-center mb-8">Skill Set</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gp-8 gap-3 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-cl   justify-center items-center border border-[#EA6E54] h-[3rem]  space-x-2 p-4 rounded-lg">
            <div className="icon text-[1rem]">
            {skill.icon}

            </div>
            <h3 className="text-[10px] fontsemibold mt-">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
