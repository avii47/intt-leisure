import React, { useState, useRef, useEffect } from 'react';
import '../CSS/DayCard.css';

function DayCard({content}){
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px'); // Track max-height for animation
  const contentRef = useRef(null); // Reference to get content height

  // Toggle expand/collapse state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Update maxHeight based on expanded state
  useEffect(() => {
    setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isExpanded]);

  return (
    <div className="day-card">
      <div className="day-card-header" onClick={toggleExpand}>
      <span className="day-card-day">{`Day ${content.id}`}</span>
      <span className="day-card-title">{content.title}</span>
        <button className="expand-button">
          {isExpanded ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}  {/* Show icons based on expanded state */}
        </button>
      </div>

      <div
        className={`day-card-details ${isExpanded ? 'expanded' : 'collapsed'}`}
        ref={contentRef}
        style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.4s ease' }}
      >
        <div className="day-card-img-container">
          <img
            src="https://img.freepik.com/free-photo/girl-red-dress-dancing-waterfall_72229-1290.jpg?t=st=1730278945~exp=1730282545~hmac=e16386c150b092495e8d4b84973917dc4a7827be3c81dd8dae38d0d8033088c0&w=1380"
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
