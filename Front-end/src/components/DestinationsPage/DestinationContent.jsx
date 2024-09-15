import React, { useEffect, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import contentData from "../../data/DestinationsListData";

const TourCard = lazy(() => import("../DestinationsPage/DestinationCard"));

const DestinationsContent = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.getElementById("destination-content-section");
    const cards = document.getElementById("destionation-cards-container");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.classList.add("animate-cards");
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

  const handleDestinationCardClick = (id) => {
    navigate(`/destinations/${id}`);
  };

  return (
    <section
      id="destination-content-section"
      className={`section destination-content-section ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="destination-section-content">
        <div
          id="destionation-cards-container"
          className="destionation-cards-container d-flex"
        >
          {contentData.map((content, index) => (
            <TourCard
              imageSrc={content.img}
              title={content.title}
              description={content.description}
              onClick={() => handleDestinationCardClick(content.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsContent;
