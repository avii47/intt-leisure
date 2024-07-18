import React, { useState, useEffect } from 'react';
import '../CSS/HeroSection.css';
import Lottie from 'lottie-react'
import img_01 from '../../assets/images/Manolead-01.png';
import img_02 from '../../assets/images/FCC-Signature 1.png';
import video from '../../assets/INTT Leisure - Hero Page.mp4';
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
        <video src={video} autoPlay loop muted />
        <div className="hero-content">
          <div className="hero-heading-section">
              <h1 className='hero-heading font-primary'>Experience Mindfulness Vacation</h1>
              <p className='font-secondary'>Connect with the Ultimate Luxury of Mindfulness in Sri Lanka<br></br>
                Transform Your Next Vacation into a Journey of Self-Discovery</p>
              <Lottie className='arrow-icon' animationData={animationData}></Lottie>
          </div>
          <div className="bottom-viewbar d-flex">
              <h5 className="bottom-viewbar-text">Introduced By</h5>
              <img src={img_01} alt="" className='bottom-viewbar-img'/>
              <img src={img_02} alt="" className='bottom-viewbar-img'/>
              <div className='' style={{}}>
                <i className="fa-brands fa-facebook social-icon"></i>
                <i className="fa-brands fa-linkedin social-icon"></i>
                <i className="fa-brands fa-youtube social-icon"></i>
                <i className="fa-brands fa-instagram social-icon"></i>
              </div>

          </div>
        </div>  
    </div>
  );
};

export default HeroSection;