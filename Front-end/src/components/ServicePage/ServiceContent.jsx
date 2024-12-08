import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useStore from '../../contexts/Store';
import { useMobileView } from "../../contexts/MobileViewContext";
import ContentCard from "./ServiceContentCard"
import cardLoader from '../../hooks/cardLoader';
import "../CSS/Pages/ServicePage.css";

const ServiceContent = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();
  const pkgCardsRef = useRef([]);
  const { services } = useStore();

  if(!isMobileView) {
    cardLoader(pkgCardsRef, 'visible', 200, { threshold: 0.5 });
  }

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
      className={`justify-content-center service-content-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="service-section-content justify-content-center page-section">
        <h3 className="font-primary">Choose your Journey</h3>
        <p className="font-secondary" style={{ marginTop: "10px" }}>
          As you immerse yourself in this enchanting destination, we invite you
          to participate in profound self-reflection and practice alongside us.
        </p>
        <div
          id="service-content-cards-container"
          className="d-flex service-content-cards-container"
        >
          {services.map((content, index) => (
            <ContentCard
              key={index}
              content={content}
              ref={el => pkgCardsRef.current[index] = el}
              style={{ '--animation-order': index }}
              onClick={() => handleServiceCardClick(content.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
