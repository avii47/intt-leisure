import React, { useState } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import { useNavigate } from "react-router-dom";
import "../CSS/Home/DMCSection.css";

import CircularSlider from "../CircularSlider";

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
  };

  return (
    <div
      className={`DMC-container  ${isMobileView ? "mobile-view" : ""}`}
      style={{ marginTop: isMobileView ? "4rem" : "8rem" }}
    >
      <div className="DMC-content">
        <div>
          <h5 className="card-subtitle font-secondary">
            Sri Lanka Tour Packages
          </h5>
          <hr style={{ width: isMobileView? "64%":"14%", marginTop: "-2px", marginleft: "10px" }} />
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

        <div className={`${isMobileView ? "" : "d-flex"}`}>
          {isMobileView && (
            <>
              <div className="carousel-container">
                <CircularSlider onActiveItemChange={handleActiveItemChange} />
              </div>
              <div
                className="col-md-6 d-flex"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={activeItem.map}
                  alt="Tour"
                  className="DMC-card-image-v"
                />
              </div>
              <img src={activeItem.bg} className="DMC-bg-img" alt="" />

              <div style={{height:'25rem'}}>
                <div>
                  <h5 className="DMC-card-subtitle font-secondary" >Explore</h5>
                  <hr style={{width:'20%', marginTop:'-2px', color:'white'}} />
                </div>

                <h1 className="font-primary" style={{ fontSize: "28px", color:'white' }}>
                  {activeItem.title}
                </h1>

                <p className="DMC-card-description font-secondary">
                  {activeItem.description}
                </p>
                <button
                  className="card-button"
                  onClick={() => handleOnClick(`${activeItem.link}`)}
                >
                  Learn More
                </button>
              </div>

            </>
          )}

          {!isMobileView && (
            <>
              <div
                className="col-md-2 d-flex"
                style={{ justifyContent: "left" }}
              >
                   <div className="carousel-container">
                    <CircularSlider
                      onActiveItemChange={handleActiveItemChange}
                    />
                  </div>

              </div>
              <div className="col-md-10 DMC-card-con">
              <img
                  src={activeItem.map}
                  alt="Tour"
                  className="DMC-card-image-v"
                />
                <img src={activeItem.bg} className="DMC-bg-img" key={activeItem.bg} alt={activeItem.bg} />
                <div className="DMC-card-content" key={activeItem.title}>
                  <h5 className="DMC-card-subtitle font-secondary">Explore</h5>
                  <hr style={{ width: "9%", marginTop: "-2px" }} />
                  <h1 className="font-primary" style={{ fontSize: "28px" }}>
                    {activeItem.title}
                  </h1>
                  <p className="DMC-card-description font-secondary">
                    {activeItem.description}
                  </p>
                  <button
                    className="DMC-card-button"
                    onClick={() => handleOnClick(`${activeItem.link}`)}
                  >
                    Learn More
                  </button>
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
