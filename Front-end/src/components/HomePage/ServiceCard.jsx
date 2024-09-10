import React from 'react';
import "../../components/CSS/Home/ServiceCard.css";

const ServiceCard = React.forwardRef(({ content, className, style, onClick }, ref) => {
  return (
    <div className='outer-div'>
      <div ref={ref} className={`service-card ${className}`} style={style} onClick={onClick}>
        <div className="overlayer"></div>
        <img className='crd-img' src={content.img} alt={content.title +"img"} loading='lazy' />
        <div className="card-content">
          <h4 className='font-primary' style={{ fontSize: '28px', letterSpacing: '1px' }}>{content.title}</h4>
          <p style={{ letterSpacing: '0px', fontWeight: '250' }} className='font-secondary'>{content.sub}</p>
        </div>
      </div>
    </div>

  );
});

export default ServiceCard;

