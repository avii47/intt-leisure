import React from 'react';

const ImageCard = ({content}) => {
  return (
    <div className="destination-card">
    <div class="destination-image-zoom-container">
        <img className="destination-card-img top" src={`${content.img}`}></img>
    </div>
    <div className="card-text">
        <h5 className='font-primary'><b>{content.title} </b></h5>
        <p>{content.text}</p>
    </div>
</div>
  );
};

export default ImageCard;
