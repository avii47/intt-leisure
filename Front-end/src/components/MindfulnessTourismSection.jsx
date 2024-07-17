import React, { useState, useEffect } from 'react';
import './CSS/MindfulnessTourismSection.css';
import img from '../assets/images/mindfulness_tourism_bg.png'

const MindfulnessTourismSection = () => {

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
    <section id="mindfulness-tourism-section" className="mindfulness-tourism-section">
      <div className="overlayert"></div>
      <img src={img} className="mindfulness-img" alt="" />
      <div className="mindfulness-tourism-content">
            <h6 className='font-secondary' style={{ marginTop: '-6rem'}}>Explore</h6>
            <hr style={{ width: '3.5rem' }} />
            <h3 className='font-primary'>Mindfulness Tourism</h3>
            <p className='font-secondary'>Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka, an all-inclusive luxury private resort, welcomes exclusively your family and friends alone to this private beachfront estate on the island’s fabled south coast.</p>
            <br></br>
            <button type="button" className="btn btn-outline-light">Learn more ></button>
      </div>
    </section>
  );
};

export default MindfulnessTourismSection;