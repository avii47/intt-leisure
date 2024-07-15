import React, { useState, useEffect } from 'react';
import './CSS/ConnectAppSection.css';

const ConnectAppSection = () => {

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
        <section id="connect-app-section" className="connect-app-section">
            <div className="connect-app-container">
                <div className="connect-app-content" style={{ textAlign: 'left', padding: '0% 10% 0% 50%' }}>
                    <h6 className='font-secondary' style={{ marginTop: '-6rem'}}>Connect</h6>
                    <hr style={{ width: '3.5rem' }} />
                    <h3 className='font-primary'>Keep the vacation bliss alive! </h3>
                    <p className='font-secondary'>Join us to deepen your mindfulness practice and turn tranquility into a lasting lifestyle. Register now and stay connected to your inner peace!</p>
                    <br></br>
                    <p>
                      <button type="button" className="btn btn-outline-light" style={{}}>Learn more ></button>
                    </p>
                </div>
      </div>
        </section>
    );
  };

export default ConnectAppSection;