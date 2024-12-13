import React from 'react';
import useImage from '../../hooks/useImage'
import "../../components/CSS/Pages/MainTourCard.css";

const TourCard = React.forwardRef(({ content, className, style, onClick }, ref) => {

  const { image } = useImage(content.img)

  return (
    <div className='tour-outer-div'>
      <div ref={ref} className={`tour-card ${className}`} style={style} onClick={onClick}>
        <div className="tour-overlayer"></div>
        <img className='tour-img' src={image} alt={`${content.title}-image`} loading='lazy' />
        <div className="tour-card-content">
          <h4 className='font-primary'>{content.title}</h4>
          <p style={{ letterSpacing: '0px', fontWeight: '250' }} className='font-secondary'>{content.subTitle}</p>
        </div>
      </div>
    </div>
  );
});

export default TourCard;
