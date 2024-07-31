import React, { useState, useEffect } from 'react';
import '../CSS/Pages/DestinationsPage.css';
import DestinationCard from '../DestinationsPage/DestinationCards';
// import img_01 from '../../assets/images/events-img1.png';
// import img_02 from '../../assets/images/events-img2.png';
// import img_03 from '../../assets/images/events-img3.png';
// import img_04 from '../../assets/images/news-img.png';

const DestinationsContent = () => {

  const img_01 = 'https://img.freepik.com/free-photo/resort-sky-bay-travel-exotic_1232-4572.jpg?t=st=1722259982~exp=1722263582~hmac=a0e37219e319cb4ad1cedec6d68c1413dbc1f9abf18292483db2a0ad3cc31c24&w=1380'

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
        img: img_01,
        title: 'Corporate',
        text: 'Well trained experts to guide you through the journey.'
    },
    {
        img: img_01,
        title: 'Corporate',
        text: 'Well trained experts to guide you through the journey.'
    },
    {
        img: img_01,
        title: 'Corporate',
        text: 'Well trained experts to guide you through the journey.'
    },
  ];

  return (
    <section id="destination-content-section" className={`section destination-content-section  ${isMobileView ? 'mobile-view' : ''}`}>
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