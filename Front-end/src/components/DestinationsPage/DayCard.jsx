import React, { useState, useRef, useEffect } from 'react';
import '../CSS/DayCard.css';

const DayCard = () => {
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
        <span className="day-card-day">DAY 02</span>
        <span className="day-card-title">Kandy To Nuwara Eliya</span>
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
          <p>
            You will be met on arrival at the Bandaranaike International Airport by our INTT leisure representative who will assist you with your luggage and guide you to your vehicle where your personal chauffeur awaits.
          </p>
          <p>Transfer from Bandaranaike International Airport to Kandy.</p>
          <p>Visit the Pinnawala Elephant Orphanage. <i>(Optional - Entrance Fee Supplement)</i></p>
          <p>
            Kandy is the charming hill capital of Sri Lanka and the island's second-largest city...
          </p>
          <ul>
            <li>Accommodation</li>
            <li>Dinner and breakfast at the hotel</li>
          </ul>
          <div className="day-card-footer">
            <span>115 km</span>
            <span>02 hours 50 minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
