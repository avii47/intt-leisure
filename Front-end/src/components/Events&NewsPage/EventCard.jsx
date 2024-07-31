import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const EventCard = ({content}) => (
    <div className="event-card row d-flex">
        <div className="col-4 font-secondary">
            <img className='eventsNews-img' src={content.img} alt="" />
            <h5>{content.imgTitle}</h5>
            <p>{content.imgSub}</p>
        </div>
            <div className="col-8 eventsNews-txt">
            <p style={{fontSize:'20px'}}>{content.text}</p><br/>
            <button className='btn btn-dark'>Sign up ></button>
        </div>
    </div>
  );
  
  export default EventCard;