import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useStore from '../../contexts/Store';
import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";
import ServiceCard from "./ServiceCard"; 
import { useMobileView } from "../../contexts/MobileViewContext";
import cardLoader from '../../hooks/cardLoader';
import "../../components/CSS/Home/ServicesSection.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesSection = () => {
  const serviceCardsRef = useRef([]);
  const navigate = useNavigate();
  const [showLeftButton2, setShowLeftButton2] = useState(false);
  const [showRightButton2, setShowRightButton2] = useState(true);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  let sliderRef = useRef(null);
  const isMobileView = useMobileView();
  const { services } = useStore();

  if(!isMobileView) {
    cardLoader(serviceCardsRef, 'visible', 200, { threshold: 0.5 });
  }

  const updateButtonVisibility2 = (currentSlide2) => {
    setShowLeftButton2(currentSlide2 > 0);
    setShowRightButton2(currentSlide2 < services.length - 4);
  };

  const handleServiceCardClick = (id) => {
    navigate(`/services/${id}`);
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide2(next),
    afterChange: (current) => updateButtonVisibility2(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 669,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      id="service-section"
      className={` d-flex justify-content-center ${
        isMobileView ? "mobile-view" : ""
      }`}
      style={{marginTop: isMobileView? '10rem':'8rem'}}
    >
      <div className="services-content justify-content-center">
        <div className="col-12 d-flex">
          <div className="col">
            <h6
              className={`font-secondary left-align`}
              style={{ fontSize: "15px", fontWeight: "350" }}
            >
              Choose Your Journey
            </h6>
            <hr style={{ width: "11rem", marginTop:'-2px' }}></hr>
            <h3 className="font-primary left-align">
              Experience the Experience
            </h3>
            <p className="font-secondary left-align">
              As you immerse yourself in this enchanting destination, we invite
              you to participate in profound self-reflection and practice
              alongside us.
            </p>
          </div>
          <div className="col-1 nav-icon-col">
            <div className="service-card-nav-icons">
              <img
                className={`nav-icon ${!showLeftButton2 ? "disabled" : ""}`}
                src={left_arrow}
                alt="previous-arrow-icon"
                onClick={previous}
              ></img>
              <img
                className={`nav-icon ${!showRightButton2 ? "disabled" : ""}`}
                src={right_arrow}
                alt="next-arrow-icon"
                onClick={next}
              ></img>
            </div>
          </div>
        </div>

        <div className="service-slider-wrapper">
          <div className="slider-container" style={{ paddingBottom: "20px" }}>
            <Slider
                ref={(slider) => {
                  sliderRef = slider
                }}
                {...settings}
              >
              {services.filter(content => content.sub1 !== "Customize").map((content, index) => (
                <ServiceCard
                  className={`service-card card card-item${index}`}
                  key={index}
                  content={content}
                  ref={(el) => (serviceCardsRef.current[index] = el)}
                  style={{ "--animation-order": index }}
                  onClick={() => handleServiceCardClick(content.id)}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
