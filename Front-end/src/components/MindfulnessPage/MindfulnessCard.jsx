import React, { useState, useEffect, useRef } from 'react';

const ContentBlock = ({ image, title, text, imagePosition, onClick }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const contentElement = contentRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentElement.classList.add(imagePosition === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right');
        }
      },
      { threshold: 0.1 } 
    );

    if (contentElement) {
      observer.observe(contentElement);
    }

    return () => {
      if (contentElement) {
        observer.unobserve(contentElement);
      }
    };
  }, [imagePosition]);


  return (
    <div ref={contentRef} className={`content-block ${imagePosition === 'left' ? 'left' : 'right'}`}>
      {!isMobileView && (
        <>
          <div className={`content-block__image ${imagePosition === 'left' ? 'left' : 'right'}`}>
            <img src={image} alt={`${title}-image`} style={{ borderRadius: '10px' }} loading='lazy'/>
          </div>
          <div className={`content-block__text ${imagePosition === 'left' ? 'left' : 'right'}`}>
            <h6 className="font-secondary" style={{ fontWeight: '350' }}>Explore</h6>
            <hr style={{ width: '3.7rem', marginTop: '-1px' }} />
            <h3 className="font-primary">{title}</h3>
            <p className="font-secondary">{text}</p>
            <button className="btn btn-dark" onClick={onClick}>Explore more</button>
          </div>
        </>
      )}
      {isMobileView && (
        <>
          <div className="content-block__text" style={{ width: '100%' }}>
            <h6 className="font-secondary" style={{ fontWeight: '350' }}>Explore</h6>
            <hr style={{ width: '3.7rem', marginTop: '-1px' }} />
            <h3 className="font-primary">{title}</h3>
          </div>
          <div className="content-block__image">
            <img src={image} alt={`${title}-image`} style={{ borderRadius: '10px' }} loading='lazy' />
          </div>
          <div className="content-block__text">
            <p className="font-secondary">{text}</p>
            <button className="btn btn-dark" onClick={onClick}>Explore more</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContentBlock;
