import React, { useState, useEffect, useRef } from 'react';
import '../CSS/WhyChooseUsSection.css';
import authentic_practices from '../../assets/icons/Authentic Practices.png';
import experties from '../../assets/icons/expertise.png';
import unique_excursions from '../../assets/icons/Unique Excursions.png';
import travel from '../../assets/icons/traveling-icon.png';
import forbes from '../../assets/icons/forbes-icon.png';
import service from '../../assets/icons/service-icon.png';
import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import IconCard from '../HomePage/IconCard';

const WhyChooseUsSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const containerRef = useRef(null);
  const iconCardsRef = useRef([]);

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

  const contentData = [
    {
      img: unique_excursions,
      title: 'Unique Excursions',
      sub: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.',
    },
    {
      img: authentic_practices,
      title: 'Authentic Practices',
      sub: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.',
    },
    {
      img: experties,
      title: 'Expertised Team',
      sub: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.',
    },
    {
      img: forbes,
      title: 'Forbes Expert',
      sub: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.',
    },
    {
      img: travel,
      title: 'Traveling Expert',
      sub: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.',
    },
    {
      img: service,
      title: '24/7 Service',
      sub: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.',
    },
  ];

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth / 2;
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
        <hr style={{ width: '200px', margin: 'auto' }}></hr>
        <br></br>
        <p className='font-secondary' style={{ fontSize: '16px' }}>A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership. Throughout the workshop, participants had the opportunity to listen to informative speeches delivered by Dr. GB Hewawa, sam and Jim.</p>
        <div className="icon-container-wrapper" >
          {showLeftButton && <button className="scroll-button left" onClick={() => scrollContainer('left')}><img className='nav-icon' src={left_arrow}></img></button>}
          <div className='icon-container d-flex' ref={containerRef}>
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
          {showRightButton && <button className="scroll-button right" onClick={() => scrollContainer('right')}><img className='nav-icon' src={right_arrow}></img></button>}
        </div>
      </div>
    </section>
  )
};

export default WhyChooseUsSection;