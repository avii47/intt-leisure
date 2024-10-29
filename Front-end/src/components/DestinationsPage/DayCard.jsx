import React, { useState } from 'react';
import '../CSS/DayCard.css';

const DayCard = () => {
  // State to track if the card is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle expand/collapse state
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="day-card">
      <div className="day-card-header" onClick={toggleExpand}>
        <span className="day-card-day">DAY 02</span>
        <span className="day-card-title">Kandy To Nuwara Eliya</span>
        <button className="expand-button">{isExpanded ? '-' : '+'}</button>
      </div>

      {isExpanded && (
        <div className="day-card-details">
          <img
            src="path/to/your/image.jpg"
            alt="Elephants at Pinnawala"
            className="day-card-image"
          />
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
      )}
    </div>
  );
};

export default DayCard;
