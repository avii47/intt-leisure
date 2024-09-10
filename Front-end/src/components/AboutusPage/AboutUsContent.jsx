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


  return (
    <section id="aboutus-content-section" className={`section aboutus-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="aboutus-section-content">
        <div id='top-section' className="top-section d-flex">
          <div className="col-lg-3 top-col" style={{ padding: '0 40px 0 0' }}>
            <a href="#our-story">
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>Our Story</h3>
              </div>
            </a>
          </div>
          <div className="col-lg-3 top-col" style={{ padding: '0 40px 0 0' }}>
            <a href="#our-missionVision">
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>Our Vision</h3>
              </div>
            </a>
          </div>
          <div className="col-lg-3 top-col" style={{ padding: '0 30px 0 0' }}>
            <a href="#our-achievements">
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>Achievements</h3>
              </div>
            </a>
          </div>
          <div className="col-lg-3 top-col" style={{ padding: '0 0 0 30px' }}>
            <a href="#ceo-message">
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
                <p className="font-secondary" style={{fontSize:'20px'}}>Give the experience of Intellectual Happiness through Mindful Living</p>
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
                <h3 className="font-primary">A Word From CEO</h3>
                <p className="font-secondary">Dr. Gamini Hewawasam stands out as a distinguished leader and scholar, with a formidable presence in both the entrepreneurial and academic sectors.</p><br />
                <p className="font-secondary">As the CEO of FineFinish Engineering (Pvt) Ltd in Sri Lanka and the INT Terminal Travel Group in the United States, he has established himself as a key player in the aviation industry. His expertise in providing top-tier services has garnered the attention of United Airlines' Global Service flyers, celebrities, and Fortune 500 executives, underscoring his influential role in shaping the airline industry on a global scale.</p><br />
                <p className="font-secondary">With his extensive experience spanning over two decades across diverse regions like the Middle East, South Asia, and North America, Dr. Hewawasam has transcended his Sri Lankan roots to leave a significant mark in the international airline markets.</p>
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
