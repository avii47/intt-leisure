// ItineraryCard.js
import React from 'react';
import { useMobileView } from "../../contexts/MobileViewContext";
import arrowIcon from '../../assets/icons/icons8-right-black-arrow.gif'
import '../CSS/ItineraryCard.css';

const ItineraryCard = React.forwardRef(({ content, style, onClick }, ref) => {

  const isMobileView = useMobileView();

    return (
      <div className="outer-div">
        <div className="itinerary-card" ref={ref} style={style} onClick={onClick}>
          <div className="image-overlay">
            <img src={content.img} alt="Itinerary-image" className="itinerary-card-image" />
            <div className="overlay-bg"></div> 
            <div className="overlay-text">
              <div style={{textAlign:'center'}}>
                  <h2 className="title font-primary">{content.title}</h2><hr className='itinerary-card-hr'/>
                  <p className="duration font-secondary">{content.subTitle}</p>
              </div>
            </div>
          </div>
          <div className="description">
            <p className='font-secondary'>{content.cardTxt}</p>
            <p style={{display:'flex'}}>
              <a href="#" className="read-more font-secondary">Read More</a>
              <span className="icard-arrow">
                <img src={arrowIcon} height={25} alt="arrow-icon" />
              </span>
            </p>

          </div>
        </div>
      </div>

    );
  });

export default ItineraryCard;
