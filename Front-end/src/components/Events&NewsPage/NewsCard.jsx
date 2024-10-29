import React from 'react';

const NewsCard = ({content}) => (
    <div className="news-card">
        <img className='eventsNews-img' src={content.img} alt={`${content.title}-image`} />
        <h5 style={{height:'80px', fontWeight:'400'}}>{content.title}</h5>
        <p>{content.sub}</p>
        <a href={content.link} target="_blank"><button className='btn btn-dark news-card-btn'>Read ></button></a>
    </div>
  );
  
  export default NewsCard;