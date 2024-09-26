import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ content }) => {

    const navigate = useNavigate();
    const handleOnClick = (path) => {
        navigate(path);
    };

    return (
        <div id='event-card' className="col-12 event-card d-flex" >
            <div className="col-md-4 eventsNews-img-col font-secondary">
                <img className='eventsNews-img' src={content.img} alt="news image" loading='lazy' />
                
                {/* <p>{content.imgSub}</p> */}
            </div>
            <div className="col-md eventsNews-txt">
                <div>
                    <h3>{content.imgTitle}</h3>
                    <p style={{ marginBottom: '30px' }}>{content.text}</p>
                    <button className='btn btn-dark news-card-btn' onClick={() => handleOnClick('/contact-us')}>Sign up ></button>
                </div>
            </div>
        </div>


    );
};


export default EventCard;