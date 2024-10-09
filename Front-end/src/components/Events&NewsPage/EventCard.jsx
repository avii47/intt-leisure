import React, { useState } from "react";

const EventCard = ({ content, onClick }) => {

  return (
    <div id="event-card" className={`col-12 event-card d-flex`} >
      <div className="col-md-4 eventsNews-img-col font-secondary">
        <img
          className="eventsNews-img"
          src={content.img}
          alt="news image"
          loading="lazy"
        />
        <div className="img-overlay-date font-secondary">
            {content.shortDate}
        </div>
      </div>
      <div className="col-md-8 eventsNews-txt">
        <div>
          <h2 className="font-secondary" style={{fontSize:'30px'}}>{content.eventTitle}</h2>
          <div className="d-flex meta-tags2">
            <div className="col-sm-3">
              <p className="Font-secondary event-date-place2">
                <i class="fa-regular fa-calendar-check events-meta-icons"></i>
                {content.tag}
              </p>
            </div>
            <div className="col-sm-3">
              <p className="Font-secondary event-date-place2">
                <i className="fa-solid fa-calendar-days events-meta-icons"></i>
                {content.date}
              </p>
            </div>
            <div className="col-sm-3">
              <p className="Font-secondary event-date-place2">
                <i className="fa-regular fa-clock events-meta-icons"></i>
                {content.time}
              </p>
            </div>
            <div className="col-sm-3">
              <p className="Font-secondary event-date-place2">
                <i className="fa-solid fa-location-dot events-meta-icons"></i>
                {content.venue}
              </p>
            </div>
          </div><hr style={{marginTop:'-10px'}} />
          <p className="font-secondary event-content-txt">{content.text}</p>
          <button className='btn btn-dark news-card-btn' onClick={onClick}>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
