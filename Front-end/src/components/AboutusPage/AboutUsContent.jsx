import React, { useState, useEffect } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/AboutUsPage.css';

import img from '../../assets/images/our-story-img.png'
import achievementd_img1 from '../../assets/images/achievements-img1.png'
import achievementd_img2 from '../../assets/images/achievements-img2.png'
import gb from '../../assets/images/gb.png'

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
        <div className="top-section d-flex">
          <div className="col-3" style={{padding:'0 20px 0 0'}}>
            <a href="#our-story">
              <div className="topic-item">
                <h3 className='font-secondary topic-item-text'>Our Story</h3>
              </div>
            </a>
          </div>
          <div className="col-3" style={{padding:'0 20px 0 0'}}>
            <a href="#our-missionVision">
              <div className="topic-item">
                <h3 className='font-secondary topic-item-text'>Our Vision</h3>
              </div>
            </a>
          </div>
          <div className="col-3" style={{padding:'0 10px 0 0'}}>
            <a href="#our-achievements">
              <div className="topic-item">
                <h3 className='font-secondary topic-item-text'>Achievements</h3>
              </div>
            </a>
          </div>
          <div className="col-3" style={{padding:'0 0 0 10px'}}>
            <a href="#ceo-message">
              <div className="topic-item">
                <h3 className='font-secondary topic-item-text'>A Word From CEO</h3>
              </div>
            </a>
          </div>
        </div>

        <section id='our-story' className='why-choose-item'>
          <div className="col-12 d-flex">
            <div className="col-7 txt-col">
              <div>
              <h3 className="font-primary">At the heart of our mindfulness vacations is Dr. Gamini Hewawasam</h3><br></br><br></br><br></br>
                <p className="font-secondary">A Forbes Coach Council member and a leading practitioner of the original form of mindfulness. With over 12 years of experience in the travel industry in the USA, Dr. Hewawasam has recognized a gap between traditional mindfulness teachings preserved in Sri Lanka and their often diluted Western practices.</p><br />
                <p className="font-secondary">Dedicated to bridging this gap, Dr. Hewawasam invites leaders like you to experience mindfulness in its most authentic form. Our meticulously crafted itineraries are designed specifically for leaders, immersing you in the profound essence of mindfulness as practiced for centuries in Sri Lanka.</p><br />
                <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices. Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
              </div>
            </div>
            <div className="col-5" style={{textAlign:'right'}}>
              <img src={img} alt="our-story-image" className='stoty-img'/>
            </div>
          </div>
        </section>

        <section id='our-missionVision' className='our-missionVision why-choose-item'>
          <div>
            <h3 className="font-primary">Our Vision</h3><br></br>
            <p className="font-secondary">Intellectual Happiness through Mindful Living</p><br /><br /><br />
            <h3 className="font-primary">Our Mission</h3><br></br>
            <p className="font-secondary">Unlock the Hidden Gem of Authentic Buddhist Teachings, Providing the Key to Intellectual and Emotional Balance.</p>
          </div>
        </section>

        <section id='our-achievements' className='our-achievements why-choose-item'>
          <div>
            <h3 className="font-primary">Our Achievements</h3><br></br>
            <div className="row d-flex">
              <div className="col-5">
                <img src={achievementd_img1} alt="" />
              </div>
              <div className="col-7 txt-col">
                <div>
                  <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices.</p>
                  <p className="font-secondary">Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
                </div>
              </div>
            </div><br></br><br></br><br></br>
            <div className="row d-flex">
              <div className="col-5">
                <img src={achievementd_img2} alt="" />
              </div>
              <div className="col-7 txt-col">
                <div>
                  <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices.</p>
                  <p className="font-secondary">Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='ceo-message' className='ceo-message why-choose-item'>
          <div className="col-12 d-flex">
            <div className="col-7 txt-col">
              <div>
              <h3 className="font-primary">A Word From CEO</h3><br></br><br></br><br></br>
                <p className="font-secondary">Dr. Gamini Hewawasam stands out as a distinguished leader and scholar, with a formidable presence in both the entrepreneurial and academic sectors.</p><br />
                <p className="font-secondary">As the CEO of FineFinish Engineering (Pvt) Ltd in Sri Lanka and the INT Terminal Travel Group in the United States, he has established himself as a key player in the aviation industry. His expertise in providing top-tier services has garnered the attention of United Airlines' Global Service flyers, celebrities, and Fortune 500 executives, underscoring his influential role in shaping the airline industry on a global scale.</p><br />
                <p className="font-secondary">With his extensive experience spanning over two decades across diverse regions like the Middle East, South Asia, and North America, Dr. Hewawasam has transcended his Sri Lankan roots to leave a significant mark in the international airline markets.</p>
              </div>
            </div>
            <div className="col-5" style={{textAlign:'right'}}>
              <img src={gb} alt="our-story-image" className='stoty-img'/>
            </div>
          </div>
        </section>
        
      </div>
    </section>
  );
};

export default AboutUsContent;
