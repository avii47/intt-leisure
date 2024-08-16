import React from 'react';
import './CSS/ContentBlock.css'; // Assuming you're using CSS for styling

const ContentBlock = ({ image, title, text, buttonText, imagePosition }) => {
  return (
    <div className={`content-block ${imagePosition === 'left' ? 'left' : 'right'}`}>
      <div className={`content-block__image ${imagePosition === 'left' ? 'left' : 'right'}`}>
        <img src={image} alt={title} />
      </div>
      <div className={`content-block__text ${imagePosition === 'left' ? 'left' : 'right'}`}>
        <h6 className='font-secondary' style={{fontWeight:'350', fontSize:'15px'}}>Explore</h6>
        <hr style={{ width: '3.7rem', marginTop:'-1px' }} />
        <h3 className='font-primary'>{title}</h3>
        <p className='font-secondary'>{text}</p>
        <button className='btn btn-dark'>Learn more ></button>
      </div>
    </div>
  );
};

export default ContentBlock;
