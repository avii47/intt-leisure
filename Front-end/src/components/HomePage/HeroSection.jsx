import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import '../CSS/HeroSection.css';
import img_01 from '../../assets/images/Manolead-01.png';
import img_02 from '../../assets/images/FCC-Signature 1.png';
import animationData from '../../assets/icons/down-arrow2.json';

const HeroSection = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isCursorMoving, setIsCursorMoving] = useState(true);
  let inactivityTimeout;

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

  useEffect(() => {
    const section = document.getElementById('Hero-section');
    const heading = document.getElementById('hero-heading');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add('animate-heading');
          setVideoLoaded(true);
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
    const handleMouseMove = () => {
      setIsCursorMoving(true);
      clearTimeout(inactivityTimeout);

      inactivityTimeout = setTimeout(() => {
        setIsCursorMoving(false);
      }, 5000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(inactivityTimeout);
    };
  }, []);

  return (
    <div id="Hero-section" className={`hero-section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className={`overlayer ${isCursorMoving ? '' : 'hidden'}`}></div>
      {videoLoaded && (
        <video
          src={require('../../assets/Intt Leisure - Hero Page new.mp4')}
          type="video/mp4"
          autoPlay
          loop
          muted
          preload="auto"
        />
      )}
      <div className="hero-content">
        <div id="hero-heading" className={`hero-heading-section ${isCursorMoving ? '' : 'hidden'}`}>
          <h1 className="hero-heading font-primary">Mindfulness Vacations for Business Leaders</h1>
          <p className="font-secondary">Leaders change the world and we change how they experience it.</p>
          <Lottie className="arrow-icon" animationData={animationData}></Lottie>
        </div>
        <div className={`bottom-viewbar d-flex ${isCursorMoving ? 'slide-up' : 'slide-down'}`}>
          <h5 className="bottom-viewbar-text">Introduced By</h5>
          <a href="https://manolead.com" target="_blank" rel="noopener noreferrer"><img src={img_01} alt="manolead-logo" className="bottom-viewbar-img" loading='lazy' /></a>
          <a href="https://councils.forbes.com/profile/Gamini-Hewawasam-Scholar-Practitioner-CEO-ManoLead-NFP/bcb1aacb-ab06-4957-803a-62da6f9d179b" target="_blank" rel="noopener noreferrer"><img src={img_02} alt="forbes logo" className="bottom-viewbar-img img2" loading='lazy' /></a>
          {/* <div className="social-icon-section">
            <a href="https://www.facebook.com/manolead" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook social-icon"></i></a>
            <a href="https://www.linkedin.com/in/gaminihewawasam/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin social-icon"></i></a>
            <a href="https://www.youtube.com/@travelglobe405" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube social-icon"></i></a>
            <a href="https://www.instagram.com/manolead_/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram social-icon"></i></a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
