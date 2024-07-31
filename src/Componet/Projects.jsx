import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1. This could be a web app, mobile app, or any other software project.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/your-profile/project1",
    live: "https://project1-demo.com",
    image: "https://placehold.co/600x400"
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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold  mb-4">My Projects</h2>
        <p className=" text-gray-600 mb-12">Here are some of the projects I've worked on. Hover to learn more!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border  rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-[#EA6E54] text-white px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#EA6E54] hover:text-[#d55c45]">
                    <FaGithub size={24} />
                  </a>
                  {/* <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#EA6E54] hover:text-[#d55c45]">
                    <FaExternalLinkAlt size={24} />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-[#EA6E54] text-white py-3 px-8 rounded-full font-bold hover:bg-[#d55c45] transition-colors">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;