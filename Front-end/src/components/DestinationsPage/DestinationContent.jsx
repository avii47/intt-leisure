import React, { useState, useEffect, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';

import img_01 from '../../assets/images/destination-Dubai.jpeg';
import img_02 from '../../assets/images/destination-Thailand.jpeg';
import img_03 from '../../assets/images/destination-sriLanka.jpeg';

const TourCard = lazy(() => import('../DestinationsPage/DestinationCard'));

const DestinationsContent = () => {

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

  const handleDestinationCardClick = (id) => {
    navigate(`/destinations/${id}`);
  };

  return (
    <section id="destination-content-section" className={`section destination-content-section ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="destination-section-content">
        <div id='destionation-cards-container' className="destionation-cards-container d-flex">

            <TourCard 
              imageSrc={img_01}
              title="Dubai"
              description="Dubai Tour Packages Honeymoon in Dubai Visa, Hotels, Meals included Marina Cruise Dinner Desert Safari City Tour Starting price LKR 179,999 Submit Inquiry Call now Best of Dubai All exclusive 7 Nights…"
              link="https://example.com/thailand-tour"
              onClick={() => handleDestinationCardClick(1)}
            />

            <TourCard 
              imageSrc={img_02}
              title="Thailand"
              description="Thailand Tour Packages Bangkok Pattaya 3 Star Category Hotel Accommodation on BB basis in Bangkok Return Airport Transfers in Private Car Chaophraya River Cruise With International Buffet…"
              link="https://example.com/thailand-tour"
              onClick={() => handleDestinationCardClick(2)}
            />

            <TourCard 
              imageSrc={img_03}
              title="Sri Lanka"
              description="Sri Lanka, historically known as Ceylon, and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Palk Strait..."
              link="https://example.com/thailand-tour"
              onClick={() => handleDestinationCardClick(3)}
            />
        </div>
      </div>
    </section>
  );
};

export default DestinationsContent;