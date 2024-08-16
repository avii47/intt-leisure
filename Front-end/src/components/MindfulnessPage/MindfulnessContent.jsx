import React, { useState, useEffect } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/MindfulnessPage.css';
import img_01 from '../../assets/images/Rectangle 25.png';
import img_02 from '../../assets/images/aboutUs-bg.png';
import img_03 from '../../assets/images/img3.jpg';
import img_04 from '../../assets/images/Rectangle 90 (2).png';

import ContentBlock from '../MindfulnessCard'

const MindfulnessContent = () => {

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
    <section id="mindfulness-content-section" className={`section mindfulness-content-section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="mindfulness-section-content">
        <h3 className='font-primary'>What is Mindfulness Tourism?</h3>
        <p className='font-secondary' style={{ textAlign:'justify', marginTop:'10px' }}>What exactly is Mindful Tourism? We often hear about mindfulness, but how often do we participate in Mindful Tourism? It’s a distinct approach rooted in Sri Lanka's authentic mindfulness teachings and bolstered by solid research. Partnering with INTT Leisure for a mindful tour offers a transformative experience tailored for leaders and professionals. Each moment of your journey is meticulously designed to deepen your mindfulness practice. Our experts guide you through techniques that aren’t just theoretical—they’re backed by action research conducted by Dr. Gamini Hewawasam, specifically tested and proven to be effective for leaders</p>
        <div id='mindfulness-content-cards-container' className="mindfulness-content-cards-container">
          {/* <div id='rw1' className='row col-12 d-flex mindfulness-rw'>
            <div className='col-md-6' style={{  }}>
              <img loading='lazy' src={img_01} alt="authentic practices img" />
            </div>
            <div id='text1' className='col-md-6 text1 font-secondary'>
              <div>
                <h6 style={{fontWeight:'350', fontSize:'15px'}}>Explore</h6>
                <hr style={{ width: '3.7rem', marginTop:'-1px' }} />
                <h3 style={{fontSize:'28px'}}>Authentic Practices</h3>
                <p>Experience the unadulterated essence of mindfulness, untainted by modern adaptations. Our approach is a testament to the timeless wisdom of the Buddha's teachings, carefully preserved and passed down through generations in Sri Lanka.</p>
                <button style={{ marginTop: '20px' }} className='btn btn-dark'>Learn more ></button>
              </div>
            </div>
          </div>

          <div id='rw2' className='row col-12 d-flex mindfulness-rw'>
            <div id='text2' className='col-md-6 order-2 order-md-1 text2 font-secondary'>
              <div>
                <h6 style={{fontWeight:'350', fontSize:'15px'}}>Explore</h6>
                <hr style={{ width: '3.7rem', marginTop:'-1px' }} />
                <h3 style={{fontSize:'28px'}}>Unique Excursions</h3>
                <p>These mindfulness practices guided by experts at INTT Leisure have been conducted on business leaders from Fortune 100 companies and are shown to be effective through proven results.</p>
                <button style={{ marginTop: '20px' }} className='btn btn-dark'>Learn more ></button>
              </div>
            </div>
            <div className='col-md-6 order-1 order-md-2' style={{textAlign:'right'}}>
              <img loading='lazy' src={img_04} alt="unique excursions img" />
            </div>
          </div> */}

          {/* <div id='rw3' className='row col-12 d-flex mindfulness-rw'>
            <div className='col-md-6' style={{  }}>
              <img loading='lazy' src={img_02} alt="expertise img" />
            </div>
            <div id='text3' className='col-md-6 text3'>
              <h6>Explore</h6><hr style={{ width: '60px' }}></hr>
              <h3>Our Expertise</h3>
              <p>About Mindfulness Tours</p>
              <button style={{ marginTop: '20px' }} className='btn btn-dark'>Learn more ></button>
            </div>
          </div> */}

          <ContentBlock
            image={img_01}
            title="Authentic Practices"
            text="Experience the unadulterated essence of mindfulness..."
            buttonText="Learn more >"
            imagePosition="left"
          />

          <ContentBlock
            image={img_01}
            title="Unique Excursions"
            text="These mindfulness practices guided by experts..."
            buttonText="Learn more >"
            imagePosition="right"
          />

        </div>
      </div>
    </section>
  );
};

export default MindfulnessContent;
