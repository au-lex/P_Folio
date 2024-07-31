// // src/Loader.js

// import React, { useState, useEffect } from 'react';

// const Loader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
    
//     const timeout = setTimeout(() => {
//       setIsLoading(false);
//       window.scrollTo(0, 0);
//     }, 2000);

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className={`flex items-center bottom-0 bg-white left-0 right-0 fixed
//      overflow-x-hidden top-0 w-full  justify-center z-50 h-screen ${isLoading ? 'block' : 'hidden'}`}>
     
      
//      <div class="dot-spinner">
//     <div class="dot-spinner__dot"></div>
//     <div class="dot-spinner__dot"></div>
//     <div class="dot-spinner__dot"></div>
//     <div class="dot-spinner__dot"></div>
//     <div class="dot-spinner__dot"></div>
//     <div class="dot-spinner__dot"></div>
//     <div class="dot-spinner__dot"></div>
//     <div class="dot-spinner__dot"></div>
// </div>
//     </div>
//   );
// };

// export default Loader;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderWithTimeout = ({ children, loadingTime = 3000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [loadingTime]);

  const loaderVariants = {
    start: {
      scale: 0.8,
      opacity: 0.5,
    },
    end: {
      scale: 1,
      opacity: 1,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="flex justify-center items-center h-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "1px solid #EA6E54",
              borderTopColor: "transparent",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            variants={loaderVariants}
            initial="start"
            animate="end"
            transition={{ duration: 0.5, yoyo: Infinity }}
            className="ml-4 text-2xl font-bold text-[#EA6E54]"
          >
            {/* Loading... */}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderWithTimeout;




