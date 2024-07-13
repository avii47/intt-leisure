import React, { useState, useEffect } from 'react';
import './CSS/MindfulnessTourismSection.css';

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
    <section id="mindfulness-tourism-section" className="section mindfulness-tourism-section">
      <div className="mindfulness-tourism-container">
        <div className="mindfulness-tourism-content" style={{ textAlign: 'left', padding: '0% 10% 0% 40%' }}>
        <h6 className='font-secondary' style={{ marginTop: '-6rem'}}>Explore</h6>
              <hr style={{ width: '3.5rem' }} />
              <h3 className='font-primary'>Mindfulness Tourism</h3>
              <p className='font-secondary'>Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka, an all-inclusive luxury private resort, welcomes exclusively your family and friends alone to this private beachfront estate on the island’s fabled south coast.</p>
              <br></br>
              <p>
                <button type="button" className="btn btn-outline-light" style={{}}>Button</button>
                <button type="button" className="btn btn-link" style={{ textDecoration: 'none', color: 'white' }}>Learn more ></button>
              </p>
        </div>
      </div>
    </section>
  );
};

export default MindfulnessTourismSection;