import React, { useState, useEffect } from 'react';

const EventCard = ({content}) => {

    // useEffect(() => {
    //     const section = document.getElementById('event-card');
    //     const blockSection = document.getElementById('event-card');
    
    //     const observer = new IntersectionObserver(
    //       ([entry]) => {
    //         if (entry.isIntersecting) {
    //           blockSection.classList.add('animate-event-card');
    //         }
    //       },
    //       { threshold: 0.5 }
    //     );
    
    //     if (section) {
    //       observer.observe(section);
    //     }
    
    //     return () => {
    //       if (section) {
    //         observer.unobserve(section);
    //       }
    //     };
    //   }, []);

      return(
        <div id='event-card' className="col-12 event-card d-flex" >
            <div className="col-md-4 eventsNews-img-col font-secondary">
                <img className='eventsNews-img' src={content.img} alt="news image" loading='lazy' />
                <h5>{content.imgTitle}</h5>
                <p>{content.imgSub}</p>
            </div>
            <div className="col-md eventsNews-txt">
                <div>
                    <p style={{ marginBottom:'30px' }}>{content.text}</p>
                    <button className='btn btn-dark news-card-btn'>Sign up ></button>
                </div>
            </div>
        </div>
  );
};

  
export default EventCard;