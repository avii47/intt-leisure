import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../components/CSS/BlogCard.css";

const BlogCard = ({content, onClick}) => (

    <div className="blog-content-card" onClick={onClick}>
        <div class="blog-content-image-zoom-container">
            <div className="sc-overlayer"></div>
            <img loading='lazy' className="blog-content-card-img top" src={`${content.img}`} alt='blog image'></img>
        </div>
        <div className="blog-content-card-body">
            <h1 className="font-secondary blog-content-card-title" style={{ fontSize:'20px' }}>{content.title}</h1>
            <p className="font-secondary blog-content-card-date" style={{ fontSize:'15px' }}>{content.date}</p>
            <hr style={{ marginTop:'-0.5rem'}} />
            <p className="font-secondary blog-content-card-sub" style={{ fontSize:'15px', letterSpacing:'0' }}>{content.sub}</p>
            <button className='btn btn-secondary btn-sm'>Read Article</button>
        </div>
    </div>
  );
  
  export default BlogCard;