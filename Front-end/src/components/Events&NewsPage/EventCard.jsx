import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventContent from "../ReadMoreCom";

const EventCard = ({ content }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = (path) => {
    navigate(path);
  };

  const handleExpand = (expanded) => {
    setIsExpanded(expanded);
  };

  return (
    <div
      id="event-card"
      className={`col-12 event-card d-flex ${isExpanded ? 'expanded' : ''}`} 
      style={{
        transition: "height 0.3s ease", 
        minHeight: isExpanded ? 'auto' : '200px', 
        overflow: "hidden",
      }}
    >
      <div className="col-md-4 eventsNews-img-col font-secondary">
        <img
          className="eventsNews-img"
          src={content.img}
          alt="news image"
          loading="lazy"
        />
        <div className="img-overlay-date font-secondary">
            04 Oct
        </div>
      </div>
      <div className="col-md eventsNews-txt">
        <div>
          <h3>{content.imgTitle}</h3>
          <div className="d-flex" style={{ overflowX: "hidden", marginBottom:'10px' }}>
            <p className="Font-secondary event-date-place2">
              <i
                className="fa-solid fa-calendar-days"
                style={{ marginRight: "5px" }}
              ></i>
              {content.date}
            </p>
            <p className="Font-secondary event-date-place2">
              <i
                className="fa-regular fa-clock"
                style={{ marginRight: "5px", marginLeft: "20px" }}
              ></i>
              {content.time}
            </p>
            <p
              className="Font-secondary event-date-place2"
              style={{ marginLeft: "20px" }}
            >
              <i
                className="fa-solid fa-location-dot"
                style={{ marginRight: "5px" }}
              ></i>
              {content.venue}
            </p>
          </div>
          <EventContent fullText={content.text} onExpand={handleExpand} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
