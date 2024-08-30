import React, { useState, useEffect } from 'react';

const ContentBlock = ({ image, title, text, imagePosition }) => {

  const [isMobileView, setIsMobileView] = useState(false);

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

  return (

    <div className={`content-block ${imagePosition === 'left' ? 'left' : 'right'}`}>
      {!isMobileView && (
        <>
          <div className={`content-block__image ${imagePosition === 'left' ? 'left' : 'right'}`}>
            <img src={image} alt={title} />
          </div>
          <div className={`content-block__text ${imagePosition === 'left' ? 'left' : 'right'}`}>
            <h6 className='font-secondary' style={{ fontWeight: '350', fontSize: '15px' }}>Explore</h6>
            <hr style={{ width: '3.7rem', marginTop: '-1px' }} />
            <h3 className='font-primary'>{title}</h3>
            <p className='font-secondary'>{text}</p>
            <button className='btn btn-dark'>Learn more ></button>
          </div>
        </>
      )}
      {isMobileView && (
        <>
          <div className="content-block__text" style={{ width: '100%' }}>
            <h6 className='font-secondary' style={{ fontWeight: '350', fontSize: '15px' }}>Explore</h6>
            <hr style={{ width: '3.7rem', marginTop: '-1px' }} />
            <h3 className='font-primary'>{title}</h3>
          </div>
          <div className="content-block__image">
            <img src={image} alt={title} />
          </div>
          <div className="content-block__text" >
            <p className='font-secondary'>{text}</p>
            <button className='btn btn-dark'>Learn more ></button>
          </div>
        </>

      )}

    </div>
  );
};

export default ContentBlock;
