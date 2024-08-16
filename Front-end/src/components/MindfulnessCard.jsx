import React from 'react';
import './ContentBlock.css'; // Assuming you're using CSS for styling

const ContentBlock = ({ image, title, text, buttonText, imagePosition }) => {
  return (
    <div className={`content-block ${imagePosition === 'left' ? 'left' : 'right'}`}>
      <div className="content-block__image">
        <img src={image} alt={title} />
      </div>
      <div className="content-block__text">
        <h3>{title}</h3>
        <p>{text}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default ContentBlock;
