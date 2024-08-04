








import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1. This could jjjjjjjjjjjj beooooooooooooooooooooooooooooooooooo a web app, mobile app, .",
    tags: ["React", "Node.js", "MongoDB", "tailwind", "redux"],
    github: "https://github.com/your-profile/project1",
    live: "https://project1-demo.com",
    image: "https://res.cloudinary.com/durbee4ln/image/upload/v1722517392/portifilo/scrnli_8_1_2024_1-56-54_PM_wdvtck.png"
  },
  {
    title: "Project 2",
    description: "Description of Project 2. Highlight the key features  and technologies used.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/your-profile/project2",
    live: "https://project2-demo.com",
    image: "https://res.cloudinary.com/durbee4ln/image/upload/v1722517390/portifilo/scrnli_8_1_2024_1-57-26_PM_ikctov.png"
  },
  {
    title: "Project 3",
    description: "Project 3 details. Explain what problem this project solves or what makes it unique.",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/your-profile/project3",
    live: "https://project3-demo.com",
    image: "https://res.cloudinary.com/durbee4ln/image/upload/v1722517392/portifilo/scrnli_8_1_2024_1-58-07_PM_yiyrcn.png"
  },
  {
    title: "Project 4",
    description: "An innovative mobile app for health tracking and wellness management.",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/your-profile/project4",
    live: "https://project4-demo.com",
    image: "https://res.cloudinary.com/durbee4ln/image/upload/v1722517394/portifilo/scrnli_8_1_2024_1-57-51_PM_ldobe8.png"
  },
  {
    title: "Project 5",
    description: "A machine learning model for predicting stock market trends.",
    tags: ["Python", "TensorFlow", "Pandas"],
    github: "https://github.com/your-profile/project5",
    live: "https://project5-demo.com",
    image: "https://res.cloudinary.com/durbee4ln/image/upload/v1722517394/portifilo/scrnli_8_1_2024_1-58-24_PM_f7c5ka.png"
  },
  {
    title: "Project 6",
    description: "A responsive e-commerce platform with advanced filtering and search capabilities.",
    tags: ["Angular", "Node.js", "MongoDB"],
    github: "https://github.com/your-profile/project6",
    live: "https://project6-demo.com",
    image: "https://res.cloudinary.com/durbee4ln/image/upload/v1722517391/portifilo/scrnli_8_1_2024_2-00-14_PM_qgf1ze.png"
  },
  {
    title: "Project 7",
    description: "A blockchain-based voting system ensuring transparency and security.",
    tags: ["Solidity", "Ethereum", "Web3.js"],
    github: "https://github.com/your-profile/project7",
    live: "https://project7-demo.com",
    image: "https://res.cloudinary.com/durbee4ln/image/upload/v1722517391/portifilo/scrnli_8_1_2024_1-58-42_PM_k6qscc.png"
  },
  {
    title: "Project 8",
    description: "An AI-powered chatbot for customer service automation.",
    tags: ["Python", "Natural Language Processing", "Flask"],
    github: "https://github.com/your-profile/project8",
    live: "https://project8-demo.com",
    image: "https://res.cloudinary.com/durbee4ln/image/upload/v1722517390/portifilo/scrnli_8_1_2024_2-00-58_PM_rmjcka.png"
  },
  {
    title: "Project 9",
    description: "A real-time multiplayer game using WebSocket technology.",
    tags: ["JavaScript", "Socket.io", "Canvas API"],
    github: "https://github.com/your-profile/project9",
    live: "https://project9-demo.com",
    image: "https://placehold.co/600x400"
  },
  {
    title: "Project 10",
    description: "An IoT home automation system with mobile app control.",
    tags: ["Raspberry Pi", "Python", "React Native"],
    github: "https://github.com/your-profile/project10",
    live: "https://project10-demo.com",
    image: "https://res.cloudinary.com/durbee4ln/image/upload/v1722517390/portifilo/scrnli_8_1_2024_1-58-58_PM_tdr2uv.png"
  }
];
const Loader = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#EA6E54]"></div>
  </div>
);

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const projectsPerPage = 4;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setLoading(false);
    }, 500); // Simulating a 500ms load time
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">My Projects</h2>
        <p className="text-gray-600 mb-4">Here are some of the projects I've worked on. Hover to learn more!</p>
        
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white p-2 border border-[#EA6E54] h-[14rem] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <section className="flex w-full justify-between h-full">
                  <figure className="projectImg w-[40%] border border-[#EA6E54] rounded-md mr-2 h-full">
                    <img src={project.image} alt={project.title}
                      className="w-full h-full rounded-md object-cover" />
                  </figure>
                  <div className="w-[60%] flex flex-col overflow-hidden">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-[12px] ov">{project.description}</p>
                    <div className="flex items-center space-x-4 mt-2 mb-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="relative group"
                        aria-label="View GitHub Repository"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#EA6E54] to-[#F3A183] rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                        <div className="relative flex items-center justify-center h-8 w-8 bg-white rounded-full border-2 border-[#EA6E54] transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110">
                          <FaGithub size={20} className="text-[#EA6E54] group-hover:text-[#121F28]" />
                        </div>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-[#121F28] text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          GitHub
                        </span>
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="relative group"
                        aria-label="View Live Demo"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#EA6E54] to-[#F3A183] rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                        <div className="relative flex items-center justify-center h-8 w-8 bg-white rounded-full border-2 border-[#EA6E54] transition-all duration-300 ease-in-out group-hover:-rotate-6 group-hover:scale-110">
                          <FaExternalLinkAlt size={16} className="text-[#EA6E54] group-hover:text-[#121F28]" />
                        </div>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-[#121F28] text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          Live Demo
                        </span>
                      </a>
                    </div>
                    <div className="flex flex-wrp overflow-x-auto whitespace-nowrap gap-1 justify-start mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-[#EA6E54] text-white px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination controls */}
        <div className="flex justify-center space-x-4 mt-8">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1 || loading}
            className="mx-1 px-3 py-2 flex justify-center items-center rounded-full h-[2rem] w-[2rem] bg-[#EA6E54] text-gray-100  disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              disabled={loading}
              className={`mx-1 px-3 py-2 flex justify-center items-center rounded-full h-[2rem] w-[2rem] ${
                currentPage === i + 1 ? 'bg-[#EA6E54] text-white' : 'bg-gray-200 text-gray-700'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages || loading}
            className="mx-1 px-3 py-2 flex justify-center items-center rounded-full h-[2rem] w-[2rem] bg-[#EA6E54] text-gray-100  disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;