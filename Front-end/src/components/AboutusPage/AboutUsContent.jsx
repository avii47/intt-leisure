import React, { useState, useEffect, lazy, useRef } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import cardLoader from '../../hooks/cardLoader';
import "../../components/CSS/Home/AboutSection.css";

import achievement_img1 from '../../assets/images/achievements-img1.png'
import achievement_img2 from '../../assets/images/achievements-img2.png'
import gb from '../../assets/images/boss manolead.jpg'
import achivement_bg from '../../assets/images/vmg-background.jpg'
import vision_icon from '../../assets/icons/vmg-icon1.svg'
import mission_icon from '../../assets/icons/vmg-icon2.svg'
import goal_icon from '../../assets/icons/vmg-icon3.svg'

import IconCard from './IconCard';
import contentData from '../../data/WhyChooseUsPageData';
import "../../components/CSS/Home/WhyChooseUsSection.css";

const AboutUsContent = () => {

  const isMobileView = useMobileView();
  const iconCardsRef = useRef([]);

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

  cardLoader(iconCardsRef, 'visible', 200, { threshold: 0.5 });

  return (
    <section id="aboutus-content-section" className={`aboutus-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="aboutus-section-content page-section">
        <section id='top-cards' className='top-cards'>
          <div id='top-cards-content' className="top-cards-content row d-flex">
            <div className='tc-head'>
              <h2 className='font-primary' style={{textAlign:'left'}}>Why Choos Us</h2><hr/>
            </div>
            
            {contentData.map((content, index) => (
              <div className="col-md-4 col-sm-6 col-12 WCU-icon" key={index}>
                <IconCard
                  className={`icon-card2`}
                  content={content}
                  ref={el => iconCardsRef.current[index] = el}
                  style={{ '--animation-order': index }}
                />
              </div>
            ))}
          </div>
        </section>

        <section id='our-story' className='our-story why-choose-item' style={{marginTop:'80px'}}>
          <div id='our-story-content' className="our-story-content col-12 d-flex" style={{flexWrap:'wrap'}}>
            <div className="col-lg-8 txt-col">
              <div>
                <h2 className='font-primary' style={{textAlign:'left', marginBottom:'10px'}}>Our Story</h2><hr />
                <h3 className="font-secondary" style={{fontSize:'25px', marginTop:'40px'}}>At the heart of our mindfulness vacations is Dr. Gamini Hewawasam</h3>
                <p className="font-secondary">Dr. GB Hewawasam, a Forbes Coach Council member and a leading practitioner of the original form of mindfulness, carries over 12 years of experience in the travel industry in the USA, thus making him an ideal expert regarding the benefits of Mindfulness Tourism. Through his extensive research and experience, Dr. Hewawasam has recognized a gap between traditional mindfulness teachings preserved in Sri Lanka and the often diluted Western practices. </p><br />
                <p className="font-secondary">Dedicated to bridging this gap, Dr. Hewawasam invites seekers like you to experience mindfulness in its most authentic form. Our meticulously crafted itineraries are designed to satisfy your personal goals, allowing you to truly immerse yourself in the essence of mindfulness as practiced for centuries in Sri Lanka.</p><br />
                <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique style and perspective, providing a deep and meaningful experience that goes beyond conventional practices. Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
              </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: 'right' }}>
              <img src={gb} alt="doctor GB image" className='story-img' />
            </div>
          </div>
        </section>

        <section id='our-achievements' className='our-achievements why-choose-item'>
          <div className="our-achievements-overlayer"></div>
          <img src={achivement_bg} className='our-achievements-bg' alt="mindfulness section background image" loading='lazy'/>
          <div id='our-achievements-content' className='our-achievements-content'>
            <div>
            <h3 className="font-primary">Our Achievements</h3><hr style={{margin: isMobileView?'-30px 0 50px 0':'-50px 0 50px 0'}} />
            <div className="row d-flex">
              <div className="col-lg-6">
                <div className="achivement-item">
                  <img className='achivement-img' src={achievement_img1} alt="forbes logo" />
                  <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices. Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="achivement-item achivement-item-right">
                  <img className='achivement-img' src={achievement_img2} alt="harvard business review logo" style={{height: '180px'}}/>
                  <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices. Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
                </div>
              </div>
            </div></div>
          </div>
        </section>


        <section id='our-missionVision' className='our-missionVision why-choose-item'>
          <div id='our-missionVision-content' className='our-missionVision-content d-flex col-md-12'>
              <div className="col-md-4 d-flex vm-card-col">
                <div className='vm-container'>
                  <h3 className="font-primary">Our Vision</h3>
                  <img src={vision_icon} alt="vision icon" style={{height:'200px', marginBottom:'40px'}} loading='lazy'/>
                  <p className="font-secondary" style={{fontSize:'20px'}}>To unlock leadership potential with mindfulness vacations.</p>
                </div>
              </div>
              <div className="col-md-4 d-flex vm-card-col" style={{justifyContent:'center'}}>
                <div className='vm-container'>
                  <h3 className="font-primary">Our Mission</h3>
                  <img src={mission_icon} alt="mission icon" style={{height:'200px', marginBottom:'40px'}} loading='lazy'/>
                  <p className="font-secondary" style={{fontSize:'20px'}}>To uncover the hidden gem of authentic Buddhist teachings that provide the key to intellectual and emotional balance.</p>
                </div>
              </div>
              <div className="col-md-4 d-flex vm-card-col" style={{justifyContent:'right' }}>
                <div className='vm-container'>
                  <h3 className="font-primary">Our Values</h3>
                  <img src={goal_icon} alt="mission icon" style={{height:'200px', marginBottom:'40px'}} loading='lazy'/>
                  <ul style={{textAlign:'left', paddingLeft:'60px'}}>
                    <li className="font-secondary" style={{fontSize:'20px'}}>Introspection</li>
                    <li className="font-secondary" style={{fontSize:'20px'}}>Compassionate Leadership</li>
                    <li className="font-secondary" style={{fontSize:'20px'}}>Holistic Well-being</li>
                  </ul>
                  {/* <p className="font-secondary" style={{fontSize:'20px'}}>To uncover the hidden gem of authentic Buddhist teachings that provide the key to intellectual and emotional balance.</p> */}
                </div>
              </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default AboutUsContent;
