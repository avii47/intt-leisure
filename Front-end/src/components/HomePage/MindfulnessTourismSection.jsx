import React, { useState, useEffect } from 'react';
import '../CSS/Home/MindfulnessTourismSection.css';
import img from '../../assets/images/AdobeStock_234737823.jpeg';

const MindfulnessTourismSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const section = document.getElementById('mindfulness-tourism-section');
    const overlay = document.querySelector('.overlayert');
    const content = document.querySelector('.mindfulness-tourism-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          overlay.classList.add('animate-overlay');
          content.classList.add('animate-content');
        }
      },
      { threshold: 0.1 }
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
    <section id="mindfulness-tourism-section" className="mindfulness-tourism-section">
      <div className="overlayert"></div>
      <img src={img} className="mindfulness-img" alt="" />
      <div className="mindfulness-tourism-content" style={{}}>
            <h6 className='font-secondary' style={{ marginTop: '-6rem'}}>Explore</h6>
            <hr style={{ width: '3.5rem' }} />
            <h3 className='font-primary'>Mindfulness Tourism</h3>
            <p className='font-secondary'>Experience mindfulness in Sri Lanka with techniques backed by research and teachings rooted in original practices. Our approach is distinct from common Western ideologies, offering a unique way to deepen your mindfulness practice and find true relaxation.</p>
            <br></br>
            <button type="button" className="btn btn-outline-light" style={{width:'150px'}}>Learn more ></button>
      </div>
    </section>
  );
};

export default MindfulnessTourismSection;