import React, { useState, useEffect, useRef, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import img_01 from '../../assets/images/events-img1.png';
import img_02 from '../../assets/images/events-img2.png';
import img_05 from '../../assets/images/img24.png';

const ContentCard = lazy(() => import('./ContentCard'));

const EventsNewsSection = () => {

  const img4 = 'https://img.freepik.com/free-photo/grunge-gray-concrete-textured-background_53876-145492.jpg?t=st=1722571110~exp=1722574710~hmac=dbe2ce48dbeca59499ad4867b3fd0ab0b1cdf15ea16e35d33162d12e12ef02e3&w=1380'

  const containerRef3 = useRef(null);
  const cardRef3 = useRef(null);
  const [showLeftButton3, setShowLeftButton] = useState(false);
  const [showRightButton3, setShowRightButton] = useState(true);
  const navigate = useNavigate(); 

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      'img': img_05,
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
      'img': img4,
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img4,
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img4,
      'sub': 'Well trained experts to guide you through the journey.'
    }
    
  ];

  const scrollContainer = (direction) => {
    if (containerRef3.current) {
      let scrollAmount = 0
      if(isMobileView){
        scrollAmount = containerRef3.current.offsetWidth * 0.93;
      }
      else{
        scrollAmount = containerRef3.current.offsetWidth * 0.6;
      }
        containerRef3.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
        updateButtons();
    }
};

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick} >
      <img className='nav-icon' src={right_arrow}></img>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img className='nav-icon' src={left_arrow} style={style}></img>
    </div>
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

  return (
    <section id="eventsNews-section" className={`section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="eventsNews-content justify-content-center">
      <h3 className='font-primary'>Latest Events & News</h3>
        <div className='eventsNews-wrapper'>
          {!isMobileView && (
            <>
              <div className='nav-icons'>
                {showLeftButton3 && <button className="scroll-button3" onClick={() => scrollContainer('left')}><img className='nav-icon' src={left_arrow}></img></button>}
                {showRightButton3 && <button className="scroll-button3" onClick={() => scrollContainer('right')}><img className='nav-icon' src={right_arrow}></img></button>}
              </div>
              <div id='eventsNews-cards' className="d-flex eventsNews-cards" ref={containerRef3} onClick={() => handleOnClick('/events&news')}>
                {contentData.map((content, index) => (
                  <ContentCard key={index} content={content} ref={cardRef3}/>
                ))}
              </div>
            </>
          )}
        </div>
        
        {isMobileView && (
            <>
              <div className="slider-container" style={{paddingBottom:'100px'}} >
                <Slider {...settings} >
                    {contentData.map((content, index) => (
                        <ContentCard key={index} content={content} onClick={() => handleOnClick('/events&news')}/>
                    ))}
                </Slider> 
              </div>
            </>
        )}

      </div>
    </section>
  );
};

export default EventsNewsSection;