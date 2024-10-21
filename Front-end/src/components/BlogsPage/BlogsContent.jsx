import React from "react";
import { useMobileView } from "../../contexts/MobileViewContext";

const BlogsContent = ({
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
      className={`blogs-content-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="blogs-section-content page-section">
        <h3 className="font-primary" style={{ fontSize: "28px" }}>
          {title}
        </h3>
        <p className="font-secondary">{description}</p>
        <img className="blogs-img" src={img} alt="blogs-img" loading="lazy" />
        <p className="font-secondary" style={{ marginTop:'-30px', color:'gray', paddingBottom:'20px' }}>{imgSrc}</p>
        {paragraphs.map((para, i) => (
          <p className="font-secondary" key={i}>
            {para}
          </p>
        ))}
        <br />

        {/* Render Sections Dynamically */}
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-primary" style={{ fontSize: "28px" }}>
              {section.sectionTitle}
            </h3>
            <p className="font-secondary">{section.sectionDescription}</p>

            {/* Render Topics */}
            <div className="topics font-secondary">
              <ul>
                {section.topics.map((topic, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${topic.id}`}
                      onClick={(e) => handleScroll(e, topic.id)}
                    >
                      {topic.title}
                    </a>
                    <i className="topic-arrow-icon fa-solid fa-angle-down"></i>
                  </li>
                ))}
              </ul>
            </div>

            {/* Render Content */}
            <div className="content font-secondary">
              {section.topics.map((topic) => (
                <section key={topic.id} id={topic.id}>
                  <h5>{topic.title}</h5>
                  {topic.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        ))}

        <hr />

        {/* Render Recommended Links */}
        <div className="recommended">
          <h3>Recommended for you:</h3>
          <div className="col-12 d-flex">
            {recommendedLinks.map((col, i) => (
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
    </section>
  );
};

export default BlogsContent;
