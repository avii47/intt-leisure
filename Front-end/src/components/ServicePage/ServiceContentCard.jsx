import React from 'react';
import '../CSS/ServiceContentCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ServiceContentCard = ({content}) => (
        <div className="service-content-card">
            <div class="service-content-image-zoom-container">
            <div className="sc-overlayer"></div>
                <img className="service-content-card-img top" src={`${content.img}`}></img>
                <div className='img-text'>
                    <h4 className='font-primary sc-title'>{content.title}</h4>
                    <p className='font-secondary sc-sub'>{content.sub}</p>
                </div>
            </div>
            <div className="service-content-card-body">
                <p className="service-content-card-sub font-secondary">{content.text}</p>
                <button className='btn btn-outline-secondary'>View Packages ></button>
            </div>
        </div>
  );
  
  export default ServiceContentCard;