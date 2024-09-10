import React, { useState, useEffect } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import "../../components/CSS/FeedbackSection.css";

const FeedbackSection = () => {

  const isMobileView = useMobileView();

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
    <section id="feedback-section" className={`feedback-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
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
            <button type="submit" className="btn btn-dark" style={{width:'100%', height:'60px', borderRadius:'10px'}}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackSection;