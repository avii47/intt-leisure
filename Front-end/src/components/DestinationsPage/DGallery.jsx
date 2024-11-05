// Gallery.js
import React, { useState } from 'react';
import { useMobileView } from "../../contexts/MobileViewContext";
import leftArrow from '../../assets/icons/left-arrow.png'
import rightArrow from '../../assets/icons/right-arrow.png'
import '../CSS/DGallery.css';

const images = [
  'https://img.freepik.com/free-photo/beautiful-setting-sun-forest-mountain-landscape_181624-27748.jpg?t=st=1730457826~exp=1730461426~hmac=154522b204a7305c84400654e0ea634852dfe1288f0f28c0272b59636e5dbe83&w=1380', // Replace with your image URLs
  'https://img.freepik.com/free-photo/high-angle-shot-beautiful-palm-trees-middle-foggy-forest_181624-18572.jpg?t=st=1730457863~exp=1730461463~hmac=dec64340944501ae99e2540fde4465dcba60edcc6921b2f0822693f874ad3785&w=1380',
  'https://img.freepik.com/free-photo/foggy-koke-e-state-park-hawaii-usa_181624-10738.jpg?t=st=1730457894~exp=1730461494~hmac=9e45379fed8b37800b9e0136486f436a46fdba2b941a109f6c58243204c9e970&w=1380',
  'https://img.freepik.com/free-photo/breathtaking-shot-small-waterfall-forest-with-sun-shining-through-trees_181624-8392.jpg?t=st=1730457921~exp=1730461521~hmac=9894ce7ff2e900759a5fa9be0bde81dfe6450efbbd7d4b372e13b48ea90cd739&w=1380',
  'https://img.freepik.com/free-photo/couple-walking-sandy-shore_1153-3129.jpg?t=st=1730457965~exp=1730461565~hmac=087d5a99c1e0a0c20f1377ca5d265fdb940541f792241a1012c91b0fbf7f2427&w=1380',
  'https://img.freepik.com/free-photo/indonesian-beach_1385-1697.jpg?t=st=1730458005~exp=1730461605~hmac=035654dfa2ef34cb10c2049c9f1a3373481084839a7b1a56202211d95bb86a56&w=1380', // Replace with your image URLs
  
];

const Gallery = () => {
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
        <button className="arrow left" onClick={handlePrev}>
          <img src={leftArrow} alt="" style={{height:'40px', width:'auto'}} />
        </button>
        <button className="arrow right" onClick={handleNext}>
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
