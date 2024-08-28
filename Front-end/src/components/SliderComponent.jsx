// SliderComponent.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css"; // Import your CSS for styling

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 768, // Tablet/mobile screen size
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="cardw">Card 1</div>
      <div className="cardw">Card 2</div>
      <div className="cardw">Card 3</div>
      {/* Add more cards as needed */}
    </Slider>
  );
};

export default SliderComponent;
