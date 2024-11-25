import React from "react";
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
        <h3 className="font-primary">Wander the World</h3>
        <p className="font-secondary" style={{ marginTop: "10px", marginBottom:'100px' }}>
         Curated global journeys to the world’s most iconic destinations, crafted for those seeking unforgettable experiences and exclusive adventures.
        </p>

        <ItineraryCategorySection contentCat={"dubai"} topic={"Dubai Tours"} />
        <ItineraryCategorySection contentCat={"indonesia"} topic={"Indonesia Tours"} />
        {/* <ItineraryCategorySection contentCat={"thailand"} topic={"Thailand Tours"} /> */}

      </div>
    </section>
  )
}

export default OtherToursContent