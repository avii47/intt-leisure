import React, { useState, useEffect, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/DestinationInnerPage.css';

import img_01 from '../../assets/images/dubai-img1.jpeg';
import img_02 from '../../assets/images/dubai-img2.jpeg';
import img_03 from '../../assets/images/dubai-img3.jpeg';

import img_04 from '../../assets/images/thailand-img1.jpeg';
import img_05 from '../../assets/images/thailand-img2.jpeg';
import img_06 from '../../assets/images/thailand-img3.jpeg';

const TourComponent = lazy(() => import('./TourCard'));

const DestinationInnerContent = ({content}) => {

  const isMobileView = useMobileView();
  const navigate = useNavigate();
  let contentData = null;

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

  const handleInquiryClick = () => {
    navigate('/contact-us');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+1 312-242-1662';
  };

  const dubaiContentData = [
    {
      'tag': 'dubai',
      'img': img_01,
      'title': 'Honeymoon in Dubai',
      'details': [
        "Visa, Hotels, Meals included",
        "Marina Cruise Dinner",
        "Desert Safari",
        "City Tour"
      ],
      'startingPrice': 'LKR 179,999'
    },
    {
      'tag': 'dubai',
      'img': img_02,
      'title': 'Best of Dubai',
      'details': [
        "All exclusive",
        "7 Nights 8 Days in Dubai"
      ],
      'startingPrice': 'LKR 388,888'
    },
    {
      'tag': 'dubai',
      'img': img_03,
      'title': 'Skydiving in Dubai',
      'details': [
        "Visa, Hotels, Meals included",
        "Skydiving Session",
        "Marina Cruise Dinner",
        "Desert Safari",
        "City Tour"
      ],
      'startingPrice': 'LKR 439,999'
    },
  ];

  const thailandContentData = [
    {
      'tag': 'Thailand',
      'img': img_04,
      'title': 'Bangkok Pattaya',
      'details': [
        "3 Star Category Hotel Accommodation on BB basis in Bangkok",
        "Return Airport Transfers in Private Car",
        "Chaophraya River Cruise With International Buffet Pvt Transfers ",
        "Dreamworld Tour With Lunch Pvt Transfers"
      ],
      'startingPrice': 'LKR 235,000'
    },
    {
      'tag': 'Thailand',
      'img': img_05,
      'title': 'Honeymoon Tour',
      'details': [
        "All exclusive package"
      ],
      'startingPrice': 'LKR 288,888'
    },
    {
      'tag': 'Thailand',
      'img': img_06,
      'title': 'Budget Tours to Bankok',
      'details': [
        "3 Nights 4 Days in Bagkok",
        "Include Transports, Hotels and Meals",
        "Minimum of 2 passengers"
      ],
      'startingPrice': 'LKR 75,555'
    },
  ];

  const sriLankaContentData = [
    // {
    //   'tag': 'sl',
    //   'img': img_01,
    //   'title': 'Honeymoon in Dubai',
    //   'details': [
    //     "Visa, Hotels, Meals included",
    //     "Marina Cruise Dinner",
    //     "Desert Safari",
    //     "City Tour"
    //   ],
    //   'startingPrice': 'LKR 179,999'
    // },
    // {
    //   'tag': 'sl',
    //   'img': img_02,
    //   'title': 'Best of Dubai',
    //   'details': [
    //     "All exclusive",
    //     "7 Nights 8 Days in Dubai"
    //   ],
    //   'startingPrice': 'LKR 388,888'
    // },
    // {
    //   'tag': 'sl',
    //   'img': img_03,
    //   'title': 'Skydiving in Dubai',
    //   'details': [
    //     "Visa, Hotels, Meals included",
    //     "Skydiving Session",
    //     "Marina Cruise Dinner",
    //     "Desert Safari",
    //     "City Tour"
    //   ],
    //   'startingPrice': 'LKR 439,999'
    // },
  ];

  switch (content.title) {
    case 'Dubai':
      contentData = dubaiContentData;
      break;
    case 'Thailand':
      contentData = thailandContentData;
      break;
    case'Sri Lanka':
      contentData = sriLankaContentData;
      break;
    default:
      contentData = dubaiContentData;
  }

  return (
    <section id="destination-inner-content-section" className={`section destination-inner-content-section ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="destination-inner-section-content">
        <div id='destionation-inner-cards-container' className="destionation-inner-cards-container d-flex">

          {contentData.map((content, index) => (
            <TourComponent key={index} content={content} onInquiryClick={handleInquiryClick} onCallClick={handleCallClick} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default DestinationInnerContent;