import React, { useRef, useState } from "react";
import blogsData from '../../data/BlogsData';
import { useMobileView } from "../../contexts/MobileViewContext";
import { useNavigate } from "react-router-dom";
import cardLoader from '../../hooks/cardLoader';
import ShareButtons from '../HomePage/EventsShareBtn';
import "../CSS/Pages/BlogsContentTemplate.css";

import NewsLetterSubBox from "./NewsLetterSubBox";
import BlogCardHr from "./BlogCardHr";
import ContentLayout from "./ContentLayout1";

const BlogsContentTemplate = ({content}) => {

  const isMobileView = useMobileView();
  const navigate = useNavigate();
  const blogCardHrsRef = useRef([]);
  const excludeId = content.id;

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(content.likeCount);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(prevCount => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  if (!isMobileView) {
    cardLoader(blogCardHrsRef, 'visible', 200, { threshold: 0.5 });
  }

  const handleBlogCardHrClick = (id) => {
    navigate(`/blogs/${id}`);
  };


  return (
    <section
      id="blogs-content-section"
      className={`blogs-content-section-t2 d-flex ${isMobileView ? "mobile-view" : ""
        }`}
    >
      <div className="blogs-section-content-t2 page-section col-md-12">
        <div className="col-md-8" style={{ paddingRight: "30px" }}>
          <h3 className="font-primary" style={{ fontSize: "28px" }}>
            {content.title}
          </h3>
          <p className="font-secondary">{content.description}</p>
            <img
              className="blogs-img-t2"
              src={content.img}
              alt="blogs-img"
              loading="lazy"
            />
          <p
            className="font-secondary"
            style={{ marginTop: "-30px", color: "gray", paddingBottom: "20px" }}
          >
            {content.imgSrc}
          </p>

          <ContentLayout paragraphs={content.paragraphs}/>

          <p className="font-secondary">Click <a href={content.blogUrl} target="_blank" rel="noopener noreferrer">here</a> to view the full Forbes Expert Panel article.</p><hr />

          <div className="bottom-section-t2">
          <p className="font-secondary" style={{ marginTop: '20px' }}>
            <i
              className={`fa-${isLiked ? 'solid' : 'regular'} fa-heart blog-t2-like`}
              onClick={handleLikeClick}
              style={{ cursor: 'pointer' }} 
            ></i>
            {likeCount} People like this
          </p>
            <ShareButtons url={content.blogUrl} title={content.title} thumbnail={content.blogThumbnail} />
          </div>

          {/* Render Recommended Links */}
          <div className="recommended">
            <h3>Recommended for you:</h3>
            <div className="col-12 d-flex">
              {content.recommendedLinks.map((col, i) => (
                <div className="col-6" key={i} style={{ padding: "0 20px" }}>
                  {col.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                      <i className="fas fa-chevron-right"></i>
                    </li>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-4" style={{ paddingLeft: "30px" }}>
          <NewsLetterSubBox />
          <h3 className="font-primary" style={{ margin: '50px 0 0 0', fontSize: '30px' }}>Recent Blogs</h3><hr />
          {blogsData
            .filter((content) => content.id !== excludeId)
            .slice(0, 5)
            .map((content, index) => (
              <BlogCardHr
                key={index}
                content={content}
                ref={el => blogCardHrsRef.current[index] = el}
                style={{ '--animation-order': index }}
                onClick={() => handleBlogCardHrClick(`${content.id}`)}
              />
            ))}

        </div>
      </div>
    </section>
  );
};

export default BlogsContentTemplate;
