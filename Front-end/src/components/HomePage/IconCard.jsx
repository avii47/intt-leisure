import React from 'react';
import  '../CSS/IconCard.css'

const IconCard = React.forwardRef(({content, className, style}, ref) => {
    return (
        <div ref={ref}  className={`${className}`}style={style}>
            <img className='iconCard-img' src={content.img} alt="" />
            <h4 className='font-secondary' style={{fontSize:'18px'}}>{content.title}</h4>
            <p className='font-secondary'>{content.sub}</p>
        </div>
    )
});

export default IconCard;