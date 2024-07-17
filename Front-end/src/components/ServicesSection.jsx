import React, { useState, useEffect, useRef } from 'react';
import './CSS/ServicesSection.css';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);
  const serviceCardsRef = useRef([]);

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
      img: 'https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?t=st=1719801604~exp=1719805204~hmac=901c52a24550ba8e1142ec57d4236bf6941d556a38a6aa1a5c19ba5a49e560dd&w=996',
      title: 'What benefits you will have with mindfulness practice?',
      sub: 'Get a truly rejuvenating and life-changing experience through practice',
    },
    {
      img: 'https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?t=st=1719801604~exp=1719805204~hmac=901c52a24550ba8e1142ec57d4236bf6941d556a38a6aa1a5c19ba5a49e560dd&w=996',
      title: 'What benefits you will have with mindfulness practice?',
      sub: 'Get a truly rejuvenating and life-changing experience through practice',
    },
    {
      img: 'https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?t=st=1719801604~exp=1719805204~hmac=901c52a24550ba8e1142ec57d4236bf6941d556a38a6aa1a5c19ba5a49e560dd&w=996',
      title: 'What benefits you will have with mindfulness practice?',
      sub: 'Get a truly rejuvenating and life-changing experience through practice',
    }
  ];

      return (
        <div id='service-section' className={`section d-flex justify-content-center ${isMobileView ? 'mobile-view' : ''}`}>
            <div className='services-content justify-content-center'>
                <h6 className='font-secondary'>Explore Our Services</h6>
                <hr style={{ width: '10rem', margin: 'auto' }} /><br></br>
                <h3 className='font-primary'>Choose Your Journey</h3>
                <p className='service-pg'>As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us.</p>

                <div className='service-slider d-flex'>
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
        </div>)
    
  }

export default ServicesSection;