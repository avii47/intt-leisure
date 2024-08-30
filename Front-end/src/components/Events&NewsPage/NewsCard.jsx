import React from 'react';

const NewsCard = ({content}) => (
    <div className="news-card">
        <img className='eventsNews-img' src={content.img} alt="" />
        <h5>{content.title}</h5>
        <p>{content.sub}</p>
        <button className='btn btn-dark news-card-btn'>Read ></button>
    </div>
  );
  
  export default NewsCard;