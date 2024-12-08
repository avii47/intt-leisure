import React from "react";
import ShareButtons from './EventsShareBtn';
import useImage from '../../hooks/useImage'
import "../../components/CSS/ContentCard.css";

const ContentCard = React.forwardRef(({ content, className, style, onClick }, ref) => {

  const { loading, error, image } = useImage(content.img)

  return (
    <div className="outer-div">
      <div ref={ref} className={`${className}`} style={style}>
        <div className="image-zoom-container">
          <div className="image-overlay-container">
            <img className="card-img top" src={`${image}`} alt={`${content.eventTitle}-image`} />
            <div className="overlay">
              <button className="btn btn-outline-light read-btn" onClick={onClick}>Read</button>
            </div>
          </div>
          <div className="share-buttons">
            <ShareButtons url={content.blogUrl} title={content.eventTitle} thumbnail={content.blogThumbnail} />
          </div>
        </div>
        <div className="content-card-body">
          <h5 className="card-title font-secondary" style={{ fontSize: "20px" }}>
            {content.eventTitle}
          </h5>
          <div className="d-flex"> 
            <div className="col-12 d-flex" style={{gap: '20px'}}>
              <div className="col-md-auto">
                <p className="Font-secondary event-date-place">
                  <i className="fa-solid fa-calendar-days events-meta-icons"></i>{content.date}
                </p>
              </div>
              <div className="col-md">
                <p className="Font-secondary event-date-place">
                  <i className="fa-solid fa-location-dot events-meta-icons"></i>{content.venue}
                </p>
              </div>
            </div>
          </div>
          <hr style={{marginTop:'-0.2rem'}}/>
          <p className="card-sub font-secondary">{content.sub}</p>
        </div>
      </div>
    </div>
  )
});

export default ContentCard;
