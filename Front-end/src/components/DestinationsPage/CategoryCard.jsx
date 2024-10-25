import React from 'react';
import '../CSS/Pages/CategoryCard.css';

const CategoryCard = ({ imageSrc, title, description, link, onClick }) => {
    return (
        <div className="main-dcard" onClick={onClick}>
            <div className="main-dcard-overlay"></div>
            <img className="main-dcard-img" src={imageSrc} alt="" />
            <div className="main-dcard-text-container">
                <h2 className="font-primary main-dcard-text">{title}</h2>
                <span className="main-dcard-arrow"><i class="fas fa-long-arrow-alt-right" style={{fontSize:'35px'}}></i></span>
            </div>
        </div>
    );
};

export default CategoryCard;
