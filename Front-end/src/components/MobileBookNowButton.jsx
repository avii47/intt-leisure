import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/MobileBookNowButton.css';

const MobileButton = ({ label }) => {
  const navigate = useNavigate();
  const handleOnClick = (path) => {
    navigate(path);
  };

  return (
    <button className="mobile-button" onClick={() => handleOnClick('/bookNow')}>
      {label}
    </button>
  );
};

export default MobileButton;
