import React from 'react';
import '../CSS/PackageCard.css';

const PackageCard = ({ content, onClick, isSelected }) => (
    
        <div className={`package-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <div class="package-image-zoom-container">
            <div className="sc-overlayer"></div>
                <img className="package-card-img top" src={`${content.img}`}></img>
                <div className='img-text'>
                    <h4 className='font-primary sc-title'>{content.title}</h4>
                </div>
            </div>
        </div>
    
  );
  
  export default PackageCard;