import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { projects } from './ProjectList';

const Loader = () => (
  <motion.div 
    className="flex justify-center items-center h-64"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#EA6E54]"></div>
  </motion.div>
);

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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
    }, 500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id='projects' className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 lg:px-[4rem]">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-2 text-center text-[#EA6E54]"
        >
          My Creative Journey
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 text-center mb-8 max-w-2xl mx-auto"
        >
          Explore my diverse portfolio, showcasing a fusion of innovation and problem-solving. Each project tells a unique story of challenges conquered and skills mastered. Dive in and discover the technologies that drive my passion!
        </motion.p>
        
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" />
          ) : (
            <motion.div
              key="projects"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-rotate-1"
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-bold">Click to view details</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#EA6E54]">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-[#EA6E54] text-white px-2 py-1 rounded-full">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pagination controls */}
        <div className="flex justify-center space-x-4 mt-8">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1 || loading}
            className="mx-1 px-3 py-2 flex justify-center items-center rounded-full h-10 w-10 bg-[#EA6E54] text-white disabled:opacity-50 transition-all duration-300 hover:bg-[#F3A183]"
          >
            <FaChevronLeft />
          </motion.button>
          {[...Array(totalPages)].map((_, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(i + 1)}
              disabled={loading}
              className={`mx-1 px-3 py-2 flex justify-center items-center rounded-full h-10 w-10 ${
                currentPage === i + 1 ? 'bg-[#EA6E54] text-white' : 'bg-gray-200 text-gray-700'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''} transition-all duration-300 hover:bg-[#F3A183] hover:text-white`}
            >
              {i + 1}
            </motion.button>
          ))}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages || loading}
            className="mx-1 px-3 py-2 flex justify-center items-center rounded-full h-10 w-10 bg-[#EA6E54] text-white disabled:opacity-50 transition-all duration-300 hover:bg-[#F3A183]"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-[#EA6E54]">{selectedProject.title}</h3>
                  <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-[#EA6E54]">
                    <FaTimes size={24} />
                  </button>
                </div>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-[#EA6E54] text-white px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 bg-[#EA6E54] text-white px-4 py-2 rounded-full hover:bg-[#F3A183] transition-colors duration-300"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={selectedProject.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 bg-[#EA6E54] text-white px-4 py-2 rounded-full hover:bg-[#F3A183] transition-colors duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;