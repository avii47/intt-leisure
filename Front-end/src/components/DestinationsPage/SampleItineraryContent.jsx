import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import DayCard from "./DayCard";
import ContactFrom from "./DContactForm";
import DGallery from "./DGallery";
import TourMap from "./MapComponent";
import "../CSS/Pages/ItineraryContent.css";

function ItineraryContent({ content }) {
  const navigate = useNavigate();
  const isMobileView = useMobileView();

  const [expandedDayId, setExpandedDayId] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState({
    start: null,
    end: null,
  });

  const handleDayCardExpand = (dayId, route) => {
    if (expandedDayId === dayId) {
      setExpandedDayId(null);
      setSelectedRoute({ start: null, end: null });
    } else {
      setExpandedDayId(dayId);
      setSelectedRoute({ start: route[0], end: route[1] });
    }
  };

  return (
    <section
      id="itinerary-content-section"
      className={`justify-content-center itinerary-content-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="itinerary-section-content justify-content-center page-section">
        <h3 className="font-primary">Itineraries Overview</h3>
        <p className="font-secondary" style={{ marginTop: "10px" }}>
          {content.overview}
        </p>

        <div className="day-card-container">
          {content.days.map((dayContent, index) => (
            <DayCard
              key={index}
              content={dayContent}
              isExpanded={expandedDayId === dayContent.id}
              onExpand={() =>
                handleDayCardExpand(dayContent.id, dayContent.route)
              }
            />
          ))}
        </div>

        <TourMap start={selectedRoute.start} end={selectedRoute.end} />
        <ContactFrom defPackageName={content.title} />
        <DGallery images={content.galleryImages} />
        
      </div>
    </section>
  );
}

export default ItineraryContent;
