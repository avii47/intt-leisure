import React, { useState } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import { useNavigate } from "react-router-dom";
import "../CSS/Home/DMCSection.css";

import CircularSlider from "../CircularSlider";

import icon1 from "../../assets/icons/spec1-icon.png";
import icon2 from "../../assets/icons/spec2-icon.png";
import bg from "../../assets/images/dmc-bg.png"

function DMCSection() {
  const isMobileView = useMobileView();
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(0); 

  const handleOnClick = (path) => {
    navigate(path);
  };

  // Callback to handle active item changes
  const handleActiveItemChange = (item) => {
    setActiveItem(item);
    console.log("Active item updated:", item); // Log for debugging or other actions
  };

  return (
    <div
      className={`DMC-container  ${isMobileView ? "mobile-view" : ""}`}
      style={{ marginTop: isMobileView ? "4rem" : "8rem" }}
    >
      <div className="DMC-content">
        <div>
          <h5 className="card-subtitle font-secondary">
            sri lanka tour packages
          </h5>
          <hr style={{ width: "13%", marginTop: "-2px", marginleft: "10px" }} />
          <h1 className="font-primary">
            Your Trusted Destination Management Company for Sri Lanka
          </h1>
          <p className="card-description font-secondary">
            No matter your travel style, we have you covered with both tailored
            and ready-made tours across Sri Lanka. From romantic escapes and
            nature-filled adventures to incentive trips and group getaways, we
            offer something special for everyone.
          </p>
        </div>

        <div className="d-flex">
          {isMobileView && (
            <>
              <div>
                <h5 className="card-subtitle font-secondary">Explore</h5>
                <hr />
              </div>

              <h1 className="font-primary">{""}</h1>

              <div
                className="col-md-6 d-flex"
                style={{ justifyContent: "center" }}
              >
                <img src={activeItem.map} alt="Tour" className="DMC-card-image-v" />
              </div>

              <p className="card-description font-secondary">
                Experience mindfulness in Sri Lanka with techniques supported
                by research and teachings rooted in original practices. Our
                approach is distinct from common Western ideologies, offering a
                unique way to deepen your mindfulness practice and find true
                relaxation.
              </p>
              <div className="card-options">
                <div className="card-option">
                  <img src={icon1} className="card-icon" />
                  <span
                    className="font-secondary"
                    style={{ fontSize: "12px" }}
                  >
                    Sri Lankan tours
                  </span>
                </div>
                <div className="card-option">
                  <img src={icon1} className="card-icon" />
                  <span
                    className="font-secondary"
                    style={{ fontSize: "12px" }}
                  >
                    Concierge Service
                  </span>
                </div>
              </div>
              <button
                className="card-button"
                onClick={() => handleOnClick(`mindfulness`)}
              >
                Learn More
              </button>
            </>
          )}

          {!isMobileView && (
            <>
              <div
                className="col-md-6 d-flex"
                style={{ justifyContent: "left" }}
              >
                <img src={activeItem.map} alt="Tour" className="DMC-card-image-v" />
              </div>
              <div className="col-md-6 DMC-card-con">
                <div className="DMC-card-content">
                <img src={bg} alt="" style={{position:'absolute', height:'500px', right:'-180px', }}/>
                  <h5 className="card-subtitle font-secondary">Explore</h5>
                  <hr style={{ width: "9%", marginTop: "-2px" }} />
                  <h1 className="font-primary" style={{ fontSize: "25px" }}>
                    {activeItem.title}
                  </h1>
                  <p className="DMC-card-description font-secondary">
                    {activeItem.description}
                  </p>
                  <div className="card-options">
                    <div className="card-option">
                      <img src={icon2} className="card-icon" />
                      <span className="font-secondary">
                        Sri Lankan tours
                      </span>
                    </div>
                    <div className="card-option">
                      <img src={icon1} className="card-icon" />
                      <span className="font-secondary">
                        Concierge Service
                      </span>
                    </div>
                  </div>
                  <button
                    className="card-button"
                    onClick={() => handleOnClick(`${activeItem.link}`)}
                  >
                    Learn More
                  </button>
                  <div className="carousel-container">
                    <CircularSlider onActiveItemChange={handleActiveItemChange} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DMCSection;
