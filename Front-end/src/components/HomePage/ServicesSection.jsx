import React, { useState, useEffect, useRef } from 'react';
import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import ServiceCard from './ServiceCard';
import { useMobileView } from '../../contexts/MobileViewContext';

import img1 from '../../assets/images/confident-businessman-with-colleagues.jpg'
import img2 from '../../assets/images/Student_ Educator.jpeg';
import img3 from '../../assets/images/full-shot-man-working-outdoors.jpg'
import img4 from '../../assets/images/Seeker.jpeg';
import img5 from '../../assets/images/services-img3.jpg';


const ServicesSection = () => {

  const serviceCardsRef = useRef([]);
  const [showLeftButton2, setShowLeftButton] = useState(false);
  const [showRightButton2, setShowRightButton] = useState(true);
  const containerRef2 = useRef(null);
  const isMobileView = useMobileView();

  const img6 = 'https://img.freepik.com/free-photo/beautiful-woman-meditating-nature_23-2148940321.jpg?w=2000&t=st=1724407077~exp=1724407677~hmac=c3719b8470350208385b0db346d0c2b59dfe7a381d6e43407230603a79962902';

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
      img: img1,
      title: 'Mindfulness for Leaders',
      sub: 'Unlock Your Leadership Potential with Mindfulness in Sri Lanka',
    },
    {
      img: img2,
      title: 'Mindfulness for Educators',
      sub: 'Uncover the Luxury of Mindfulness in Sri Lanka for Students and Educators',
    },
    {
      img: img3,
      title: 'Mindfulness for Corporates',
      sub: 'Is your corporate team ready to embark on a transformative journey that combines productivity enhancement with holistic well-being?',
    },
    {
      img: img4,
      title: 'Mindfulness for Seekers',
      sub: 'Are you seeking inner peace, balance, and personal growth?',
    },
    {
      img: img6,
      title: 'Mindfulness for Students',
      sub: 'Get a truly rejuvenating and life-changing experience through practice',
    },
    {
      img: img5,
      title: 'What benefits you will have with mindfulness practice?',
      sub: 'Get a truly rejuvenating and life-changing experience through practice',
    },

  ];

  const scrollContainer = (direction) => {
    if (containerRef2.current) {
      let scrollAmount = 0
      if (isMobileView) {
        scrollAmount = containerRef2.current.offsetWidth * 0.920;
      }
      else {
        scrollAmount = containerRef2.current.offsetWidth * 0.6;
      }
      containerRef2.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      updateButtons();
    }
  };

  const updateButtons = () => {
    if (containerRef2.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef2.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateButtons();
    if (containerRef2.current) {
      containerRef2.current.addEventListener('scroll', updateButtons);
    }
    return () => {
      if (containerRef2.current) {
        containerRef2.current.removeEventListener('scroll', updateButtons);
      }
    };
  }, []);

  return (
    <div id='service-section' className={`section d-flex justify-content-center ${isMobileView ? 'mobile-view' : ''}`}>
      <div className='services-content justify-content-center'>
        <h6 className={`font-secondary left-align`} style={{ fontSize: '15px', fontWeight: '350' }}>Choose Your Journey</h6>
        <hr className='' style={{ width: '13rem' }}></hr><br></br>
        <h3 className='font-primary left-align'>Experience the Experience</h3>
        <p className='font-secondary left-align'>As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us.</p>

        <div className="service-slider-wrapper">
          {!isMobileView && (
            <div className='nav-icons'>
              {showLeftButton2 && <button className="scroll-button2 left2" onClick={() => scrollContainer('left')}><img className='nav-icon' src={left_arrow}></img></button>}
              {showRightButton2 && <button className="scroll-button2 right2" onClick={() => scrollContainer('right')}><img className='nav-icon' src={right_arrow}></img></button>}
            </div>
          )}

          <div className='service-slider d-flex ' ref={containerRef2}>
            {contentData.map((content, index) => (
              <ServiceCard
                className={`service-card card card-item${index}`}
                key={index}
                content={content}
                ref={el => serviceCardsRef.current[index] = el}
                style={{ '--animation-order': index }}
              />
            ))}
          </div>

        </div>
        {isMobileView && (
          <div className='nav-icons-mb'>
            {showLeftButton2 && <button className="scroll-button2 left2" onClick={() => scrollContainer('left')}><img className='nav-icon' src={left_arrow}></img></button>}
            {showRightButton2 && <button className="scroll-button2 right2" onClick={() => scrollContainer('right')}><img className='nav-icon' src={right_arrow}></img></button>}
          </div>
        )}

      </div>
    </div>)

}

export default ServicesSection;