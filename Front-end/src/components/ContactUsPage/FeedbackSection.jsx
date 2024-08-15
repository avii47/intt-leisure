import React, { useState, useEffect } from 'react';
import '../CSS/FeedbackSection.css';

const FeedbackSection = () => {

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
    const section = document.getElementById('rw1');
    const textSection = document.getElementById('text1');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add('animate-text');
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
    <section id="feedback-section" className={`section feedback-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="feedback-content">
        <h3 className='font-primary' style={{marginBottom:'50px'}}>Get In Touch With Us</h3>
        <form className="feedback-form">
            <div className="form-group feedback-ft">
              <input type="text" className="form-control in-f" id="name" placeholder="Name" required />
            </div>
            <div className="form-group feedback-ft">
              <input type="email" className="form-control in-f" id="email" placeholder="Email" required />
            </div>
            <div className="form-group feedback-ft">
              <input type="text" className="form-control in-f" id="mobile" placeholder="Mobile" required />
            </div>
            <div className="form-group feedback-ft">
              <textarea className="form-control in-f" id="message" rows="6" placeholder="Message" required></textarea>
            </div><br></br>
            <button type="submit" className="btn btn-dark" style={{width:'200px'}}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackSection;