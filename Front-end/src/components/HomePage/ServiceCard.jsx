import React from 'react';
import useImage from '../../hooks/useImage'
import "../../components/CSS/Home/ServiceCard.css";

const ServiceCard = React.forwardRef(({ content, className, style, onClick }, ref) => {

  const { loading, error, image } = useImage(content.crdImg)

  return (
    <div className='outer-div'>
      <div ref={ref} className={`service-card ${className}`} style={style} onClick={onClick}>
        <div className="overlayer"></div>
        <img className='crd-img' src={image} alt={content.title +" img"} loading='lazy' />
        <div className="card-content">
          <h4 className='font-primary' style={{ letterSpacing: '1px' }}>{content.title}</h4>
          <p style={{ letterSpacing: '0px', fontWeight: '250' }} className='font-secondary'>{content.sub2}</p>
        </div>
      </div>
    </div>

  );
});

export default ServiceCard;

