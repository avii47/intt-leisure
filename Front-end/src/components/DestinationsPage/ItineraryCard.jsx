// ItineraryCard.js
import React from 'react';
import { useMobileView } from "../../contexts/MobileViewContext";
import arrowIcon from '../../assets/icons/icons8-right-black-arrow.gif'
import '../CSS/ItineraryCard.css';

const ItineraryCard = ({ title, duration, description, image }) => {
    return (
      <div className="outer-div">
        <div className="itinerary-card">
          <div className="image-overlay">
            <img src={"https://img.freepik.com/free-photo/young-caucasian-barefooted-male-tourist-with-backpack-sitting-rock-surrounded-by-rainforest-admiring-gorgeous-view-with-waterfall_273609-1865.jpg?t=st=1730200840~exp=1730204440~hmac=ff9d48502b37ed303664bbc5568cc04734eccc9e1e719cba75eb4134f378e0ff&w=1380"} alt="Itinerary" className="card-image" />
            <div className="overlay-bg"></div> 
            <div className="overlay-text">
              <div style={{textAlign:'center'}}>
                  <h2 className="title font-primary">{title}</h2><hr className='itinerary-card-hr'/>
                  <p className="duration font-secondary">{duration}</p>
              </div>
            </div>
          </div>
          <div className="description">
            <p className='font-secondary'>{description}</p>
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
  };

export default ItineraryCard;
