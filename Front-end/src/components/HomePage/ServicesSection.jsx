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
            img: 'https://img.freepik.com/free-photo/close-up-kid-meditating-mat_23-2149101612.jpg?t=st=1719801378~exp=1719804978~hmac=3e4d591b0fae80b0628488c60a0e3917a69ac930587c97450e94aa5d431cc24d&w=996',
            title: 'What is the original concept of Mindfulness?',
            sub: 'The research backed technique that elevate a leader into the next level',
          },
          {
            img: 'https://www.rideekanda.com/uploads/2022/1/rideekanda_forest_monastery_sri_lanka_50.jpg',
            title: 'How can you practice it in Sri Lanka?',
            sub: 'Sri Lanka, the place where authentic mindfulness practice is preserve over 2500 year',
          },
          {
            img: 'https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?t=st=1719801604~exp=1719805204~hmac=901c52a24550ba8e1142ec57d4236bf6941d556a38a6aa1a5c19ba5a49e560dd&w=996',
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: 'https://img.freepik.com/free-photo/full-shot-woman-meditating-indoors_23-2149832724.jpg?t=st=1721301710~exp=1721305310~hmac=6792a4728205df3a2c4753e4e86bfb99e4aec1afdede37e512a48eedd52b9b7a&w=1380',
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: 'https://img.freepik.com/free-photo/group-young-sporty-people-sitting-sukhasana-exercise_1163-4943.jpg?t=st=1721301844~exp=1721305444~hmac=75d370cc88a46e6e580e002d4f961b37e3a267b239f4ed4832f1a3fe97c70337&w=1380',
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: 'https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?t=st=1719801604~exp=1719805204~hmac=901c52a24550ba8e1142ec57d4236bf6941d556a38a6aa1a5c19ba5a49e560dd&w=996',
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: 'https://img.freepik.com/free-photo/full-shot-woman-meditating-indoors_23-2149832724.jpg?t=st=1721301710~exp=1721305310~hmac=6792a4728205df3a2c4753e4e86bfb99e4aec1afdede37e512a48eedd52b9b7a&w=1380',
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: 'https://img.freepik.com/free-photo/group-young-sporty-people-sitting-sukhasana-exercise_1163-4943.jpg?t=st=1721301844~exp=1721305444~hmac=75d370cc88a46e6e580e002d4f961b37e3a267b239f4ed4832f1a3fe97c70337&w=1380',
            title: 'What benefits you will have with mindfulness practice?',
            sub: 'Get a truly rejuvenating and life-changing experience through practice',
          },
          {
            img: 'https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?t=st=1719801604~exp=1719805204~hmac=901c52a24550ba8e1142ec57d4236bf6941d556a38a6aa1a5c19ba5a49e560dd&w=996',
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
                <h6 className='font-secondary left-align'>Explore Our Services</h6>
                <hr style={{ width: '10rem' }} /><br></br>
                <h3 className='font-primary left-align'>Choose Your Journey</h3>
                <p className='ont-secondary left-align' style={{fontSize:'18px'}}>As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us.</p>

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