import React from 'react';
import '../CSS/ServiceContentCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ServiceContentCard = ({content}) => (
        <div className="service-content-card">
            <div class="service-content-image-zoom-container">
                <img className="service-content-card-img top" src={`${content.img}`}></img>
            </div>
            <div className="service-content-card-body">
                <h5 className="service-content-card-title font-secondary">{content.title}</h5>
                <p className="service-content-card-sub font-secondary">{content.sub}</p>
                <button className='btn btn-dark'>Learn more ></button>
            </div>

        </div>
  );
  
  export default ServiceContentCard;