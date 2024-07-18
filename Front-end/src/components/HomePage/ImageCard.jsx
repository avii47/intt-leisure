import React from 'react';
import './ImageCard.css'; 

const ImageCard = ({ imageSrc, topic, paragraph }) => {
    return (
        <div className="card">
            <div className="image-container">
                <img src={imageSrc} alt="Card" className="card-image" />
                <div className="overlay">
                    <h3>{topic}</h3>
                    <p>{paragraph}</p><br></br>
                    <p><button type="button" class="btn btn-link btn-learnmore" style={{ color: 'white', fontSize: '12px' }}>Learn More ></button></p>
                </div>
            </div>
        </div>
    );
}

export default ImageCard;