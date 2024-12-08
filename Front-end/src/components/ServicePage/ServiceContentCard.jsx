import React from 'react';
import useImage from '../../hooks/useImage'
import '../CSS/ServiceContentCard.css';

const ServiceContentCard = React.forwardRef(({ content, onClick, style }, ref) => {

    const { loading, error, image } = useImage(content.img)
    
    return(
        <div className="service-content-card" onClick={onClick} style={style} ref={ref}>
            <div class="service-content-image-zoom-container">
                <div className="sc-overlayer"></div>
                <img loading='lazy' className="service-content-card-img top" src={image} alt={`${content.title}-image`}></img>
                <div className='img-text2'>
                    <h4 className='sc-title'>{content.sub1}</h4>
                    <p className='font-secondary sc-sub'>{content.title}</p>
                </div>
            </div>
            <div className="service-content-card-body">
                <p className="service-content-card-sub font-secondary">{content.sub3}</p>
                <button className='btn btn-outline-secondary btn-sm explore-service-btn'>Explore Package</button>
            </div>
        </div>
    )
});

export default ServiceContentCard;