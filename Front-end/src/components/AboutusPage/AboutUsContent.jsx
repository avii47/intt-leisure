import React, { useState, useEffect } from 'react';
import '../CSS/AboutUsPage.css';
import img_01 from '../../assets/images/Rectangle 25.png';
import img_02 from '../../assets/images/Rectangle 28.png';
import img_03 from '../../assets/images/img3.jpg';
import img_04 from '../../assets/images/Rectangle 90 (2).png';

const AboutUsContent = () => {

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

  useEffect(() => {
    const section = document.getElementById('rw2');
    const textSection = document.getElementById('text2');

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

  useEffect(() => {
    const section = document.getElementById('rw3');
    const textSection = document.getElementById('text3');

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
    <section id="aboutus-content-section" className={`section aboutus-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="aboutus-section-content">
        <div className='top-text'>
          <h4 className='font-primary' style={{ fontSize: '30px' }}><b>Why Us</b>?</h4>
          <p className='font-secondary' style={{ fontSize: '20px' }}>A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership. Throughout the workshop, participants had the opportunity to listen to informative speeches delivered by Dr. GB Hewawa, sam and Jim Ludema. Following the speeches, participants actively engaged in interactive Q&A sessions where they sought clarification, shared their perspectives, and explored how these concepts could be directly applied within the university’s specific context.</p>
        </div>

        <div id='aboutus-content-cards-container' className="aboutus-content-cards-container">
          <div id='rw1' className='row col-12 d-flex about-rw'>
            <div className='col-md-6' style={{ textAlign: 'right' }}>
              <img src={img_01} alt="" />
            </div>
            <div id='text1' className='col-md-6 text1'>
              <h6>Explore</h6><hr style={{ width: '60px' }}></hr>
              <h3>Authentic Practices</h3>
              <p>About Mindfulness Tours</p>
              <button style={{ marginTop: '20px' }} className='btn btn-dark'>Learn more ></button>
            </div>
          </div>

          <div id='rw2' className='row col-12 d-flex about-rw'>
            <div id='text2' className='col-12 col-md-6 order-2 order-md-1 text2'>
              <h6>Explore</h6><hr style={{ width: '60px', marginLeft: 'auto', marginRight: '0' }}></hr>
              <h3>Unique Excursions</h3>
              <p>About Mindfulness Tours</p>
              <button style={{ marginTop: '20px' }} className='btn btn-dark'>Learn more ></button>
            </div>
            <div className='col-12 col-md-6 order-1 order-md-2'>
              <img src={img_04} alt="" />
            </div>
          </div>

          <div id='rw3' className='row col-12 d-flex about-rw'>
            <div className='col-md-6' style={{ textAlign: 'right' }}>
              <img src={img_01} alt="" />
            </div>
            <div id='text3' className='col-md-6 text3'>
              <h6>Explore</h6><hr style={{ width: '60px' }}></hr>
              <h3>Our Expertise</h3>
              <p>About Mindfulness Tours</p>
              <button style={{ marginTop: '20px' }} className='btn btn-dark'>Learn more ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;
