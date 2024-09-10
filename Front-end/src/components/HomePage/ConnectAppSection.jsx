import React, { useState, useEffect } from 'react';
import "../../components/CSS/Home/ConnectAppSection.css";

const ConnectAppSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);

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


  return (
    <section id="connect-app-section" className={`connect-app-section ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="connect-app-container">
        <div className="connect-app-content">
          <div className='connect-app-content-text'>
            <h6 className='font-secondary' style={{ fontWeight: '250', fontSize: '15px' }}>Connect</h6>
            <hr style={{ width: '4rem', marginTop: '-1px' }} />
            <h3 className='font-primary'>Keep the vacation bliss alive! </h3>
            <p className='font-secondary' style={{ fontWeight: '250', marginTop: '20px' }}>Join us to deepen your mindfulness practice and turn tranquility into a lasting lifestyle. Register now and stay connected to your inner peace!</p>
            <br></br>
            <p>
              <button type="button" className="btn btn-light">Learn more ></button>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConnectAppSection;