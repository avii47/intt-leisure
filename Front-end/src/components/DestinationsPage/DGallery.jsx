import React, { useState } from 'react';
import { useMobileView } from "../../contexts/MobileViewContext";
import leftArrow from '../../assets/icons/left-arrow.png'
import rightArrow from '../../assets/icons/right-arrow.png'
import '../CSS/DGallery.css';

const Gallery = ({images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobileView = useMobileView();

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`gallery ${isMobileView ? "mobile-view" : ""}`}>
      <div className="main-image">
        <img src={images[currentImageIndex]} alt="Main display" />
        <button className="arrow a-left" onClick={handlePrev}>
          <img src={leftArrow} alt="" style={{height:'40px', width:'auto'}} />
        </button>
        <button className="arrow a-right" onClick={handleNext}>
          <img src={rightArrow} alt="" style={{height:'40px', width:'auto'}} />
        </button>
      </div>
      <div className="thumbnail-row">
        <div className='thumbnail-img-container'>
            {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
            />
            ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
