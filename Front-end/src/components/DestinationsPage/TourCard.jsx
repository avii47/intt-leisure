import React from 'react';
import './TourComponent.css';

const TourComponent = ({ imageUrl, price, title, details, startingPrice, onInquiryClick, onCallClick }) => {
  return (
    <div className="tour-component">
      {/* Left Section with Image */}
      <div className="tour-left">
        <img 
          src={imageUrl} 
          alt={title} 
          className="tour-image"
        />
        <div className="tour-price">
          {price}
        </div>
      </div>

      {/* Right Section with Details */}
      <div className="tour-right">
        <h2>{title}</h2>
        <ul className="tour-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <div className="tour-starting-price">
          Starting price <span>{startingPrice}</span>
        </div>
        <div className="tour-buttons">
          <button className="inquiry-button" onClick={onInquiryClick}>Submit Inquiry</button>
          <button className="call-button" onClick={onCallClick}>Call now</button>
        </div>
      </div>
    </div>
  );
};

export default TourComponent;
