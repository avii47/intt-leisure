import React from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import "../CSS/Pages/BlogsContentTemplate.css";

import NewsLetterSubBox from "./NewsLetterSubBox";

const BlogsContentTemplate = ({
  title,
  description,
  img,
  imgSrc,
  paragraphs,
  sections,
  recommendedLinks,
}) => {
  const isMobileView = useMobileView();
  const offset = 200;

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="blogs-content-section"
      className={`blogs-content-section-t2 d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="blogs-section-content-t2 page-section col-md-12">
        <div className="col-md-8" style={{ paddingRight: "30px" }}>
          <h3 className="font-primary" style={{ fontSize: "28px" }}>
            {title}
          </h3>
          <p className="font-secondary">{description}</p>
          <img
            className="blogs-img-t2"
            src={img}
            alt="blogs-img"
            loading="lazy"
          />
          <p
            className="font-secondary"
            style={{ marginTop: "-30px", color: "gray", paddingBottom: "20px" }}
          >
            {imgSrc}
          </p>
          {paragraphs.map((para, i) => (
            <p className="font-secondary" key={i}>
              {para}
            </p>
          ))}
        </div>
        <div className="col-md-4" style={{ paddingLeft: "30px" }}>
          <NewsLetterSubBox />
          <h3 className="font-secondary" style={{margin:'30px 0'}}>Recent Blogs</h3>
        </div>
      </div>
    </section>
  );
};

export default BlogsContentTemplate;
