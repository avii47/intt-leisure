import React from 'react';
import  '../CSS/IconCard.css'
import authentic_practices from '../../assets/icons/Authentic Practices.png';
import experties from '../../assets/icons/expertise.png';
import unique_excursions from '../../assets/icons/Unique Excursions.png';

const IconCard = React.forwardRef(({content, className, style}, ref) => {
    return (
        <div ref={ref}  className={`${className}`}style={style}>
            <img className='iconCard-img' src={content.img} alt="" />
            <h4 className='font-primary'>{content.title}</h4>
            <p className='font-secondary'>{content.sub}</p>
        </div>
    )
});

export default IconCard;