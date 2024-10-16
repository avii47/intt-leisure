import React, { useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import contentData from "../../data/BlogListData";
import "../../components/CSS/Pages/BlogsListPage.css";

const BlogCard = lazy(() => import("../BlogsPage/BlogCard"));

const BlogsList = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.getElementById("blogs-list-section");
    const cardSection = document.getElementById("blog-cards-container");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardSection.classList.add("animate-cards");
        }
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleBlogCardClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <section
      id="blogs-list-section"
      className={`section blogs-list-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="blogs-list-content">
        <h2 className="Font-secondary">Our Latest Blog Posts</h2>
        <p className="Font-secondary">Stay tuned and updated by the latest from our blog.</p>
        <div id="blog-cards-container" className="d-flex blog-cards-container">
          {contentData.map((content, index) => (
            <Suspense key={index} fallback={<div>Loading...</div>}>
              <BlogCard
                content={content}
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
