// src/Loader.js

import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`flex items-center bottom-0 bg-white left-0 right-0 fixed
     overflow-x-hidden top-0 w-full  justify-center z-50 h-screen ${isLoading ? 'block' : 'hidden'}`}>
     
      
     <div class="dot-spinner">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
</div>
    </div>
  );
};

export default Loader;