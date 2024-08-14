import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Home/WhyChooseUsSection.css';
import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import IconCard from '../HomePage/IconCard';

import authentic_practice_icon from '../../assets/icons/Icons_WCU_Authentic Practice.png';
import forbes_certified_coach_icon from '../../assets/icons/Icons_WCU_Forbes Cerified Coach.png'
import eyes_of_locals_icon from '../../assets/icons/Icons_WCU_Eyes of Locals.png'
import backed_by_research_icon from '../../assets/icons/Icons_WCU_Backed By Research-06.png'
import ancient_root_icon from '../../assets/icons/Icons_WCU_Ancient Roots.png';
import travel_wisdom_icon from '../../assets/icons/Icons_WCU_Travel Wisdom.png';

const WhyChooseUsSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const containerRef = useRef(null);
  const iconCardsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contentData = [
    {
      img: authentic_practice_icon,
      title: 'Authentic practice (Results)',
      sub: 'Our mindfulness techniques follow Buddha’s original teachings, offering a distinct approach from Western ideologies.',
    },
    {
      img: forbes_certified_coach_icon,
      title: 'Forbes-Certified Coach',
      sub: 'All mindfulness programs are designed by Dr. Gamini Hewawasam, a Forbes-certified coach specializing in mindfulness in leadership.',
    },
    {
      img: eyes_of_locals_icon,
      title: 'Eyes of locals',
      sub: 'Discover Sri Lanka through the eyes of locals. As natives, we offer an authentic journey deeply rooted in our heritage and heartfelt connection to the land.',
    },
    {
      img: backed_by_research_icon,
      title: 'Backed by Research',
      sub: 'Our approach to mindfulness is rooted in extensive research, and we are dedicated to sharing its profound benefits with you.',
    },
    {
      img: ancient_root_icon,
      title: 'Ancient Roots (Locations)',
      sub: 'We have carefully chosen the locations for you, where these profound mindful practices have thrived.',
    },
    {
      img: travel_wisdom_icon,
      title: 'Travel Wisdom',
      sub: 'With our team of travel experts, your mindfulness vacation will be managed with the highest level of expertise and care',
    },
  ];

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.75;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      updateButtons();
    }
  };

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
  

  return (
    <section id="why-chooseus-Section" className={`section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="why-chooseus-content justify-content-center">
        <h3 className='font-primary'>Why Choose Us?</h3>
        <hr style={{ width: '200px' }}></hr>
        <br></br>
        <p className='font-secondary'>A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership.</p>
        <div className="icon-container-wrapper">
          <div className='nav-icons'>
            {showLeftButton && <button className="scroll-button left" onClick={() => scrollContainer('left')}><img className='nav-icon' src={left_arrow}></img></button>}
            {showRightButton && <button className="scroll-button right" onClick={() => scrollContainer('right')}><img className='nav-icon' src={right_arrow}></img></button>}
          </div>
          <div className='icon-container d-flex ' ref={containerRef}>
            {contentData.map((content, index) => (
              <IconCard
                className={`icon-card`}
                key={index}
                content={content}
                ref={el => iconCardsRef.current[index] = el}
                style={{ '--animation-order': index }}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
};

export default WhyChooseUsSection;