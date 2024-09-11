import React from 'react';

const NewsCard = ({content}) => (
    <div className="news-card">
        <img className='eventsNews-img' src={content.img} alt="" />
        <h5>{content.title}</h5>
        <p>{content.sub}</p>
        <a href="https://councils.forbes.com/profile/Gamini-Hewawasam-Scholar-Practitioner-CEO-ManoLead-NFP/bcb1aacb-ab06-4957-803a-62da6f9d179b" target="_blank"><button className='btn btn-dark news-card-btn'>Read ></button></a>
    </div>
  );
  
  export default NewsCard;