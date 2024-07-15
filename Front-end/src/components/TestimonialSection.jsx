import React, { useState, useEffect } from 'react';
import './CSS/TestimonialSection.css';

const TestimonialSection = () => {

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
      <section id="testimonial-section" className={`section container justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
        <div className="testimonial-content">
            <div className="row" style={{ gap:'60px' }}>
              <div className="col-lg testimonial-video-coontainer" style={{}}>
                <iframe
                  className='testimonial-iframe'
                  src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                  frameborder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
              </div>
              <div className="col-lg testimonial-text" style={{  }}>
                <h5>Testimonial</h5>
                <hr style={{ width: '7rem' }} />
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-regular fa-star"></i>
                <p style={{ fontSize: '16px', marginTop: '1rem' }}>I recently embarked on a mindfulness journey in the breathtaking landscapes of Sri Lanka, and it was unlike anything I’ve ever experienced before. The serene beauty of this island, combined with the mindfulness practices, left me feeling like an entirely new person. The tranquility I found amidst the natural wonders of Sri Lanka transformed me in ways I couldn’t have imagined. It was a truly rejuvenating and life-changing experience that I highly recommend to anyone seeking inner peace and personal growth.</p>
                <p style={{ fontSize: '16px' }}>Jim Ludema | <strong>Global Leader</strong> </p>
              </div>
            </div>
          </div>
      </section>
    );
  };

export default TestimonialSection;