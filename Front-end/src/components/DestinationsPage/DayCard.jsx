import React, { useRef, useEffect, useState } from 'react';
import { useMobileView } from "../../contexts/MobileViewContext";
import '../CSS/DayCard.css';

function DayCard({ content, isExpanded, onExpand }) {
  const cardRef = useRef(null); 
  const contentRef = useRef(null); 
  const [maxHeight, setMaxHeight] = useState('0px');
  const isMobileView = useMobileView();

  // Adjust maxHeight dynamically based on isExpanded
  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setMaxHeight(`${contentHeight}px`);
      
      // Scroll to the top of the card
      // cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
      setMaxHeight('0px');
    }
  }, [isExpanded]);

  return (
    <div className={`day-card ${ isMobileView ? "mobile-view" : "" }`} ref={cardRef}> 
      <div className="day-card-header" onClick={onExpand}>
        <div className="day-col" >
          <span className="day-card-day">{`Day ${content.id}`}</span>
        </div>
        <div className="title-col d-flex">
          <span className="day-card-title">{content.title}</span>
        </div>
        <div className="btn-col">
          <button className="expand-button">
            {isExpanded ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}  
          </button>
        </div>
      </div>

      <div
        className={`day-card-details ${isExpanded ? 'expanded' : 'collapsed'}`}
        ref={contentRef}
        style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.4s ease' }}
      >
        <div className="day-card-img-container">
          <img
            src={content.img}
            alt="Elephants at Pinnawala"
            className="day-card-image"
          />
        </div>

        <div className="day-card-content">
          {content.content.map((para, i) => (
            <li className="font-secondary" style={{ marginTop: '20px', listStyleType: 'none' }} key={i}>
              {para}
            </li>
          ))}
          <h6 className="font-secondary" style={{ fontSize: '22px', marginTop: '20px' }}>Inclusion</h6>
          {content.inclusion.map((para, i) => (
            <li className="font-secondary" style={{ marginTop: '0px' }} key={i}>
              {para}
            </li>
          ))}
          {(content.distance || content.duration) && (
            <div className="day-card-footer">
              {content.distance && <span>{content.distance}</span>}
              {content.duration && <span>{content.duration}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DayCard;
