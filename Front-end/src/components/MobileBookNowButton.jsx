// src/components/MobileButton.js

import React from 'react';
import './CSS/MobileBookNowButton.css'; 

const MobileButton = ({ onClick, label }) => {
  return (
    <div className='mobile-button-container'>
        <button className="mobile-button" onClick={onClick}>
        {label}
        </button>
    </div>

  );
};

export default MobileButton;
