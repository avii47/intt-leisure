import React, { useState, useEffect, lazy } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/ServicePage.css';

const ContentCard = lazy(() => import('./ServiceContentCard'));

const ServiceContent = () => {

  const isMobileView = useMobileView();
  const navigate = useNavigate(); 
  const img4 = 'https://img.freepik.com/free-photo/wellness-practices-self-care-world-health-day_23-2151256761.jpg?t=st=1724326284~exp=1724329884~hmac=6c1e292a149e8a284e9e3d3130ae309c20211b5722d9c19d98d29ead02c1835b&w=1380'

  const contentData = [
    {
      'img': img4,
      'title': 'Corporates',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Is your corporate team ready to embark on a transformative journey?'
    },
    {
      'img': img4,
      'title': 'Leaders',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Unlock Your Leadership Potential with Mindfulness in Sri Lanka'
    },
    {
      'img': img4,
      'title': 'Educators',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Uncover the Luxury of Mindfulness in Sri Lanka for Educators'
    },
    {
      'img': img4,
      'title': 'Students',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Uncover the Luxury of Mindfulness in Sri Lanka for Students'
    },
    {
      'img': img4,
      'title': 'Seekers',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Are you seeking inner peace, balance, and personal growth?'
    },
    {
      'img': img4,
      'title': 'Other',
      'sub': 'Mindfulness at Ritigala',
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

  const handleServiceCardClick = (id) => {
    navigate(`/services/${id}`); 
  };

  return (
    <section id="service-content-section"  className={`section justify-content-center service-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="service-section-content justify-content-center">
        <h3 className='font-primary'>Choose your Journey</h3>
        <p className='font-secondary' style={{ marginTop:'10px' }}>As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us. </p>
        <div id='service-content-cards-container' className="d-flex service-content-cards-container">
            {contentData.map((content, index) => (
              <ContentCard key={index} content={content} onClick={() => handleServiceCardClick(content.id)} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;