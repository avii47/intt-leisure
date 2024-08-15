import React from 'react';
import  '../CSS/Home/IconCard.css'

const IconCard = React.forwardRef(({content, className, style}, ref) => {
    return (
        <div ref={ref}  className={`${className}`}style={style}>
            <img className='iconCard-img' src={content.img} alt="icon-img" loading='lazy'/>
            <h4 className='font-secondary' style={{fontSize:'22px', letterSpacing:'0px'}}>{content.title}</h4>
            <p className='font-secondary icon-discription' style={{ fontSize:'13px', letterSpacing:'0.5px'  }}>{content.sub}</p>
            <hr className='icon-card-bottom-line' style={{color:'brown'}}/>
        </div>
    )
});

export default IconCard;