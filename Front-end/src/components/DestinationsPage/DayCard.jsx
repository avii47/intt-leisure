import React, { useState, useRef, useEffect } from 'react';
import '../CSS/DayCard.css';

function DayCard({content}){
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px'); 
  const contentRef = useRef(null); 

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isExpanded]);

  return (
    <div className="day-card">
      <div className="day-card-header" onClick={toggleExpand}>
      <span className="day-card-day">{`Day ${content.id}`}</span>
      <span className="day-card-title">{content.title}</span>
        <button className="expand-button">
          {isExpanded ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}  
        </button>
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
              <li className="font-secondary" style={{marginTop:'20px', listStyleType:'none'}} key={i}>
                  {para}
              </li>
          ))}
          <h6 className="font-secondary" style={{fontSize:'22px', marginTop:'20px'}}>Inclusion</h6>
          {content.inclusion.map((para, i) => (
              <li className="font-secondary" style={{marginTop:'0px'}} key={i}>
                  {para}
              </li>
          ))}
          <div className="day-card-footer">
          <span>{content.distance}</span>
          <span>{content.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
