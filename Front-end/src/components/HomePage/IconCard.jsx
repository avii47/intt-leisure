import React from 'react';
import  '../CSS/Home/IconCard.css'

const IconCard = React.forwardRef(({content, className, style}, ref) => {
    return (
        <div ref={ref}  className={`${className}`}style={style}>
            <img className='iconCard-img' src={content.img} alt="icon-img" loading='lazy'/>
            <h4 className='font-secondary' style={{fontSize:'18px'}}>{content.title}</h4>
            <p className='font-secondary icon-discription' style={{  }}>{content.sub}</p>
            <hr />
        </div>
    )
});

export default IconCard;