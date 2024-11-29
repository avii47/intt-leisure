import React, { useState, useEffect } from "react";
import { useMobileView } from "../contexts/MobileViewContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/CSS/CircularSlider.css";

import contentData from "../data/DMCSectionData";

const CircularSlider = ({ onActiveItemChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const isMobileView = useMobileView();

  const sliderItems = contentData;

  const totalItems = sliderItems.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    vertical: true, // Enable vertical scrolling
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
          centerMode: true,
          vertical: true, // Ensure vertical mode on mobile too
        },
      },
    ],
  };

  // Function to get the active item
  const getActiveItem = () => sliderItems[currentSlide];

  // Call the callback prop whenever the active item changes
  useEffect(() => {
    if (onActiveItemChange) {
      const activeItem = getActiveItem();
      onActiveItemChange(activeItem); // Pass the active item to the parent
    }
  }, [currentSlide, onActiveItemChange]); // Run on currentSlide change

  return (
    <div className={`DMC-container  ${isMobileView ? "mobile-view" : ""}`}>
      <div className="circular-slider">
        <Slider {...settings}>
          {sliderItems.map((item, index) => {
            // Determine classes based on distance from the current slide with wraparound logic
            const distance = (index - currentSlide + totalItems) % totalItems;
            const isCenter = distance === 0;
            const isNear = distance === 1 || distance === totalItems - 1;
            const isFar = distance === 2 || distance === totalItems - 2;

            return (
              <div
                key={item.id}
                className={`slider-item ${
                  isCenter
                    ? "center"
                    : isNear
                    ? "near"
                    : isFar
                    ? "far"
                    : "tooFar"
                }`}
              >
                <div className="slider-icon">
                  <img className="" src={item.icon} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => (
  <div className="arrow-cs prev" onClick={onClick}>
    <i class="fa fa-angle-up" aria-hidden="true" style={{ transform: "rotate(30deg)"}}></i>
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div className="arrow-cs next" onClick={onClick}>
    <i class="fa fa-angle-down" aria-hidden="true" style={{ transform: "rotate(-30deg)"}}></i>
  </div>
);

export default CircularSlider;
