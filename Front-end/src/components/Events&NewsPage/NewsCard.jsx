import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NewsCard = ({content}) => (
    <div className="news-card">
        <img className='eventsNews-img' src={content.img} alt="" />
        <h5>{content.title}</h5>
        <p>{content.sub}</p>
        <button className='btn btn-dark'>Read ></button>
    </div>
  );
  
  export default NewsCard;