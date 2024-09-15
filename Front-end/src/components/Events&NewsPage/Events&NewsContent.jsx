import React, { useEffect, lazy } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import eventstData from "../../data/EventstData";
import newsData from "../../data/NewsData";



const EventCard = lazy(() => import('../Events&NewsPage/EventCard'));
const NewsCard = lazy(() => import('../Events&NewsPage/NewsCard'));

const EventsNewsContent = () => {

  const isMobileView = useMobileView();
  

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





  return (
    <section id="eventsNews-content-section" className={`section eventsNews-content-section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="eventsNews-section-content justify-content-center">
      <h3 className='font-primary' style={{marginBottom:'50px'}}><b>Upcoming Events</b></h3>
        <div className="events-cards-container">
            {eventstData.map((content, index) => (
              <EventCard key={index} content={content} />
            ))}
        </div><br></br>
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
