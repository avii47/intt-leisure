import React, { useState, useEffect, lazy } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/ServicePage.css';

import img1 from '../../assets/images/stock-photo-old-man-with-gray-hair-reading-a-book-sited-on-an-bench-2292379427 (1).jpg'
import img2 from '../../assets/images/stock-photo-group-of-diverse-young-people-practicing-yoga-doing-easy-seat-exercise-sukhasana-pose-working-1227103207.jpg'
import img3 from '../../assets/images/full-shot-man-working-outdoors.jpg'
import img4 from '../../assets/images/WhatsApp Image 2024-08-23 at 3.43.43 PM.jpeg'
import img5 from '../../assets/images/beautiful-woman-meditating-nature.jpg'

const ContentCard = lazy(() => import('./ServiceContentCard'));

const ServiceContent = () => {

  const isMobileView = useMobileView();
  const navigate = useNavigate(); 
  const img6 = 'https://img.freepik.com/free-photo/fit-man-practicing-yoga_23-2151745576.jpg?t=st=1724408447~exp=1724412047~hmac=920d3b90806acfb59af294d14b6ea635a051638d00ac6f663da71fd1014b9947&w=1380'

  const contentData = [
    {
      'img': img1,
      'title': 'Leaders',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Unlock Your Leadership Potential with Mindfulness in Sri Lanka'
    },
    {
      'img': img2,
      'title': 'Educators',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Uncover the Luxury of Mindfulness in Sri Lanka for Educators'
    },
    {
      'img': img3,
      'title': 'Corporates',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Is your corporate team ready to embark on a transformative journey?'
    },
    {
      'img': img4,
      'title': 'Seekers',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Are you seeking inner peace, balance, and personal growth?'
    },
    {
      'img': img5,
      'title': 'Students',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Uncover the Luxury of Mindfulness in Sri Lanka for Students'
    },
    {
      'img': img6,
      'title': 'Others',
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