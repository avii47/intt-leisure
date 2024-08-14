import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Home/ServicesSection.css';
import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {

        const [isMobileView, setIsMobileView] = useState(false);
        const serviceCardsRef = useRef([]);
        const [showLeftButton2, setShowLeftButton] = useState(false);
        const [showRightButton2, setShowRightButton] = useState(true);
        const containerRef2 = useRef(null);

        const img4 = 'https://img.freepik.com/free-photo/grunge-gray-concrete-textured-background_53876-145492.jpg?t=st=1722571110~exp=1722574710~hmac=dbe2ce48dbeca59499ad4867b3fd0ab0b1cdf15ea16e35d33162d12e12ef02e3&w=1380'

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
            img: img4,
            title: 'What is the original concept of Mindfulness?',
            sub: 'The research backed technique that elevate a leader into the next level',
          },
          {
            img: img4,
            title: 'How can you practice it in Sri Lanka?',
            sub: 'Sri Lanka, the place where authentic mindfulness practice is preserve over 2500 year',
          },
          {
            img: img4,
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: img4,
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: img4,
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: img4,
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: img4,
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: img4,
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: img4,
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          
        ];

        const scrollContainer = (direction) => {
          if (containerRef2.current) {
              const scrollAmount = containerRef2.current.offsetWidth * 0.89;
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
                <h6 className='font-secondary left-align'>Experience the Experience</h6>
                <hr style={{ width: '13rem' }} /><br></br>
                <h3 className='font-primary left-align'>Choose Your Journey</h3>
                <p className='ont-secondary left-align'>As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us.</p>

                <div className="service-slider-wrapper">
                  {showLeftButton2 && <button className="scroll-button2 left2" onClick={() => scrollContainer('left')}><img className='nav-icon' src={left_arrow}></img></button>}
                  {showRightButton2 && <button className="scroll-button2 right2" onClick={() => scrollContainer('right')}><img className='nav-icon' src={right_arrow}></img></button>}
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

            </div>
        </div>)
    
  }

export default ServicesSection;