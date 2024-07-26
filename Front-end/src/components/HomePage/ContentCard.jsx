import React from 'react';
import '../CSS/ContentCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContentCard = ({content}) => (
        <div className="content-card">
            <div class="image-zoom-container">
                <img className="card-img top" src={`${content.img}`}></img>
            </div>
            <div className="content-card-body">
                <h5 className="card-title font-secondary" style={{fontSize:'18px'}}>{content.title}</h5>
                <p className="card-sub font-secondary">{content.sub}</p>
            </div>
        </div>
  );
  
  export default ContentCard;