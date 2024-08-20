import React, { useState, useEffect } from 'react';
import '../CSS/Pages/Events&NewsPage.css';
import EventCard from '../Events&NewsPage/EventCard';
import { useMobileView } from '../../contexts/MobileViewContext';
import NewsCard from '../Events&NewsPage/NewsCard';
import img_01 from '../../assets/images/events-img1.png';
import img_02 from '../../assets/images/events-img2.png';
import img_03 from '../../assets/images/events-img3.png';
import img_04 from '../../assets/images/news-img.png';
import img_05 from '../../assets/images/img24.png';

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

  const eventstData = [
    {
      img: img_05,
      imgTitle: 'Mindfulness Based Leadership',
      imgSub: 'Well trained experts to guide you through the journey.',
      text: 'Dr. GB Hewawasam presented at the 24th ILA leadership conference in Washington DC on the topic of Introspective Leadership and how mindfulness with clear comprehension from early teachings of buddha cultivate wisdom. His presentation centered around the timely and relevant theme of “Wisdom in the Times of Crisis”. During his talk, Dr. Hewawasam explored the concept of Introspective Leadership, emphasizing the crucial role that mindfulness, coupled with clear comprehension, plays in cultivating wisdom. Drawing inspiration from the early teachings of Buddha, he highlighted how the practice of mindfulness can be a powerful tool for leaders facing challenging and uncertain situations.'
    },
    {
      img: img_03,
      imgTitle: 'Mindfulness Based Leadership',
      imgSub: 'Well trained experts to guide you through the journey.',
      text: 'Dr. GB Hewawasam presented at the 24th ILA leadership conference in Washington DC on the topic of Introspective Leadership and how mindfulness with clear comprehension from early teachings of buddha cultivate wisdom. His presentation centered around the timely and relevant theme of “Wisdom in the Times of Crisis”. During his talk, Dr. Hewawasam explored the concept of Introspective Leadership, emphasizing the crucial role that mindfulness, coupled with clear comprehension, plays in cultivating wisdom. Drawing inspiration from the early teachings of Buddha, he highlighted how the practice of mindfulness can be a powerful tool for leaders facing challenging and uncertain situations.'
    },
    {
      img: img_01,
      imgTitle: 'Exploring the Impact of Mindfulness in Leadership',
      imgSub: 'Well trained experts to guide you through the journey.',
      text: 'A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership. Throughout the workshop, participants had the opportunity to listen to informative speeches delivered by Dr. GB Hewawa, sam and Jim Ludema. Following the speeches, participants actively engaged in interactive Q&A sessions where they sought clarification, shared their perspectives, and explored how these concepts could be directly applied within the university’s specific context. While the workshop format primarily centered around speeches and Q&A sessions led by these distinguished experts, it undeniably provided a valuable platform for knowledge sharing and robust discussion. The active participation of the attendees through thoughtful questions and in-depth discussions ensured that they gained a deeper understanding of the topics and could contemplate their practical application within the unique environment of the University of Moratuwa.'
    },
    {
      img: img_02,
      imgTitle: 'Wisdom in Times of Crisis',
      imgSub: 'Well trained experts to guide you through the journey.',
      text: 'A workshop titled “How Mindfulness Affects Leadership” was conducted at Mihintale. The workshop included the participation of three Buddhist monks, namely Ven. Seelananada, Thapowanaye Saddhajiwa, and Ven. Sudassana, along with three global leaders: Dr. Jim Ludema from the Den of Business School at Calvin University (USA), Dr. Beverlee Ludema (a clinical psychologist), and Dr. GB Hewasam, the founder and CEO of Finefinish Engineering and INT Terminal travel group. The workshop was held at Kaludiyapokuna on June 10th and primarily focused on exploring the impact of mindfulness on leadership. It provided a valuable opportunity to delve deeper into the influence of mindfulness on leadership.  '
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
