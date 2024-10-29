import React, { useState } from "react";
import ShareButtons from '../HomePage/EventsShareBtn';
import { useMobileView } from "../../contexts/MobileViewContext";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../components/CSS/BlogCard.css";

const BlogCard = React.forwardRef(({content, style, onClick}, ref) => {

    const isMobileView = useMobileView();
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(content.likeCount);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setLikeCount(prevCount => (isLiked ? prevCount - 1 : prevCount + 1));
      };

    return (
        <div className="blog-content-card" ref={ref} style={style}>
            <div class="blog-content-image-zoom-container">
                <div className="sc-overlayer"></div>
                <img loading='lazy' className="blog-content-card-img top" src={`${content.img}`} alt={`${content.title}-image`}></img>
                <div className="share-buttons">
                    <ShareButtons url={content.blogUrl} title={content.title} thumbnail={content.blogThumbnail} />
                </div>
                <div className="cat-div">
                    <p className="font-secondary blog-content-card-date" style={{ fontSize:'15px', marginLeft:'20px', color:'white' }}><i class="fa-regular fa-newspaper" style={{ marginRight:'5px'}}></i>{content.cat}</p>
                </div>
                <div className="like-button">
                    <i
                        className={`fa-${isLiked ? 'solid' : 'regular'} fa-heart blogCard-t2-like`}
                        onClick={handleLikeClick}
                    ></i>
                    <span>{likeCount}</span>
                </div>
            </div>
            <div className="blog-content-card-body">
                <div className='blog-card-top-section'>
                    <h1 className="font-secondary blog-content-card-title" style={{ fontSize:'19px', letterSpacing:'0' }}>{content.title}</h1>
                    <div className='d-flex meta-tags'>
                        <p className="font-secondary blog-content-card-date" ><i class="fas fa-pen-nib" style={{ marginRight:'5px'}}></i>By {content.author}</p>
                        <p className="font-secondary blog-content-card-date" style={{ marginLeft:'20px', marginTop: isMobileView? '-10px':'0' }}><i class="fa-solid fa-calendar-days" style={{ marginRight:'5px'}}></i>{content.date}</p>
                    </div>
                </div>
                <hr style={{ marginTop:'-0.5rem'}} />
                <p className="font-secondary blog-content-card-sub" style={{ fontSize:'15px', letterSpacing:'0' }}>{content.sub}</p>
                <button className='btn btn-dark btn-sm' onClick={onClick}>Read Article</button>
            </div>
        </div>
    );
});

export default BlogCard;
