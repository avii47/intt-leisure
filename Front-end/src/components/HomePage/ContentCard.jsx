import React from "react";
import "../../components/CSS/ContentCard.css";

const ContentCard = ({ content, onClick }) => (
  <div className="outer-div">
    <div className={`content-card col`} onClick={onClick}>
      <div class="image-zoom-container">
        <img className="card-img top" src={`${content.img}`}></img>
      </div>
      <div className="content-card-body">
        <h5 className="card-title font-secondary" style={{ fontSize: "20px" }}>
          {content.title}
        </h5>
        <div className="d-flex" style={{ overflowX:'hidden' }}> 
            <p className="Font-secondary event-date-place">
                <i class="fa-solid fa-calendar-days" style={{ marginRight:'5px'}}></i>{content.date}
            </p>
            <p className="Font-secondary event-date-place" style={{ marginLeft:'20px' }}>
                <i class="fa-solid fa-location-dot" style={{ marginRight:'5px'}}></i>{content.venue}
            </p>
        </div>
        <p className="card-sub font-secondary">{content.sub}</p>
      </div>
    </div>
  </div>
);

export default ContentCard;
