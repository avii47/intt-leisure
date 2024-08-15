import React, { useState, useEffect } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/ContactUsPage.css';

const ContactUsContent = () => {

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
    <section id="contactus-content-section" className={`section contactus-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="contactus-section-content">
        <div className='top-text'>
          <p className='font-secondary' style={{ fontSize: '20px' }}>Thank you for choosing us for your transformative journey. Every leader is unique, so we begin by understanding you deeply to craft a mindfulness vacation that's perfectly tailored to your needs. Share your details below, and our team of experts will be just a click away.</p>
          <p className='font-secondary' style={{ fontSize: '20px' }}>
            +1 312-242-1662 <br></br><br></br>
            info@intterminal.com <br></br><br></br>
            Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default ContactUsContent;