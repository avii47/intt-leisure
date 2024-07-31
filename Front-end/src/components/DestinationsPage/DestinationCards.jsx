import React from 'react';
import '../CSS/DestinationCard.css'

const ImageCard = ({content}) => {
  return (
    // <div className="card-container">
    //   <div className="card-background" style={{ backgroundImage: `url(${content.img})` }}></div>
    //   <div className="card-text">
    //     <h5 className='font-primary'><b>{content.title} </b></h5>
    //     <p>{content.text}</p>
    //   </div>
    // </div>
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
