import React, { useState, useEffect } from 'react';
import '../CSS/HeroSection.css';
import Lottie from 'lottie-react'
import animationData from '../../assets/icons/down-arrow2.json'

const HeroSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1000); 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div id="Hero-section" className={`hero-section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="overlayer"></div>
        <img className='service-hero-img' src="https://img.freepik.com/free-photo/full-shot-woman-meditating-mat_23-2149996120.jpg?t=st=1721206452~exp=1721210052~hmac=d1de86b8c04f88f43b72eb72a05dbb3f72a530c4947c6cee21f04e0377e6239d&w=1380" alt="" />
        <div className="hero-content">
          <div className="hero-heading-section">
              <h1 className='hero-heading font-primary'>Choose Your Journey</h1>
              <p className='font-secondary'>Explore Our Services</p>
              <Lottie className='arrow-icon' animationData={animationData}></Lottie>
          </div>
        </div>  
    </div>
  );
};

export default HeroSection;