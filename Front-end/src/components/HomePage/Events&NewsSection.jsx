import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Events&NewsSection.css';
import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import ContentCard from './ContentCard';

const EventsNewsSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);
  const containerRef3 = useRef(null);
  const cardRef3 = useRef(null);
  const [showLeftButton3, setShowLeftButton] = useState(false);
  const [showRightButton3, setShowRightButton] = useState(true);

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
      'img': 'https://img.freepik.com/free-photo/group-people-taking-interview-outdoors_23-2149032384.jpg?t=st=1721627077~exp=1721630677~hmac=81c0cea7d9007bdd633ff6b4ec04b2c6f8cda8b90593f1be1d53b9dd275ac4f3&w=1380',
      'sub': 'Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka'
    },
    {
      'img': 'https://img.freepik.com/free-photo/journalist-taking-interview-from-man_23-2149029312.jpg?t=st=1721627121~exp=1721630721~hmac=a39138b4cf82ef551470059e273d1a8d9cc94630e2f49a25451899e129863877&w=1380',
      'sub': 'Best places to have the environment to practice mindfulness with ease.'
    },
    {
      'img': 'https://img.freepik.com/free-photo/business-man-using-his-mobile-phone_23-2148018587.jpg?t=st=1721627159~exp=1721630759~hmac=b5b52a4d91667f6f328e4760d7c0de37e3315072eb7da186174dcb03c923d74f&w=1380',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': 'https://img.freepik.com/free-photo/person-conducting-interview_23-2149037957.jpg?t=st=1721627256~exp=1721630856~hmac=109cd473e16668c6a571f2b73c9bcb0c33ecdeaccf2620f26bdcf3e840061326&w=1380',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': 'https://img.freepik.com/free-photo/people-hangout-together-coffee-shop_53876-13962.jpg?t=st=1721627360~exp=1721630960~hmac=7f080f4687cda0907481e7aade4aa13ef289c02e5794ad3e8092f58ab9e294f8&w=1380',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': 'https://img.freepik.com/free-photo/tv-game-show-with-two-participants-answering-questions-solving-puzzles-host-smiling-women-participate-television-quiz_1157-47922.jpg?t=st=1721627446~exp=1721631046~hmac=3b5aa02a808f16fd34a3aae33b2e746ca62f20cdc39bf9d5f303855b9ae72396&w=1380',
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': 'https://img.freepik.com/free-photo/people-hangout-together-coffee-shop_53876-13962.jpg?t=st=1721627360~exp=1721630960~hmac=7f080f4687cda0907481e7aade4aa13ef289c02e5794ad3e8092f58ab9e294f8&w=1380',
      'sub': 'Well trained experts to guide you through the journey.'
    }
    
  ];

  const scrollContainer = (direction) => {
    if (containerRef3.current) {
        const scrollAmount = containerRef3.current.offsetWidth * (0.9);
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

  return (
    <section id="eventsNews-section" className={`section justify-content-left d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="eventsNews-content justify-content-left">
      <h3 className='font-primary'>Latest Events & News</h3>
        <div className='eventsNews-wrapper'>
          <div className='nav-icons d-flex'>
            {showLeftButton3 && <button className="scroll-button3 left3" onClick={() => scrollContainer('left')}><img className='nav-icon' src={left_arrow}></img></button>}
            {showRightButton3 && <button className="scroll-button3 right3" onClick={() => scrollContainer('right')}><img className='nav-icon' src={right_arrow}></img></button>}
          </div>

          <div id='eventsNews-cards' className="d-flex eventsNews-cards" ref={containerRef3}>
            {contentData.map((content, index) => (
              <ContentCard key={index} content={content} ref={cardRef3}/>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventsNewsSection;