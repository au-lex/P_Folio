import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1. This could be a web app, mobile app, or any other software project.",
    tags: ["React", "Node.js", "MongoDB","tailwind","redux"],
    github: "https://github.com/your-profile/project1",
    live: "https://project1-demo.com",
    image: "https://i.pinimg.com/236x/21/57/59/215759d88965748c62dfa172f8a0c504.jpg"
  },
  {
    title: "Project 2",
    description: "Description of Project 2. Highlight the key features and technologies used.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/your-profile/project2",
    live: "https://project2-demo.com",
    image: "https://placehold.co/600x400"
  },
  {
    title: "Project 3",
    description: "Project 3 details. Explain what problem this project solves or what makes it unique.",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/your-profile/project3",
    live: "https://project3-demo.com",
    image: "https://placehold.co/600x400"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-2">My Projects</h2>
      <p className="text-gray-600 mb-4">Here are some of the projects I've worked on. Hover to learn more!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-2 border border-[#EA6E54] h-[13rem] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <section className="flex w-full justify-between">
              <figure className="projectImg w-[40%] mr-2">
                <img src={project.image} alt={project.title}
                  className="w-[140px] h-[140px] rounded-md object-cover" />
              </figure>
              <div className="w-[60%]">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-[12px]">{project.description}</p>
                <div className="flex items-center space-x-6 mt-2 mb-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#EA6E54]">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#EA6E54]">
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </section>
            <div className="flex flex-wrap gap-1 justify-start mt-[.5rem]">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs bg-[#EA6E54] text-white px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Projects;