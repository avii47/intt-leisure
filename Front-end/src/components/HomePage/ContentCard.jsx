import React from "react";
import ShareButtons from './EventsShareBtn';
import "../../components/CSS/ContentCard.css";

const ContentCard = ({ content, onClick }) => (
  <div className="outer-div">
    <div className={`content-card col`}>
      <div className="image-zoom-container">
        <div className="image-overlay-container">
          <img className="card-img top" src={`${content.img}`} alt={content.title} />
          <div className="overlay">
            <button className="btn btn-outline-light read-btn" onClick={onClick}>Read</button>
          </div>
        </div>
        <div className="share-buttons">
          <ShareButtons url={content.blogUrl} title={content.title} thumbnail={content.blogThumbnail} />
        </div>
      </div>
      <div className="content-card-body">
        <h5 className="card-title font-secondary" style={{ fontSize: "20px" }}>
          {content.title}
        </h5>
        <div className="d-flex" style={{ overflowX: 'hidden' }}> 
          <p className="Font-secondary event-date-place">
            <i className="fa-solid fa-calendar-days" style={{ marginRight:'5px' }}></i>{content.date}
          </p>
          <p className="Font-secondary event-date-place" style={{ marginLeft: '20px' }}>
            <i className="fa-solid fa-location-dot" style={{ marginRight:'5px' }}></i>{content.venue}
          </p>
        </div>
        <hr style={{marginTop:'-0.2rem'}}/>
        <p className="card-sub font-secondary">{content.sub}</p>
      </div>
    </div>
  </div>
);

export default ContentCard;
