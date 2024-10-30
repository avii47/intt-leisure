// Gallery.js
import React, { useState } from 'react';
import '../CSS/DGallery.css';

const images = [
  'https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?t=st=1730290675~exp=1730294275~hmac=a4e90f32e9add82c362be8873d22cd69ab680b3d20d8bdc4673c03de6cd18021&w=1380', // Replace with your image URLs
  'https://img.freepik.com/free-photo/person-traveling-enjoying-their-vacation_23-2151383050.jpg?t=st=1730290703~exp=1730294303~hmac=c41ec96783c5cef6fa0f10f6a7bbfeaab76142a61ab4d7f94a793c682c4ff9ca&w=1380',
  'https://img.freepik.com/free-photo/woman-sitting-cliff-looking-sunset-kelingking-beach-nusa-penida-island-bali-indonesia_335224-340.jpg?t=st=1730290730~exp=1730294330~hmac=3ebb7259ecfbc39f6f9b64cdeb6f06a3f49591d99d0bcf714686925c2a62ed9a&w=1380',
  'https://img.freepik.com/free-photo/woman-bikini-sitting-viewpoint-nang-yuan-island-thailand_335224-1091.jpg?t=st=1730290749~exp=1730294349~hmac=c0a2b215294af25cb2eb5956212d6829f90e87d21c3edd6318684ab190503f72&w=1380',
  'https://img.freepik.com/free-photo/long-boat-blue-water-maya-bay-phi-phi-island-krabi-thailand_335224-895.jpg?t=st=1730290765~exp=1730294365~hmac=1a17261977fcc21e0b66910f955765fa00470fb4c604058d488c4b43e1640487&w=1380',
  'https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?t=st=1730290675~exp=1730294275~hmac=a4e90f32e9add82c362be8873d22cd69ab680b3d20d8bdc4673c03de6cd18021&w=1380', // Replace with your image URLs
  'https://img.freepik.com/free-photo/person-traveling-enjoying-their-vacation_23-2151383050.jpg?t=st=1730290703~exp=1730294303~hmac=c41ec96783c5cef6fa0f10f6a7bbfeaab76142a61ab4d7f94a793c682c4ff9ca&w=1380',
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="gallery">
      <div className="main-image">
        <img src={images[currentImageIndex]} alt="Main display" />
        <button className="arrow left" onClick={handlePrev}>&lt;</button>
        <button className="arrow right" onClick={handleNext}>&gt;</button>
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
