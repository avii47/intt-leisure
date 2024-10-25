import React, { useState, useEffect, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import dubaiContentData from "../../data/DubaiToursData";
import thailandContentData from "../../data/ThailandTourData";
import sriLankaContentData from "../../data/ThailandTourData";
import "../CSS/Pages/DestinationInnerPage.css";

// const TourComponent = lazy(() => import("./TourCard"));

const DestinationInnerContent = ({ content }) => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();
  let contentData = null;

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

  const handleInquiryClick = () => {
    navigate("/contact-us");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+1 312-242-1662";
  };

  switch (content.title) {
    case "Dubai":
      contentData = dubaiContentData;
      break;
    case "Thailand":
      contentData = thailandContentData;
      break;
    case "Sri Lanka":
      contentData = sriLankaContentData;
      break;
    default:
      contentData = dubaiContentData;
  }

  return (
    <section
      id="destination-inner-content-section"
      className={`section destination-inner-content-section ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="destination-inner-section-content">
        <div
          id="destionation-inner-cards-container"
          className="destionation-inner-cards-container d-flex"
        >
          {/* {contentData.map((content, index) => (
            <TourComponent
              key={index}
              content={content}
              onInquiryClick={handleInquiryClick}
              onCallClick={handleCallClick}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default DestinationInnerContent;
