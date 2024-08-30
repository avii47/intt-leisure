import React, { useState, useEffect, lazy } from 'react';

const ContentCard = lazy(() => import('./ContentCard'));

const DiscoverSection = () => {
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
  ];

  return (
    <section id="discover-section" className={`section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="discover-content justify-content-center">
        <h6>Discover</h6>
        <hr style={{ width: '4.2rem', margin: 'auto' }} /><br></br>
        <h3>What is Mindfulness?</h3>
        <p>The original concept of Mindfulness backed by research</p>

        <div className="d-flex discover-cards">
          {contentData.map((content, index) => (
            <ContentCard key={index} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;