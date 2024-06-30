import React from 'react';
import './ContentCard.css';

const ContentCard = ({content}) => (
    <div className="content-card">
        <img className="card-img" src={`${content.img}`}></img>
        <h5 className="card-title">{content.title}</h5>
        <p className="card-sub">{content.sub}</p>
    </div>
  );
  
  
  export default ContentCard;