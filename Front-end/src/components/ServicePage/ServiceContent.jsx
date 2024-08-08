import React, { useState, useEffect } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/ServicePage.css';
import ContentCard from '../ServicePage/ServiceContentCard';

const ServiceContent = () => {

  const isMobileView = useMobileView();
  const img4 = 'https://img.freepik.com/free-photo/grunge-gray-concrete-textured-background_53876-145492.jpg?t=st=1722571110~exp=1722574710~hmac=dbe2ce48dbeca59499ad4867b3fd0ab0b1cdf15ea16e35d33162d12e12ef02e3&w=1380'

  const contentData = [
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
      
  ];

  useEffect(() => {
    const section = document.getElementById('service-content-section');
    const cardSection = document.getElementById('service-content-cards-container');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardSection.classList.add('animate-cards');
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
    <section id="service-content-section"  className={`section service-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="service-section-content">
        <h3 className='font-primary'><b>Choose your Journey</b></h3>
        <p className='font-secondary' style={{fontSize:'18px'}}>Connect with the Ultimate Luxury of Mindfulness in Sri Lanka. A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and </p>
        <div id='service-content-cards-container' className="d-flex service-content-cards-container">
            {contentData.map((content, index) => (
              <ContentCard key={index} content={content} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;