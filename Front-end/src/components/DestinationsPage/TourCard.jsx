import React from 'react';
import '../CSS/Pages/InnerTourCard.css';

const TourComponent = ({ content, onInquiryClick, onCallClick  }) => {
  return (
    <div className="tour-component col-12">
      <div className="tour-left col-lg-3">
        <img 
          src={content.img} 
          alt={content.title} 
          className="tour-image"
        />
      </div>

      <div className="tour-middle col-lg">
        <h1>{content.title}</h1>
        <ul className="tour-details">
          {content.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      <div className="col-lg-3 tour-right">
          <div className="tour-starting-price">
            Starting price <br /> <span>{content.startingPrice}</span>
            <hr />
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
