import React, { useState, useEffect } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import { useNavigate } from "react-router-dom";
import useStore from '../../contexts/Store';
import "../CSS/Home/DMCSection.css";
import CircularSlider from "../CircularSlider";

function DMCSection() {
  const isMobileView = useMobileView();
  const navigate = useNavigate();
  const { dmc } = useStore();

  const [contentData, setContentData] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [preloadedImages, setPreloadedImages] = useState({});

  // Preload all images and transform dmc data
  useEffect(() => {
    const preloadImagesAndTransformData = async () => {
      const transformedData = await Promise.all(
        dmc.map(async (item) => {
          const [bg, map, icon] = await Promise.all([
            import(`../../assets/icons/${item.bg}`).then(res => res.default).catch(() => null),
            import(`../../assets/icons/${item.map}`).then(res => res.default).catch(() => null),
            import(`../../assets/icons/${item.icon}`).then(res => res.default).catch(() => null),
          ]);

          // Store preloaded images in a separate object for instant access
          setPreloadedImages((prev) => ({
            ...prev,
            [item.bg]: bg,
            [item.map]: map,
            [item.icon]: icon,
          }));

          return {
            id: item.id,
            title: item.title,
            description: item.description,
            link: item.link,
            bg,
            map,
            icon,
          };
        })
      );
      setContentData(transformedData);
      setActiveItem(transformedData[0]); // Default active item
    };

    preloadImagesAndTransformData();
  }, [dmc]);

  const handleOnClick = (path) => {
    navigate(path);
  };

  const handleActiveItemChange = (item) => {
    setActiveItem(item);
  };

  if (!contentData.length) return <div>Loading...</div>; // Loading state

  return (
    <div
      className={`DMC-container ${isMobileView ? "mobile-view" : ""}`}
      style={{ marginTop: isMobileView ? "4rem" : "8rem" }}
    >
      <div className="DMC-content">
        <div>
          <h5 className="card-subtitle font-secondary">
            Sri Lanka Tour Packages
          </h5>
          <hr
            style={{
              width: isMobileView ? "64%" : "14%",
              marginTop: "-2px",
              marginleft: "10px",
            }}
          />
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
                <CircularSlider
                  items={contentData}
                  onActiveItemChange={handleActiveItemChange}
                />
              </div>
              <div
                className="col-md-6 d-flex"
                style={{ justifyContent: "center" }}
              >
                <img
                  src={preloadedImages[activeItem?.map] || activeItem?.map}
                  alt="Tour"
                  className="DMC-card-image-v"
                />
              </div>
              <img
                src={preloadedImages[activeItem?.bg] || activeItem?.bg}
                className="DMC-bg-img"
                alt="Background"
              />

              <div style={{ height: "25rem" }}>
                <div>
                  <h5 className="DMC-card-subtitle font-secondary">Explore</h5>
                  <hr
                    style={{ width: "20%", marginTop: "-2px", color: "white" }}
                  />
                </div>

                <h1
                  className="font-primary"
                  style={{ fontSize: "28px", color: "white" }}
                >
                  {activeItem?.title}
                </h1>

                <p className="DMC-card-description font-secondary">
                  {activeItem?.description}
                </p>
                <button
                  className="card-button"
                  onClick={() => handleOnClick(`${activeItem?.link}`)}
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
                    items={contentData}
                    onActiveItemChange={handleActiveItemChange}
                  />
                </div>
              </div>
              <div className="col-md-10 DMC-card-con">
                <img
                  src={preloadedImages[activeItem?.map] || activeItem?.map}
                  alt="Tour"
                  className="DMC-card-image-v"
                />
                <img
                  src={preloadedImages[activeItem?.bg] || activeItem?.bg}
                  className="DMC-bg-img"
                  alt="Background"
                />
                <div className={`DMC-card-content`} key={activeItem?.id}>
                  <h5 className="DMC-card-subtitle font-secondary">Explore</h5>
                  <hr style={{ width: "9%", marginTop: "-2px" }} />
                  <h1 className="font-primary" style={{ fontSize: "28px" }}>
                    {activeItem?.title}
                  </h1>
                  <p className="DMC-card-description font-secondary">
                    {activeItem?.description}
                  </p>
                  <button
                    className="DMC-card-button"
                    onClick={() => handleOnClick(`${activeItem?.link}`)}
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
