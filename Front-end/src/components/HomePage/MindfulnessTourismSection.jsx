import React from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import { useNavigate } from "react-router-dom";
import "../CSS/Home/TourSection.css";

import img from "../../assets/images/Mindfulness animate.gif";
import icon1 from "../../assets/icons/spec3-icon.png";
import icon2 from "../../assets/icons/spec4-icon.png";

function MindfulnessTourismSection() {

  const isMobileView = useMobileView();
  const navigate = useNavigate();

  const handleOnClick = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`tourSection-container  ${isMobileView ? "mobile-view" : ""}`}
      style={{ marginTop: isMobileView ? "4rem" : "8rem" }}
    >
      <div className="tourSection-content">
        {isMobileView && (
          <>
            <div>
              <h5 className="card-subtitle font-secondary">Explore</h5>
              <hr style={{marginTop:'-2px'}} />
            </div>

            <h1 className="font-primary">Mindfulness Tourism</h1>

            <div
              className="col-md-6 d-flex"
              style={{ justifyContent: "center" }}
            >
              <img src={img} alt="Tour" className="tourSection-card-image-v" />
            </div>

            <p className="card-description font-secondary">
              Experience mindfulness in Sri Lanka with techniques supported by
              research and teachings rooted in original practices. Our approach
              is distinct from common Western ideologies, offering a unique way
              to deepen your mindfulness practice and find true relaxation.
            </p>
            <div className="card-options">
              <div className="card-option">
                <img src={icon2} className="card-icon" />
                <span className="font-secondary" style={{ fontSize: "12px" }}>
                  Authentic Practices
                </span>
              </div>
              <div className="card-option">
                <img src={icon1} className="card-icon" />
                <span className="font-secondary" style={{ fontSize: "12px" }}>
                  Research Based
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
              <img src={img} alt="Tour" className="tourSection-card-image-v" />
            </div>
            <div className="col-md-6 tourSection-card-con">
              <div className="tourSection-card-content">
                <h5 className="card-subtitle font-secondary">Explore</h5>
                <hr style={{ width: "9%", marginTop: "-2px" }} />
                <h1 className="font-primary">Mindfulness Tourism</h1>
                <p className="card-description font-secondary">
                  Experience mindfulness in Sri Lanka with techniques supported
                  by research and teachings rooted in original practices. Our
                  approach is distinct from common Western ideologies, offering
                  a unique way to deepen your mindfulness practice and find true
                  relaxation.
                </p>
                <div className="card-options">
                  <div className="card-option">
                    <img src={icon2} className="card-icon" />
                    <span className="font-secondary">Authentic Practices</span>
                  </div>
                  <div className="card-option">
                    <img src={icon1} className="card-icon" />
                    <span className="font-secondary">Research Based</span>
                  </div>
                </div>
                <button
                  className="card-button"
                  onClick={() => handleOnClick(`mindfulness`)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MindfulnessTourismSection;
