import React, { useState, useEffect } from 'react';
import '../CSS/Pages/DestinationsPage.css';
import DestinationCard from '../DestinationsPage/DestinationCards';
import { useMobileView } from '../../contexts/MobileViewContext';

import img_01 from '../../assets/images/stock-photo-elephants-couple-in-yala-national-park-sri-lanka-2432394461.jpg';
import img_02 from '../../assets/images/stock-photo-instagram-effect-of-polonnaruwa-ancient-vatadage-that-is-an-ancient-structure-built-for-hold-the-685384048.jpg';
import img_03 from '../../assets/images/stock-photo-kandy-sri-lanka-july-sri-lankan-traditional-handcrafted-goods-for-sale-in-a-shop-at-2223350811.jpg';
import img_04 from '../../assets/images/stock-photo-the-sri-lankan-leopard-is-a-subspecies-of-leopard-found-only-in-sri-lanka-a-small-island-nation-2301123729.jpg'



const DestinationsContent = () => {

  const isMobileView = useMobileView();

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
   

  const destinationstData = [
    {
        img: img_01,
        title: 'Corporate',
        text: 'Well trained experts to guide you through the journey.'
    },
    {
        img: img_02,
        title: 'Corporate',
        text: 'Well trained experts to guide you through the journey.'
    },
    {
        img: img_03,
        title: 'Corporate',
        text: 'Well trained experts to guide you through the journey.'
    },
    {
        img: img_04,
        title: 'Corporate',
        text: 'Well trained experts to guide you through the journey.'
    },
  ];

  return (
    <section id="destination-content-section" className={`section destination-content-section ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="destination-section-content">
        <div id='destionation-cards-container' className="destionation-cards-container d-flex">
            {destinationstData.map((content, index) => (
              <DestinationCard key={index} content={content} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsContent;