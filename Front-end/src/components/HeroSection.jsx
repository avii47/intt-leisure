import React, { useState, useEffect } from 'react';
import './CSS/HeroSection.css';
import Lottie from 'lottie-react'
import animationData from '../assets/icons/down-arrow2.json'

const HeroSection = ({img,title,sub}) => {

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

  useEffect(() => {
    const section = document.getElementById('Hero-section');
    const heading = document.getElementById('hero-heading');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add('animate-heading');
        }
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <div id="Hero-section" className={`hero-section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="overlayer"></div>
        <img className='service-hero-img' src={img} alt="" />
        <div className="hero-content">
          <div id='hero-heading' className="hero-heading-section">
              <h1 className='hero-heading font-primary'>{title}</h1>
              <p className='font-secondary'>{sub}</p>
              <Lottie className='arrow-icon' animationData={animationData}></Lottie>
          </div>
        </div>  
    </div>
  );
};

export default HeroSection;