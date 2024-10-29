import React from 'react';
import "../../components/CSS/Pages/MainTourCard.css";

const TourCard = React.forwardRef(({ content, className, style, onClick }, ref) => {
  return (
    <div className='tour-outer-div'>
      <div ref={ref} className={`tour-card ${className}`} style={style} onClick={onClick}>
        <div className="tour-overlayer"></div>
        <img className='tour-img' src={content.img} alt={`${content.title}-image`} loading='lazy' />
        <div className="tour-card-content">
          <h4 className='font-primary' style={{ fontSize: '28px', letterSpacing: '1px' }}>{content.title}</h4>
          <p style={{ letterSpacing: '0px', fontWeight: '250' }} className='font-secondary'>{content.description}</p>
        </div>
      </div>
    </div>
  );
});

export default TourCard;
