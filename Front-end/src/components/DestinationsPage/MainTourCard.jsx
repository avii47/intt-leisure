import React from 'react';
import { useMobileView } from "../../contexts/MobileViewContext";
import arrowIcon from '../../assets/icons/icons8-right-arrow.gif'
import '../CSS/Pages/CategoryCard.css';

const CategoryCard = ({ imageSrc, title, description, link, onClick }) => {

    const isMobileView = useMobileView();

    return (
        <div className={`main-dcard ${ isMobileView ? "mobile-view" : "" }`} onClick={onClick}>
            <div className="main-dcard-overlay"></div>
            <img className="main-dcard-img" src={imageSrc} alt="" />
            <div className="main-dcard-text-container">
                <h3 className="font-primary main-dcard-text">{title}</h3>
                <span className="main-dcard-arrow">
                    <img src={arrowIcon} height={50} alt="" />
                </span>
            </div>
        </div>
    );
};

export default CategoryCard;
