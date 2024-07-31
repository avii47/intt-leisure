import React, { useState, useEffect } from 'react';
import '../CSS/Pages/ContactUsPage.css';

const ContactUsContent = () => {

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
    <section id="contactus-content-section" className={`section contactus-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="contactus-section-content">
        <div className='top-text'>
          <h4 className='font-primary' style={{ fontSize: '30px' }}><b>Thank You Messege</b></h4><br></br><br></br>
          <p className='font-secondary' style={{ fontSize: '20px', marginBottom:'60px' }}>A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership. Throughout the workshop, participants had the opportunity to listen to informative speeches delivered by Dr. GB Hewawa, sam and Jim Ludema. Following the speeches, participants actively engaged in interactive Q&A sessions where they sought clarification, shared their perspectives, and explored how these concepts could be directly applied within the university’s specific context.</p>
          <p className='font-secondary' style={{ fontSize: '20px' }}>
            +94 774 48 48 48 <br></br><br></br>
            nfo@intterminal.com <br></br><br></br>
            Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default ContactUsContent;