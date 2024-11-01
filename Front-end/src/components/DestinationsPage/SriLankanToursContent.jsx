import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import "../CSS/Pages/SriLankanToursPage.css";

import ItineraryCategorySection from "./ItineraryCategorySection";

function SriLankanToursContent() {

  const navigate = useNavigate();
  const isMobileView = useMobileView();



  return (
    <section
      id="sl-tours-section"
      className={`justify-content-center sl-tours-section d-flex ${isMobileView ? "mobile-view" : ""
        }`}
    >
      <div className="sl-tours-content justify-content-center page-section">
        <h3 className="font-primary">Discover Sri Lanka Like An Insider</h3>
        <p className="font-secondary" style={{ marginTop: "10px", marginBottom:'100px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <ItineraryCategorySection contentCat={"sampleItinery"} topic={"Sample Itineraries"} />
        <ItineraryCategorySection contentCat={"activityTours"} topic={"Activity Tours"} />
        <ItineraryCategorySection contentCat={"conciergeService"} topic={"Concierge Services"} />

      </div>
    </section>
  )
}

export default SriLankanToursContent