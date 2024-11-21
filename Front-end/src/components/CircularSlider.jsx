// File: src/components/CircularSlider.jsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/CSS/CircularSlider.css";

import left from "../assets/icons/left.png"
import right from "../assets/icons/right.png"

import contentData from "../data/DMCSectionData";

const CircularSlider = ({ onActiveItemChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  // const sliderItems = [
  //   { id: 1, icon: icon1, label: "Surfing" },
  //   { id: 2, icon: icon2, label: "Golf" },
  //   { id: 3, icon: icon3, label: "Hiking" },
  //   { id: 4, icon: icon4, label: "Birds Watching" },
  //   { id: 5, icon: icon5, label: "Mindfulness" },
  //   { id: 6, icon: icon6, label: "Water Rafting" },
  //   { id: 7, icon: icon7, label: "Cycling" },
  //   { id: 8, icon: icon8, label: "Sri Lanka" },
  // ];

  const sliderItems = contentData;

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
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update the current slide
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
    <div className="circular-slider">
      <Slider {...settings}>
        {sliderItems.map((item, index) => {
          // Determine classes based on distance from the current slide
          const isCenter = index === currentSlide;
          const isNear = Math.abs(index - currentSlide) === 1;
          const isFar = Math.abs(index - currentSlide) === 2;

          return (
            <div
              key={item.id}
              className={`slider-item ${
                isCenter ? "center" : isNear ? "near" : isFar? "far" : "tooFar"
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
  );
};

const CustomNextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <img src={right} alt="" />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <img src={left} alt="" />
  </div>
);

export default CircularSlider;
