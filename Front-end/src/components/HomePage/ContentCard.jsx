import React from 'react';
import "../../components/CSS/ContentCard.css";

const ContentCard = ({ content, onClick }) => (
    <div className="outer-div">
        <div className={`content-card col`} onClick={onClick}>
            <div class="image-zoom-container">
                <img className="card-img top" src={`${content.img}`}></img>
            </div>
            <div className="content-card-body">
                <h5 className="card-title font-secondary">{content.title}</h5>
                <p className="card-sub font-secondary">{content.sub}</p>
            </div>
        </div>
    </div>
);

export default ContentCard;