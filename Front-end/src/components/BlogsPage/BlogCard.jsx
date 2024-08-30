import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BlogCard = ({content, onClick}) => (

    <div className="blog-content-card" onClick={onClick}>
        <div class="blog-content-image-zoom-container">
            <div className="sc-overlayer"></div>
            <img loading='lazy' className="blog-content-card-img top" src={`${content.img}`} alt='blog image'></img>
        </div>
        <div className="blog-content-card-body">
            <h1 className="font-secondary blog-content-card-title">{content.title}</h1>
            <p className="font-secondary blog-content-card-date">Aug 19, 2024</p>
            <hr style={{ marginTop:'-0.5rem'}} />
            <p className="font-secondary blog-content-card-sub">{content.sub}</p>
            <button className='btn btn-secondary btn-sm'>Read Article</button>
        </div>
    </div>
  );
  
  export default BlogCard;