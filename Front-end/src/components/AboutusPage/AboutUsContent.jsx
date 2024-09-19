import React, { useState, useEffect } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import "../../components/CSS/Home/AboutSection.css";

import img from '../../assets/images/our-story-img.png'
import achievement_img1 from '../../assets/images/achievements-img1.png'
import achievement_img2 from '../../assets/images/achievements-img2.png'
import gb from '../../assets/images/gb.png'
import vision_icon from '../../assets/icons/vision_icon.png'
import mission_icon from '../../assets/icons/mission_icon.png'

const AboutUsContent = () => {

  const isMobileView = useMobileView();
  const offset = 200;

  useEffect(() => {
    const section = document.querySelector('.top-section');
    const cols = document.querySelectorAll('.top-col');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cols.forEach((col, index) => {
            col.style.animation = `slideInLeft 1s ease-out forwards ${index * 0.2}s`;
          });
        }
      },
      { threshold: 0.1 }
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
    const section = document.getElementById('our-story');
    const blockSection = document.getElementById('our-story-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blockSection.classList.add('animate-block');
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
    const section = document.getElementById('our-missionVision');
    const blockSection = document.getElementById('our-missionVision-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blockSection.classList.add('animate-vmCard');
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
    const section = document.getElementById('our-achievements');
    const blockSection = document.getElementById('our-achievements-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blockSection.classList.add('animate-block');
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
    const section = document.getElementById('ceo-message');
    const blockSection = document.getElementById('ceo-message-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blockSection.classList.add('animate-vmCard');
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

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition - offset,  
      behavior: 'smooth',
    });
  };


  return (
    <section id="aboutus-content-section" className={`section aboutus-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="aboutus-section-content">
        <div id='top-section' className="top-section d-flex">
          <div className="col-lg-3 top-col" style={{ padding: '0 40px 0 0' }}>
            <a href="#our-story" onClick={(e) => handleScroll(e, 'our-story')}>
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>Our Story</h3>
              </div>
            </a>
          </div>
          <div className="col-lg-3 top-col" style={{ padding: '0 40px 0 0' }}>
            <a href="#our-missionVision" onClick={(e) => handleScroll(e, 'our-missionVision')}>
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>Our Vision</h3>
              </div>
            </a>
          </div>
          <div className="col-lg-3 top-col" style={{ padding: '0 30px 0 0' }}>
            <a href="#our-achievements" onClick={(e) => handleScroll(e, 'our-achievements')}>
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>Achievements</h3>
              </div>
            </a>
          </div>
          <div className="col-lg-3 top-col" style={{ padding: '0 0 0 30px' }}>
            <a href="#ceo-message" onClick={(e) => handleScroll(e, 'ceo-message')}>
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>A Word From CEO</h3>
              </div>
            </a>
          </div>
        </div>

        <section id='our-story' className='our-story why-choose-item'>
          <div id='our-story-content' className="our-story-content col-12 d-flex" style={{flexWrap:'wrap'}}>
            <div className="col-lg-8 txt-col">
              <div>
                <h3 className="font-primary">At the heart of our mindfulness vacations is Dr. Gamini Hewawasam</h3>
                <p className="font-secondary">A Forbes Coach Council member and a leading practitioner of the original form of mindfulness. With over 12 years of experience in the travel industry in the USA, Dr. Hewawasam has recognized a gap between traditional mindfulness teachings preserved in Sri Lanka and their often diluted Western practices.</p><br />
                <p className="font-secondary">Dedicated to bridging this gap, Dr. Hewawasam invites leaders like you to experience mindfulness in its most authentic form. Our meticulously crafted itineraries are designed specifically for leaders, immersing you in the profound essence of mindfulness as practiced for centuries in Sri Lanka.</p><br />
                <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices. Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
              </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: 'right' }}>
              <img src={img} alt="our-story-image" className='story-img' />
            </div>
          </div>
        </section>

        <section id='our-missionVision' className='our-missionVision why-choose-item'>
          <div id='our-missionVision-content' className='our-missionVision-content col-md-12 d-flex' style={{flexWrap:'wrap'}}>
            <div className="col-lg-6 d-flex vm-card-col" style={{justifyContent:'right', paddingRight:'30px'}}>
              <div className='vm-contaioner'>
                <h3 className="font-primary">Our Vision</h3>
                <img src={vision_icon} alt="vision_icon" style={{height:'200px', marginBottom:'40px'}}/>
                <p className="font-secondary" style={{fontSize:'20px'}}>Unlocking leadership potential with mindfulness vacations</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex vm-card-col" style={{justifyContent:'left', paddingLeft:'30px'}}>
              <div className='vm-contaioner'>
                <h3 className="font-primary">Our Mission</h3>
                <img src={mission_icon} alt="mission_icon" style={{height:'200px', marginBottom:'40px'}}/>
                <p className="font-secondary" style={{fontSize:'20px'}}>Unlock the Hidden Gem of Authentic Buddhist Teachings, Providing the Key to Intellectual and Emotional Balance.</p>
              </div>
            </div>
          </div>
        </section>

        <section id='our-achievements' className='our-achievements why-choose-item'>
            <h3 className="font-primary">Our Achievements</h3>
            <div id='our-achievements-content' className='our-achievements-content'>
              <div className="row d-flex" style={{flexWrap:'wrap'}}>
                <div className="col-lg-4">
                  <img className='achivement-img' src={achievement_img1} alt="" />
                </div>
                <div className="col-lg-7 txt-col">
                  <div className='txt-col-p'>
                    <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices.</p>
                    <p className="font-secondary">Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
                  </div>
                </div>
              </div><br></br><br></br><br></br>
              <div className="row d-flex" style={{flexWrap:'wrap'}}>
                <div className="col-lg-4">
                  <img className='achivement-img' src={achievement_img2} alt="" />
                </div>
                <div className="col-lg-7 txt-col">
                  <div className='txt-col-p2'>
                    <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices.</p>
                    <p className="font-secondary">Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section id='ceo-message' className='ceo-message why-choose-item'>
          <div id='ceo-message-content' className="ceo-message-content col-12 d-flex" style={{flexWrap:'wrap'}}>
            <div className="col-lg-7 txt-col">
              <div>
                <h3 className="font-primary">Meet Our Visionary</h3>
                <p className="font-secondary">“Mindfulness is approached from many perspectives, yet its true essence often remains elusive. It is time to bring clarity to its origins and explore its transformative potential in our lives." - Dr. Gamini Hewawasam. </p><br />
                <p className="font-secondary">Dr. Gamini Hewawasam, a distinguished executive and mindfulness expert with over 20 years in the airline industry and leadership development, is the founder and CEO of INTT Leisure. With a Ph.D. and a deep commitment to personal and professional growth, Dr. Hewawasam integrates techniques like Anapanasati (mindfulness of breathing) into leadership training, enhancing decision-making, stress management, and overall well-being.</p><br />
                <p className="font-secondary">At INTT Leisure, Dr. Hewawasam aims to offer the holistic benefits of mindfulness, rooted in the original teachings of Lord Buddha, through immersive mindfulness vacations in Sri Lanka, a land where these practices have long been cherished.</p>
              </div>
            </div>
            <div className="col-lg-5" style={{ textAlign: 'right' }}>
              <img src={gb} alt="our-story-image" className='story-img' />
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default AboutUsContent;
