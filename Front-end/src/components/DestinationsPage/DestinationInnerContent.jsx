import React, { useState, useEffect, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/DestinationInnerPage.css';

import img_01 from '../../assets/images/dubai-img1.jpeg';
import img_02 from '../../assets/images/dubai-img2.jpeg';
import img_03 from '../../assets/images/dubai-img3.jpeg';
import img_04 from '../../assets/images/dubai-img4.jpeg';
import img_05 from '../../assets/images/dubai-img5.jpeg';
import img_06 from '../../assets/images/dubai-img6.jpeg';

const TourComponent = lazy(() => import('./TourCard'));

const DestinationInnerContent = () => {

  const isMobileView = useMobileView();
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.getElementById('destination-content-section');
    const cards = document.getElementById('destionation-cards-container');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.classList.add('animate-cards');
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

//   const handleServiceCardClick = (id) => {
//     navigate('/contact-us');
//   };

const handleInquiryClick = () => {
  alert('Inquiry button clicked');
};

const handleCallClick = () => {
  alert('Call button clicked');
};

  return (
    <section id="destination-inner-content-section" className={`section destination-inner-content-section ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="destination-inner-section-content">
        <div id='destionation-inner-cards-container' className="destionation-inner-cards-container d-flex">

            <TourComponent
                imageUrl={img_01}
                title="Budget Tours to Bangkok"
                details={[
                  "3 Nights 4 Days in Bangkok",
                  "Includes Transport, Hotels and Meals",
                  "Minimum of 2 passengers"
                ]}
                startingPrice="LKR 75,555"
                onInquiryClick={handleInquiryClick}
                onCallClick={handleCallClick}
            />


        </div>
      </div>
    </section>
  );
};

export default DestinationInnerContent;