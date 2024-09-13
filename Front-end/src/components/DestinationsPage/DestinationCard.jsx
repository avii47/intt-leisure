import React from 'react';
import '../CSS/Pages/TourCard.css'; // External CSS

const TourCard = ({ imageSrc, title, description, link, onClick }) => {
    return (
      <div className="card destination-card" onClick={onClick}>
        <div className="destination-card-image-container">
          <img src={imageSrc} alt={title} className="destination-card-image" />
        </div>
        <h3 className="card-title font-primary">{title}</h3>
        <p className="destination-card-description">{description}</p>
        <a href={link} className="card-link">
          <span className="read-more-text">Read more</span>
          <span className="arrow">&rarr;</span>
        </a>
      </div>
    );
  };

export default TourCard;
