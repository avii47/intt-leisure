import React from 'react';
import '../CSS/ServiceContentCard.css';

const ServiceContentCard = React.forwardRef(({ content, onClick, style }, ref) => {
    return(
        <div className="service-content-card" onClick={onClick} style={style} ref={ref}>
            <div class="service-content-image-zoom-container">
                <div className="sc-overlayer"></div>
                <img loading='lazy' className="service-content-card-img top" src={`${content.img}`} alt={`${content.title}-image`}></img>
                <div className='img-text'>
                    <h4 className='sc-title'>{content.title}</h4>
                    <p className='font-secondary sc-sub'>{content.sub}</p>
                </div>
            </div>
            <div className="service-content-card-body">
                <p className="service-content-card-sub font-secondary">{content.text}</p>
                <button className='btn btn-outline-secondary btn-sm explore-service-btn'>{content.label}</button>
            </div>
        </div>
    )
});

export default ServiceContentCard;