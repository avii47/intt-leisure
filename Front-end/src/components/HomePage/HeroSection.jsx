import React, { useState, useEffect} from 'react';
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
        <video src={video} autoPlay loop muted />
        <div className="hero-content">
          <div id='hero-heading' className="hero-heading-section">
              <h1 className='hero-heading font-primary'>Mindfulness Vacations for Business Leaders</h1>
              <p className='font-secondary'>leaders change the world and we change how they experience it. Backed by research on Buddha’s teachings,<br></br>
               our Sri Lankan retreats offer business leaders a unique mindfulness escape from stress, distinct from Western approaches.</p>
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