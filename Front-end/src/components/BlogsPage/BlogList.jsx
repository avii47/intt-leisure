import React, { Suspense, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import BlogCard from "./BlogCard";
import cardLoader from '../../hooks/cardLoader';
import contentData from "../../data/BlogsData";
import "../../components/CSS/Pages/BlogsListPage.css";

const BlogsList = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();
  const blogCardsRef = useRef([]);

  if(!isMobileView) {
    cardLoader(blogCardsRef, 'visible', 200, { threshold: 0.5 });
  }

  const handleBlogCardClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <section
      id="blogs-list-section"
      className={`blogs-list-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="blogs-list-content page-section">
        <h2 className="font-primary">Our Latest Blog Posts</h2>
        <p className="font-secondary">Stay tuned and updated by the latest from our blog.</p>
        <div id="blog-cards-container" className="d-flex blog-cards-container">
          {contentData.map((content, index) => (
            <Suspense key={index} fallback={<div>Loading...</div>}>
              <BlogCard
                content={content}
                ref={el => blogCardsRef.current[index] = el}
                style={{ '--animation-order': index }}
                onClick={() => handleBlogCardClick(content.id)}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
