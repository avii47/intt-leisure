import React, { useEffect, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import contentData from "../../data/DestinationsListData";

import img1 from "../../assets/images/Group 146.png"
import img2 from "../../assets/images/Group 147.png"

const TourCard = lazy(() => import("../DestinationsPage/DestinationCard"));

const DestinationsContent = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();

  const handleDestinationCardClick = (id) => {
    navigate(`/contact-us`);
  };

  return (
    <section
      id="destination-content-section"
      className={`destination-content-section ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="destination-section-content page-section">
          <h2 className="font-primary">Where to next?</h2>
          <p className="font-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="main-dcards-container">
            <div className="main-dcard">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>
      </div>
      
    </section>
  );
};

export default DestinationsContent;
