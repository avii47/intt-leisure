// src/contexts/MobileViewContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const MobileViewContext = createContext();

export const MobileViewProvider = ({ children }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MobileViewContext.Provider value={isMobileView}>
      {children}
    </MobileViewContext.Provider>
  );
};

export const useMobileView = () => useContext(MobileViewContext);
