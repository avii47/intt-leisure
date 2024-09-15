import React, { useEffect, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import contentData from "../../data/ServicePageData";
import "../CSS/Pages/ServicePage.css";

const ContentCard = lazy(() => import("./ServiceContentCard"));

const ServiceContent = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.getElementById("service-content-section");
    const cardSection = document.getElementById(
      "service-content-cards-container"
    );

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

  const handleServiceCardClick = (id) => {
    if (id === 6) {
      navigate("/contact-us");
    } else {
      navigate(`/services/${id}`);
    }
  };

  return (
    <section
      id="service-content-section"
      className={`section justify-content-center service-content-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="service-section-content justify-content-center">
        <h3 className="font-primary">Choose your Journey</h3>
        <p className="font-secondary" style={{ marginTop: "10px" }}>
          As you immerse yourself in this enchanting destination, we invite you
          to participate in profound self-reflection and practice alongside us.{" "}
        </p>
        <div
          id="service-content-cards-container"
          className="d-flex service-content-cards-container"
        >
          {contentData.map((content, index) => (
            <ContentCard
              key={index}
              content={content}
              onClick={() => handleServiceCardClick(content.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
