import React, { useState, useEffect } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/AboutUsPage.css';

// import img_01 from '../../assets/icons/Icons_WCU_Authentic Practice.png';
// import img_02 from '../../assets/icons/Icons_WCU_Forbes Cerified Coach.png'
// import img_03 from '../../assets/icons/Icons_WCU_Eyes of Locals.png'

import img from '../../assets/images/aboutus-img.png'

const AboutUsContent = () => {

  const isMobileView = useMobileView();

  useEffect(() => {
    const section = document.getElementById('rw4');
    const textSection = document.getElementById('text4');

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
    const section = document.getElementById('rw5');
    const textSection = document.getElementById('text5');

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
    const section = document.getElementById('rw6');
    const textSection = document.getElementById('text6');

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
        
          {/* <h4 className='font-primary' style={{ fontSize: '30px' }}><b>Why Us</b>?</h4>
          <p className='font-secondary' style={{ fontSize: '20px' }}>A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership. Throughout the workshop, participants had the.</p>
        

        <div id='aboutus-content-cards-container' className="aboutus-content-cards-container">
          <div id='rw4' className='row col-12 d-flex about-rw' style={{ justifyContent:'center', marginTop:'100px' }}>
            <div className='col-md-3' style={{ }}>
              <img src={img_01} style={{ height:'200PX' }} alt="" />
            </div>
            <div id='text4' className='col-md-5 text4'>
              <h3>Authentic practice (Results)</h3>
              <p style={{ width:'500px' }}>Our mindfulness techniques follow Buddha’s original teachings, offering a distinct approach from Western ideologies.</p>
              <button style={{ marginTop: '20px' }} className='btn btn-dark'>Learn more ></button>
            </div>
          </div>

          <div id='rw5' className='row col-12 d-flex about-rw' style={{ justifyContent:'center',marginTop:'100px' }}>
            <div id='text5' className='col-md-6 order-2 order-md-1 text5' style={{marginLeft:'150px' }}>
              <h3>Forbes-Certified Coach</h3>
              <p style={{ width:'500px' }}>All mindfulness programs are designed by Dr. Gamini Hewawasam, a Forbes-certified coach specializing in mindfulness in leadership.</p>
              <button style={{ marginTop: '20px' }} className='btn btn-dark'>Learn more ></button>
            </div>
            <div className='col-md-3 order-1 order-md-2'>
              <img src={img_02} style={{ height:'200PX' }} alt="" />
            </div>
          </div>

          <div id='rw6' className='row col-12 d-flex about-rw' style={{ justifyContent:'center',marginTop:'100px', marginBottom:'100px' }}>
            <div className='col-md-3' style={{  }}>
              <img src={img_03} style={{ height:'200PX' }} alt="" />
            </div>
            <div id='text6' className='col-md-5 text6'>
              <h3>Eyes of locals</h3>
              <p style={{ width:'500px' }}>Discover Sri Lanka through the eyes of locals. As natives, we offer an authentic journey deeply rooted in our heritage and heartfelt connection to the land.</p>
              <button style={{ marginTop: '20px' }} className='btn btn-dark'>Learn more ></button>
            </div>
          </div>
        </div> */}

        <h3 className='font-primary'>At the heart of our mindfulness vacations is Dr. Gamini Hewawasam</h3>
        <p className='font-secondary about-p'>A Forbes Coach Council member and a leading practitioner of the original form of mindfulness. With over 12 years of experience in the travel industry in the USA, Dr. Hewawasam has recognized a gap between traditional mindfulness teachings preserved in Sri Lanka and their often diluted Western practices.</p>
        <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
          <img className='about-img' src={img} alt="about us image" loading='lazy'/>
        </div>
        <p className='font-secondary about-p2'>Dedicated to bridging this gap, Dr. Hewawasam invites leaders like you to experience mindfulness in its most authentic form.</p>
        <p className='font-secondary about-p2'>Our meticulously crafted itineraries are designed specifically for leaders, immersing you in the profound essence of mindfulness as practiced for centuries in Sri Lanka.</p>
        <p className='font-secondary about-p2'>Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices. Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
      </div>
    </section>
  );
};

export default AboutUsContent;
