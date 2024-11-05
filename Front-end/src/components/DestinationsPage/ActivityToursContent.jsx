import React from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import ContactFrom from './DContactForm'
import DGallery from './DGallery'
import "../CSS/Pages/ItineraryContent.css";

function ActivityToursContent({content}) { 
    const navigate = useNavigate();
    const isMobileView = useMobileView();

    return (
            <section
            id="itinerary-content-section"
            className={`justify-content-center itinerary-content-section d-flex ${isMobileView ? "mobile-view" : ""
              }`}
          >
            <div className="itinerary-section-content justify-content-center page-section">
              <h3 className="font-primary">Itineraries Overview</h3>
              <p className="font-secondary" style={{ marginTop: "10px", marginBottom:'100px' }}>
                {content.overview}
              </p>

              <DGallery/>

              <ContactFrom />
              
            </div>
          </section>
    );
}

export default ActivityToursContent