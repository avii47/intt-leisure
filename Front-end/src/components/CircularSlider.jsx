// File: src/components/CircularSlider.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/CSS/CircularSlider.css";

import left from "../assets/icons/left.png"
import right from "../assets/icons/right.png"

import icon1 from "../assets/icons/DMC/sea-waves.png"
import icon2 from "../assets/icons/DMC/golfer.png"
import icon3 from "../assets/icons/DMC/man-in-hike.png"
import icon4 from "../assets/icons/DMC/bird.png"
import icon5 from "../assets/icons/DMC/man.png"
import icon6 from "../assets/icons/DMC/river-rafting.png"
import icon7 from "../assets/icons/DMC/bicycle.png"
import icon8 from "../assets/icons/DMC/Map img  (1587 x 2445 px) (2).png"

const CircularSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const sliderItems = [
    { id: 1, icon: icon1, label: "Diving" },
    { id: 2, icon: icon2, label: "Dolphin" },
    { id: 3, icon: icon3, label: "Surfing" },
    { id: 4, icon: icon4, label: "Hiking" },
    { id: 5, icon: icon5, label: "Cycling" },



    
    { id: 6, icon: icon6, label: "Swimming" },
    { id: 7, icon: icon7, label: "Diving" },
    { id: 8, icon: icon8, label: "Dolphin" },
  ];

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
