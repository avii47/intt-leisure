import React, { useState, useEffect } from 'react';
import icon from '../assets/icons/top-arrow-icon.png';

const ScrollToTopButton = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {  
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


  return (
    isVisible && (
      <button 
        onClick={scrollToTop} 
        style={styles.button}
      >
        <img className='topArrowIcon' style={{height:'40px'}} src={icon} alt="go to top icon" />
      </button>
    )
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '15px',
  }
};

export default ScrollToTopButton;
