import React from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import ContactFrom from "../BookNowPage/BookingForm";
import DGallery from "./DGallery";
import "../CSS/Pages/ItineraryContent.css";

import ItineraryCategorySection from "./ItineraryCategorySection";

function OtherItineraryContent({ content }) {

  const isMobileView = useMobileView();

  return (
    <section
      id="itinerary-content-section"
      className={`justify-content-center itinerary-content-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="itinerary-section-content justify-content-center page-section">
        <h3 className="font-primary">Tour Overview</h3>
        <p className="font-secondary" style={{ marginTop: "10px" }}>
          {content.overview}
        </p>
        <h6
          className="font-secondary"
          style={{ fontSize: "22px", marginTop: "40px" }}
        >
          Inclusion
        </h6>
        <ul className="other-tours-inclusion-list">
          {content.inclusions.map((item, i) => (
            <li
              key={i}
              className="font-secondary"
              style={{ marginTop: "20px" }}
            >
              <strong>{item.name}</strong>
              <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                {item.details.map((detail, j) => (
                  <li className="font-secondary" key={j} style={{ marginTop: "5px" }}>
                    {detail}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <DGallery images={content.galleryImages} />

        <ContactFrom defPackageName={content.title} />

        <ItineraryCategorySection
          contentCat={"dubai"}
          topic={"you may also like"}
        />
      </div>
    </section>
  );
}

export default OtherItineraryContent;
