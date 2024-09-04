import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mindfulness_section_bg from '../../assets/images/homePage-mindfulness-section.jpg';

const MindfulnessTourismSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();

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

  const handleOnClick = (path) => {
    navigate(path);
  };

  return (
    <section id="mindfulness-tourism-section" className={`mindfulness-tourism-section ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="overlayert"></div>
      <img src={mindfulness_section_bg} className="mindfulness-img" alt="mindfulness section background image" loading='lazy' />
      <div className="mindfulness-tourism-content">
        <div className='mtc-main'>
          <h6 className='font-secondary' style={{ fontWeight: '250', fontSize: '15px' }}>Explore</h6>
          <hr style={{ width: '3.5rem', marginTop: '-1px' }} />
          <h3 className='font-primary'>Mindfulness Tourism</h3>
          <p className='font-secondary' style={{ fontWeight: '250', marginTop: '20px' }}>Experience mindfulness in Sri Lanka with techniques backed by research and teachings rooted in original practices. Our approach is distinct from common Western ideologies, offering a unique way to deepen your mindfulness practice and find true relaxation.</p>
          <br></br>
          <button type="button" className="btn btn-light" onClick={() => handleOnClick('/mindfulness')} style={{ width: '150px' }}>Learn more ></button>
        </div>
      </div>
    </section>
  );
};

export default MindfulnessTourismSection;