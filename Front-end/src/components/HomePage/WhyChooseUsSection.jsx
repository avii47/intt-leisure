import React, { useState, useEffect, useRef } from 'react';
import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import IconCard from '../HomePage/IconCard';
import { useMobileView } from '../../contexts/MobileViewContext';
import contentData from '../../data/WhyChooseUsSectionData';
import "../../components/CSS/Home/WhyChooseUsSection.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const WhyChooseUsSection = () => {

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const iconCardsRef = useRef([]);
  let sliderRef = useRef(null);

  const isMobileView = useMobileView();



  const updateButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateButtons();
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', updateButtons);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', updateButtons);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    iconCardsRef.current.forEach(card => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      iconCardsRef.current.forEach(card => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [iconCardsRef]);

  const updateButtonVisibility = (currentSlide) => {
    setShowLeftButton(currentSlide > 0);
    setShowRightButton(currentSlide < contentData.length - 4);
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
    slidesToShow: 4,
    slidesToScroll: 4,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => updateButtonVisibility(current),
    responsive: [
      {
        breakpoint: 1024,
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
    <section id="why-chooseus-Section" className={`section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="why-chooseus-content justify-content-center">
        <div className="col-12 d-flex">
          <div className="col why-cu-text-col">
            <h3 className='font-primary'>What Makes Us Unique?</h3>
            <hr style={{ width: '400px', marginTop: '-1px' }}></hr>
            <br></br>
            <p className='font-secondary'>Experience authentic mindfulness according to Buddha’s teachings, designed by Forbes-certified coach Dr. Gamini Hewawasam. Rooted in Sri Lankan heritage and backed by research, our programs guide you through ancient practices in carefully chosen locations, ensuring a seamless, expert-managed journey.</p>
          </div>
          <div className="col-1 nav-icon-col">
            <div className='service-card-nav-icons'>
              <img className={`nav-icon ${!showLeftButton ? 'disabled' : ''}`} src={left_arrow} onClick={previous}></img>
              <img className={`nav-icon ${!showRightButton ? 'disabled' : ''}`} src={right_arrow} onClick={next}></img>
            </div>
          </div>
        </div>

        <div className="icon-container-wrapper">
          <div className="slider-container" style={{ paddingBottom: '20px', textAlign: 'center' }} >
            <Slider ref={slider => { sliderRef = slider; }} {...settings}>
              {contentData.map((content, index) => (
                <IconCard
                  className={`icon-card`}
                  key={index}
                  content={content}
                  ref={el => iconCardsRef.current[index] = el}
                  style={{ '--animation-order': index }}
                />
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </section>
  )
};

export default WhyChooseUsSection;