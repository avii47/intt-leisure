import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import ServiceCard from './ServiceCard';
import { useMobileView } from '../../contexts/MobileViewContext';
import "../../components/CSS/Home/ServicesSection.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/images/homePage-serviceCard-leaders-img.jpg'
import img2 from '../../assets/images/homePage-serviceCards-educators.jpg';
import img3 from '../../assets/images/homePage-serviceCards-coparates.jpg'
import img4 from '../../assets/images/homePage-serviceCard-seekers.jpg';
import img5 from '../../assets/images/homePage-servicesCard-students-img.jpg';

const ServicesSection = () => {

  const serviceCardsRef = useRef([]);
  const navigate = useNavigate();
  const [showLeftButton2, setShowLeftButton2] = useState(false);
  const [showRightButton2, setShowRightButton2] = useState(true);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const containerRef2 = useRef(null);
  let sliderRef = useRef(null);
  const isMobileView2 = useMobileView();

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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

    serviceCardsRef.current.forEach(card => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      serviceCardsRef.current.forEach(card => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [serviceCardsRef]);

  const contentData = [
    {
      id: 1,
      img: img1,
      title: 'Mindfulness for Leaders',
      sub: 'Unlock Your Leadership Potential with Mindfulness in Sri Lanka',
    },
    {
      id: 2,
      img: img2,
      title: 'Mindfulness for Educators',
      sub: 'Uncover the Luxury of Mindfulness in Sri Lanka for Students and Educators',
    },
    {
      id: 3,
      img: img3,
      title: 'Mindfulness for Corporates',
      sub: 'Is your corporate team ready to embark on a transformative journey that combines productivity enhancement with holistic well-being?',
    },
    {
      id: 4,
      img: img4,
      title: 'Mindfulness for Seekers',
      sub: 'Are you seeking inner peace, balance, and personal growth?',
    },
    {
      id: 5,
      img: img5,
      title: 'Mindfulness for Students',
      sub: 'Get a truly rejuvenating and life-changing experience through practice',
    },

  ];

  const updateButtonVisibility2 = (currentSlide2) => {
    setShowLeftButton2(currentSlide2 > 0);
    setShowRightButton2(currentSlide2 < contentData.length - 4);
  };

  const handleServiceCardClick = (id) => {
    navigate(`/services/${id}`);
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
    beforeChange: (current, next) => setCurrentSlide2(next),
    afterChange: (current) => updateButtonVisibility2(current),
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
        breakpoint: 1300,
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
    <div id='service-section' className={`section d-flex justify-content-center ${isMobileView ? 'mobile-view' : ''}`}>
      <div className='services-content justify-content-center'>

        <div className="col-12 d-flex">
          <div className="col">
            <h6 className={`font-secondary left-align`} style={{ fontSize: '15px', fontWeight: '350' }}>Choose Your Journey</h6>
            <hr className='' style={{ width: '11rem' }}></hr><br></br>
            <h3 className='font-primary left-align'>Experience the Experience</h3>
            <p className='font-secondary left-align'>As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us.</p>
          </div>
          <div className="col-1 nav-icon-col">
            <div className='service-card-nav-icons'>
              <img className={`nav-icon ${!showLeftButton2 ? 'disabled' : ''}`} src={left_arrow} onClick={previous}></img>
              <img className={`nav-icon ${!showRightButton2 ? 'disabled' : ''}`} src={right_arrow} onClick={next}></img>
            </div>
          </div>
        </div>

        <div className="service-slider-wrapper">
              <div className="slider-container" style={{paddingBottom:'20px'}} >
                <Slider ref={slider => {sliderRef = slider;}} {...settings}>
                    {contentData.map((content, index) => (
                        <ServiceCard
                          className={`service-card card card-item${index}`}
                          key={index}
                          content={content}
                          ref={el => serviceCardsRef.current[index] = el}
                          style={{ '--animation-order': index }}
                          onClick={() => handleServiceCardClick(content.id)}
                        />
                    ))}
                </Slider> 
              </div>
        </div>

      </div>
    </div>)

}

export default ServicesSection;