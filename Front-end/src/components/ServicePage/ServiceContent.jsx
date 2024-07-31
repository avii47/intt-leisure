import React, { useState, useEffect } from 'react';
import '../CSS/Pages/ServicePage.css';
import img_01 from '../../assets/images/Rectangle 25.png';
import img_02 from '../../assets/images/Rectangle 28.png';
import img_03 from '../../assets/images/img3.jpg';
import ContentCard from '../ServicePage/ServiceContentCard';

const ServiceContent = () => {

  const img4 = 'https://img.freepik.com/free-photo/business-woman-gray-jacket-enjoying-music-while-sitting-workplace-white-office_197531-10691.jpg?t=st=1722326018~exp=1722329618~hmac=664bb3f19e1c854d3a319c2da3751044c9ae2180e9f3c4370378ae712184d3be&w=1380'
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