// LoadingSpinner.js
import React from 'react';
import '../components/CSS/LoadingSpinner.css'; 

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <h6>Loading</h6>
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;
