import React from 'react';
import useImage from '../../hooks/useImage'
import '../CSS/PackageCard.css';

const PackageCard = ({ content, onClick, isSelected }) => {

    const { image } = useImage(content.img)

    return(
        <div className="pkg-outer-div">
        <div className={`package-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <div class="package-image-zoom-container">
            <div className="sc-overlayer"></div>
            <img className="package-card-img top" src={image}></img>
            <div className='img-text'>
                <h4 className='font-primary psc-title'>{content.title}</h4>
            </div>
            </div>
        </div>
    </div>
    );
};
  
  export default PackageCard;