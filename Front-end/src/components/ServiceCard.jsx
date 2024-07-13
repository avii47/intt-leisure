import React from 'react';
import './CSS/ServiceCard.css';

const ServiceCard = ({content}) => {
    return (
        <div className="card service-card">
            <div className="overlayer"></div>
            <img className='crd-img' src={`${content.img}`} alt="Meditation" />
        
            <div className="card-content">
                <h3 className='font-primary'>{content.title}</h3>
                <p className='font-secondary'>{content.sub}</p>
            </div>
        </div>
    );
}

export default ServiceCard;
