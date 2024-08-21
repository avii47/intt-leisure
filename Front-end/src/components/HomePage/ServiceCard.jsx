import React from 'react';
import '../CSS/Home/ServiceCard.css';

const ServiceCard = React.forwardRef(({ content, className, style }, ref) => {
  return (
    <div ref={ref} className={`service-card ${className}`} style={style}>
      <div className="overlayer"></div>
      <img className='crd-img' src={content.img} alt="serviceCard-img" loading='lazy'/>
      <div className="card-content">
        <h4 className='font-primary' style={{fontSize:'28px', letterSpacing:'1px'}}>{content.title}</h4>
        <p style={{ letterSpacing:'0px', fontWeight:'250' }} className='font-secondary'>{content.sub}</p>
      </div>
    </div>
  );
});

export default ServiceCard;

