import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import "../CSS/Pages/SriLankanToursPage.css";

import ItineraryCategorySection from "./ItineraryCategorySection";

function OtherToursContent() {

  const navigate = useNavigate();
  const isMobileView = useMobileView();
  return (
    <section
      id="sl-tours-section"
      className={`justify-content-center sl-tours-section d-flex ${isMobileView ? "mobile-view" : ""
        }`}
    >
      <div className="sl-tours-content justify-content-center page-section">
        <h3 className="font-primary">Discover the World like a Traveler</h3>
        <p className="font-secondary" style={{ marginTop: "10px", marginBottom:'100px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <ItineraryCategorySection contentCat={"dubai"} topic={"Dubai Tours"} />
        <ItineraryCategorySection contentCat={"indonesia"} topic={"Indonesia Tours"} />
        <ItineraryCategorySection contentCat={"thailand"} topic={"Thailand Tours"} />

      </div>
    </section>
  )
}

export default OtherToursContent