import React from 'react';
import './ContentCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContentCard = ({content}) => (
    <div className="content-card">
        <div class="image-zoom-container">
            <img className="card-img top" src={`${content.img}`}></img>
        </div>
        <div className="content-card-body">
            <h5 className="card-title">{content.title}</h5>
            <p className="card-sub">{content.sub}</p>
        </div>
        
        <p><button type="button" class="btn btn-link btn-learnmore">Learn More ></button></p>
        
    </div>
  );
  
  
  export default ContentCard;