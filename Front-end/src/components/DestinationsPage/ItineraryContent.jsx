import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import DayCard from '../DestinationsPage/DayCard';
import ContactFrom from './DContactForm'
import DGallery from '../DestinationsPage/DGallery'
import TourMap from '../DestinationsPage/MapComponent'
import "../CSS/Pages/ItineraryContent.css";


const ItineraryContent = () => {

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
      
              <DayCard />
              <DayCard />
              <DayCard />
              <DayCard />

              <TourMap />

              <ContactFrom />

              <DGallery/>

              
      
            </div>
          </section>
    );
};

export default ItineraryContent;