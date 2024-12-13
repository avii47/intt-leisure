import React from 'react';
import "../../components/CSS/Home/IconCard.css";

const IconCard = React.forwardRef(({ content, className, style }, ref) => {
    return (
        <div className='outer-div'>
            <div ref={ref} className={`${className}`} style={style}>
                <div className='iconCard-img-container'>
                    <img className='iconCard-img' src={content.img} alt="icon-img" loading='lazy' />
                </div>
                <div className="icon-discription">
                    <h4 className='font-secondary'>{content.title}</h4>
                    <p className='font-secondary'>{content.sub}</p>
                </div>
                <hr className='icon-card-bottom-line' style={{ color: 'brown' }} />
            </div>
        </div>

    )
});

export default IconCard;