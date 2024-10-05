import React from 'react';
import ShareButtons from '../BlogsPage/ShareButtons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../components/CSS/BlogCard.css";

const BlogCard = ({content, onClick}) => (
    <div className="blog-content-card">
        <div class="blog-content-image-zoom-container">
            <div className="sc-overlayer"></div>
            <img loading='lazy' className="blog-content-card-img top" src={`${content.img}`} alt='blog image'></img>
        </div>
        <div className="blog-content-card-body">
            <div className='blog-card-top-section'>
                <h1 className="font-secondary blog-content-card-title" style={{ fontSize:'19px' }}>{content.title}</h1>
                <div className='d-flex'>
                    <p className="font-secondary blog-content-card-date" style={{ fontSize:'15px' }}><i class="fa-solid fa-calendar-days" style={{ marginRight:'5px'}}></i>{content.date}</p>
                    <p className="font-secondary blog-content-card-date" style={{ fontSize:'15px', marginLeft:'20px' }}><i class="fa-regular fa-newspaper" style={{ marginRight:'5px'}}></i>{content.cat}</p>
                </div>
            </div>
            <hr style={{ marginTop:'-0.5rem'}} />
            <p className="font-secondary blog-content-card-sub" style={{ fontSize:'15px', letterSpacing:'0' }}>{content.sub}</p>
            <button className='btn btn-secondary btn-sm' onClick={onClick}>Read Article</button>
            <ShareButtons url={content.blogUrl} title={content.title} thumbnail={content.blogThumbnail} />
        </div>
    </div>
);

export default BlogCard;
