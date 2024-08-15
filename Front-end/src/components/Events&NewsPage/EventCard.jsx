import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const EventCard = ({content}) => (
    <div className="col-12 event-card d-flex">
        <div className="col-md-4 font-secondary">
            <img className='eventsNews-img' src={content.img} alt="news image" loading='lazy' />
            <h5>{content.imgTitle}</h5>
            <p>{content.imgSub}</p>
        </div>
        <div className="col-md-8 eventsNews-txt">
            <div>
                <p style={{ marginBottom:'30px' }}>{content.text}</p>
                <button className='btn btn-dark news-card-btn'>Sign up ></button>
            </div>
        </div>
    </div>
  );
  
  export default EventCard;