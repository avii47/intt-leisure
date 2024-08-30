import React from 'react';
import '../CSS/ServiceContentCard.css';

const ServiceContentCard = ({ content, onClick }) => (
    <div className="service-content-card" onClick={onClick}>
        <div class="service-content-image-zoom-container">
            <div className="sc-overlayer"></div>
            <img loading='lazy' className="service-content-card-img top" src={`${content.img}`} alt='service image'></img>
            <div className='img-text'>
                <h4 className='sc-title'>{content.title}</h4>
                <p className='font-secondary sc-sub'>{content.sub}</p>
            </div>
        </div>
        <div className="service-content-card-body">
            <p className="service-content-card-sub font-secondary">{content.text}</p>
            <button className='btn btn-outline-secondary btn-sm' style={{ border: 'none' }}>View Packages ></button>
        </div>
    </div>
);

export default ServiceContentCard;