import React, { useEffect, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/ServicePage.css';

import img1 from '../../assets/images/leadersPage-hero-img.jpg'
import img2 from '../../assets/images/educatorsPage-hero-img.jpg'
import img3 from '../../assets/images/coparatesPage-hero-img.jpg'
import img4 from '../../assets/images/seekersPage-hero-img.jpg'
import img5 from '../../assets/images/studentsPage-hero-img.jpg'

const ContentCard = lazy(() => import('./ServiceContentCard'));

const ServiceContent = () => {

  const isMobileView = useMobileView();
  const navigate = useNavigate();
  const img6 = 'https://img.freepik.com/free-photo/back-view-woman-doing-yoga-outdoors_23-2148769551.jpg?t=st=1726225399~exp=1726228999~hmac=ecaf4b00aa9acc543b0324daca432cd61131bc193e49bb3f774a2dca29807fcf&w=1380'

  const contentData = [
    {
      'id': 1,
      'img': img1,
      'title': 'Leaders',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Unlock Your Leadership Potential with Mindfulness in Sri Lanka',
      'label': 'View Package'
    },
    {
      'id': 2,
      'img': img2,
      'title': 'Educators',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Uncover the Luxury of Mindfulness in Sri Lanka for Educators',
      'label': 'View Package'
    },
    {
      'id': 3,
      'img': img3,
      'title': 'Corporates',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Is your corporate team ready to embark on a transformative journey?',
      'label': 'View Package'
    },
    {
      'id': 4,
      'img': img4,
      'title': 'Seekers',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Are you seeking inner peace, balance, and personal growth?',
      'label': 'View Package'
    },
    {
      'id': 5,
      'img': img5,
      'title': 'Students',
      'sub': 'Mindfulness at Ritigala',
      'text': 'Uncover the Luxury of Mindfulness in Sri Lanka for Students',
      'label': 'View Package'
    },
    {
      'id': 6,
      'img': img6,
      'title': 'Customize You Journey',
      'text': 'You can customize your journey with us. We will provide most suitable package for you.',
      'label': 'Customize your Package'
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
    if(id === 6){
      navigate('/contact-us');
    }
    else{
      navigate(`/services/${id}`);
    }
  };

  return (
    <section id="service-content-section" className={`section justify-content-center service-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="service-section-content justify-content-center">
        <h3 className='font-primary'>Choose your Journey</h3>
        <p className='font-secondary' style={{ marginTop: '10px' }}>As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us. </p>
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