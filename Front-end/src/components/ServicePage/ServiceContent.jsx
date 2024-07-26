import React, { useState, useEffect } from 'react';
import '../CSS/ServicePage.css';
import img_01 from '../../assets/images/Rectangle 25.png';
import img_02 from '../../assets/images/Rectangle 28.png';
import img_03 from '../../assets/images/img3.jpg';
import ContentCard from '../ServicePage/ServiceContentCard';

const ServiceContent = () => {

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

  const contentData = [
    {
      'img': img_01,
      'title': 'Corporate',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img_02,
      'title': 'Mindfulness Seekers',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img_03,
      'title': 'Leaders',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img_02,
      'title': 'Students & Educators',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img_02,
      'title': 'Destinations',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img_02,
      'title': 'Destinations',
      'sub': 'Well trained experts to guide you through the journey.'
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
    <section id="service-content-section"  className={`section service-content-section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="service-section-content justify-content-center">
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