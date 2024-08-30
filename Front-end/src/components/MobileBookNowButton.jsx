// src/components/MobileButton.js

import React from 'react';
import './CSS/MobileBookNowButton.css'; 

const MobileButton = ({ onClick, label }) => {
  return (
      <button className="mobile-button" onClick={onClick}>
      {label}
      </button>
  );
};

export default MobileButton;
