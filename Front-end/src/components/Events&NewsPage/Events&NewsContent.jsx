import React, { useState, useEffect } from 'react';
import '../CSS/Pages/Events&NewsPage.css';
import EventCard from '../Events&NewsPage/EventCard';
import NewsCard from '../Events&NewsPage/NewsCard';
import img_01 from '../../assets/images/events-img1.png';
import img_02 from '../../assets/images/events-img2.png';
import img_03 from '../../assets/images/events-img3.png';
import img_04 from '../../assets/images/news-img.png';

const EventsNewsContent = () => {

  const [isMobileView, setIsMobileView] = useState(false);

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
    const section = document.getElementById('rw1');
    const textSection = document.getElementById('text1');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add('animate-text');
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

  useEffect(() => {
    const section = document.getElementById('rw2');
    const textSection = document.getElementById('text2');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add('animate-text');
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

  useEffect(() => {
    const section = document.getElementById('rw3');
    const textSection = document.getElementById('text3');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add('animate-text');
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

  const eventstData = [
    {
      img: img_01,
      imgTitle: 'Mindfulness Based Leadership',
      imgSub: 'Well trained experts to guide you through the journey.',
      text: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership. Throughout the workshop, participants had the opportunity to listen to informative speeches delivered by Dr. GB Hewawa, sam and Jim '
    },
    {
      img: img_02,
      imgTitle: 'Exploring the Impact of Mindfulness in Leadership',
      imgSub: 'Well trained experts to guide you through the journey.',
      text: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership. Throughout the workshop, participants had the opportunity to listen to informative speeches delivered by Dr. GB Hewawa, sam and Jim '
    },
    {
      img: img_03,
      imgTitle: 'Wisdom in Times of Crisis',
      imgSub: 'Well trained experts to guide you through the journey.',
      text: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership. Throughout the workshop, participants had the opportunity to listen to informative speeches delivered by Dr. GB Hewawa, sam and Jim '
    },
  ];

  const newsData = [
    {
      img: img_04,
      title: 'Our Experts',
      sub: 'Well trained experts to guide you through the journey.',
    },
    {
      img: img_04,
      title: 'Our Experts',
      sub: 'Well trained experts to guide you through the journey.',
    },
    {
      img: img_04,
      title: 'Our Experts',
      sub: 'Well trained experts to guide you through the journey.',
    },
  ];

  return (
    <section id="eventsNews-content-section" className={`section eventsNews-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="eventsNews-section-content">
      <h3 className='font-primary' style={{marginBottom:'50px'}}><b>Upcoming Events</b></h3>
        <div className="events-cards-container">
            {eventstData.map((content, index) => (
              <EventCard key={index} content={content} />
            ))}
        </div>
        <h3 className='font-primary' style={{marginBottom:'50px'}}><b>Latest Events & News</b></h3>
        <div className="news-cards-container d-flex">
            {newsData.map((content, index) => (
              <NewsCard key={index} content={content} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default EventsNewsContent;
