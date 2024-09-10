import React, { useState, useEffect, useRef, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';
import "../../components/CSS/Home/Events&NewsSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import img_01 from '../../assets/images/events-img1.jpg';
import img_02 from '../../assets/images/events-img2.jpg';
import img_03 from '../../assets/images/ev5ents-img2.jpg';
import img_04 from '../../assets/images/events-img3.png';

const ContentCard = lazy(() => import('./ContentCard'));

const EventsNewsSection = () => {

  const containerRef3 = useRef(null);
  const cardRef3 = useRef(null);
  const [showLeftButton3, setShowLeftButton] = useState(false);
  const [showRightButton3, setShowRightButton] = useState(true);
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

  const contentData = [
    {
      'img': img_03,
      'sub': 'Wisdom in the times of Crisis'
    },
    {
      'img': img_01,
      'sub': 'Exploring the Impact of Mindfulness on Leadership'
    },
    {
      'img': img_02,
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img_04,
      'sub': 'Wisdom in the times of Crisis'
    }
  ];

  const updateButtons = () => {
    if (containerRef3.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef3.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateButtons();
    if (containerRef3.current) {
      containerRef3.current.addEventListener('scroll', updateButtons);
    }
    return () => {
      if (containerRef3.current) {
        containerRef3.current.removeEventListener('scroll', updateButtons);
      }
    };
  }, []);

  const handleOnClick = (path) => {
    navigate(path);
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
              <img className='nav-icon' src={left_arrow} onClick={previous}></img>
              <img className='nav-icon' src={right_arrow} onClick={next}></img>
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