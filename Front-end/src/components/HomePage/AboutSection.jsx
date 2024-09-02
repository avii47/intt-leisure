import React, { useState, useEffect, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import img_01 from '../../assets/images/Rectangle 25.png';
import img_02 from '../../assets/images/Rectangle 28.png';
import img_03 from '../../assets/images/img3.jpg';

const ContentCard = lazy(() => import('./ContentCard'));

const AboutSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);

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
    const section = document.getElementById('about-section');
    const heading = document.getElementById('about-heading');
    const cardSection = document.getElementById('about-cards');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add('animate-heading');
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
      'img': img_01,
      'title': 'Mindful Tours',
      'sub': 'Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka'
    },
    {
      'img': img_03,
      'title': 'Excursions',
      'sub': 'Best places to have the environment to practice mindfulness with ease.'
    },
    {
      'img': img_02,
      'title': 'Our Expertise',
      'sub': 'Well trained experts to guide you through the journey.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Mindfulness Tours and Retreats</title>
        <meta name="description" content="Rediscover yourself with Mindfulness Tours and Retreats. Explore mindfulness practices with panoramic views of the Indian Ocean, guided by experts." />
        <link rel="canonical" href="https://new.inttleisure.com" />
      </Helmet>
      
      <section id="about-section" className={`section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
        <div className="about-content justify-content-center">
          <div id='about-heading' className='about-heading'>
            <h3 className='font-primary'>Rediscover yourself with Mindfulness Tours and Retreats</h3>
            <p className='font-secondary' style={{ fontSize: '16px' }}>Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka, an all-inclusive luxury private resort, <br></br> welcomes exclusively your family and friends alone to this private beachfront estate on the island’s fabled south coast.</p>
          </div>
          <div id='about-cards' className="d-flex about-cards">
            {contentData.map((content, index) => (
              <ContentCard key={index} content={content} />
            ))}
          </div>
          <Button variant="outline-dark">Learn more ></Button>
        </div>
      </section>
    </>
  );
};

export default AboutSection;