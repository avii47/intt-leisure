import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMobileView } from '../contexts/MobileViewContext';
import './CSS/HeroSection.css';
import Lottie from 'lottie-react';
import animationData from '../assets/icons/down-arrow2.json';

const HeroSection = ({ img, title, sub, aboutImg }) => {
  const isMobileView = useMobileView();
  const [isblogTitle, setIsblogTitle] = useState(false);
  const [displayedText, setDisplayedText] = useState(''); 
  const [textIndex, setTextIndex] = useState(0); 

  const typingText = aboutImg;
  const typingSpeed = 50; 

  useEffect(() => {
    const wordCount = title.trim().length === 0 ? 0 : title.trim().split(/\s+/).length;
    setIsblogTitle(wordCount >= 5);
  }, [title]);

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
  
  useEffect(() => {
    if(aboutImg){
      if (textIndex < typingText.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prev) => prev + typingText.charAt(textIndex)); 
          setTextIndex(textIndex + 1); 
        }, typingSpeed);
        
        return () => clearTimeout(timeoutId); 
      } else {
        
        const resetTimeout = setTimeout(() => {
          setDisplayedText(''); 
          setTextIndex(0);
        }, 3000); 
  
        return () => clearTimeout(resetTimeout);
      }
    }
  }, [textIndex, typingText, typingSpeed]);

  return (
    <div id="Hero-section" className={`hero-section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="overlayer"></div>
      <LazyLoadImage src={img} className="service-hero-img" alt="hero image" />
      {isblogTitle ? (
        <div className="hero-content">
          <div id='hero-heading' className="hero-heading-section">
            <h1 className='hero-heading font-primary' style={{ fontSize: '40px', width: '50%', marginInline: 'auto' }}>{title}</h1>
            <Lottie loading="lazy" className='arrow-icon' animationData={animationData}></Lottie>
          </div>
        </div>
      ) : (
        <div className="hero-content">
          <div id='hero-heading' className="hero-heading-section">
            <h1 className='hero-heading font-primary'>{title}</h1>
            <p className='font-secondary'>{sub}</p>
            <Lottie loading="lazy" className='arrow-icon' animationData={animationData}></Lottie>
          </div>
          <p className="line-1 anim-typewriter" style={{width:'600px'}}>{displayedText}</p>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
