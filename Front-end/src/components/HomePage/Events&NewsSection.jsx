import React, { useState, useEffect, useRef, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';
import "../../components/CSS/Home/Events&NewsSection.css";
import Slider from "react-slick";
import contentData from "../../data/Events&NewsSectionData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';

const ContentCard = lazy(() => import('./ContentCard'));

const EventsNewsSection = () => {

  const containerRef3 = useRef(null);
  const cardRef3 = useRef(null);
  const [showLeftButton3, setShowLeftButton3] = useState(false);
  const [showRightButton3, setShowRightButton3] = useState(true);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const navigate = useNavigate();
  let sliderRef = useRef(null);

  const isMobileView = useMobileView();

  useEffect(() => {
    const section = document.getElementById('eventsNews-section');
    const cardSection = document.getElementById('eventsNews-cards');

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

  const handleOnClick = (path) => {
    navigate(path);
  };

  const updateButtonVisibility3 = (currentSlide3) => {
    setShowLeftButton3(currentSlide3 > 0);
    setShowRightButton3(currentSlide3 < contentData.length - 3);
  }; 

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (current, next) => setCurrentSlide3(next),
    afterChange: (current) => updateButtonVisibility3(current),
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 669,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <section id="eventsNews-section" className={`section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="eventsNews-content justify-content-center">

        <div className="col-12 d-flex">
          <div className="col">
            <h3 className='font-primary'>Latest Events & News</h3>
          </div>
          <div className="col-1 nav-icon-col">
            <div className='service-card-nav-icons' style={{ marginTop: '0' }}>
              <img className={`nav-icon ${!showLeftButton3 ? 'disabled' : ''}`} src={left_arrow} onClick={previous}></img>
              <img className={`nav-icon ${!showRightButton3 ? 'disabled' : ''}`} src={right_arrow} onClick={next}></img>
            </div>
          </div>
        </div>
        <div className='eventsNews-wrapper'>
          <div id='eventsNews-cards' className="slider-container" style={{ paddingBottom: '100px', textAlign: 'center' }} >
            <Slider ref={slider => { sliderRef = slider; }} {...settings}>
              {contentData.map((content, index) => (
                <ContentCard key={index} content={content} onClick={() => handleOnClick('/events&news')} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsNewsSection;