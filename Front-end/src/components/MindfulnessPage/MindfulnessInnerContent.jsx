import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";
import cardLoader from "../../hooks/cardLoader";
import { useMobileView } from "../../contexts/MobileViewContext";
import contentData from "../../data/WhyChooseUsSectionData";
import "../../components/CSS/Home/WhyChooseUsSection.css";

import ContentCard from "./PkgCard"
import PkgContentData from "../../data/ServicePageData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../CSS/Pages/MindfulnessInnerPage.css";

function MindfulnessInnerContent({ content }) {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const pkgCardsRef = useRef([]);
  let sliderRef = useRef(null);

  const isMobileView = useMobileView();
  const navigate = useNavigate();

  if (!isMobileView) {
    cardLoader(pkgCardsRef, "visible", 200, { threshold: 0.5 });
  }

  const updateButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateButtons();
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", updateButtons);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", updateButtons);
      }
    };
  }, []);

  const updateButtonVisibility = (currentSlide) => {
    setShowLeftButton(currentSlide > 0);
    setShowRightButton(currentSlide < contentData.length - 4);
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
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => updateButtonVisibility(current),
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
        breakpoint: 1600,
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

  const handleServiceCardClick = (id) => {
    if (id === 6) {
      navigate("/contact-us");
    } else {
      navigate(`/services/${id}`);
    }
  };

  return (
    <div
      className={`mindfulnessInner-section ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="mindfulnessInner-content page-section">
        <h5 className="card-subtitle font-secondary">Explore</h5>
        <hr style={{ width: isMobileView ? "20%" : "4%", marginTop: "8px" }} />
        <h1 className="font-primary mindfulnessInner-title" style={{ marginBottom: "0px" }}>
          {content.title}
        </h1>
        {content.content.map((para, i) => (
          <p className="font-secondary" style={{ marginTop: "20px" }} key={i}>
            {para}
          </p>
        ))}

        <div className="col-12 d-flex">
          <div className="col pkg-text-col">
            <h3 className="font-primary mindfulnessInner-title">Choose your Journey</h3>
            <p className="font-secondary" style={{ marginTop: "10px" }}>
              As you immerse yourself in this enchanting destination, we invite
              you to participate in profound self-reflection and practice
              alongside us.
            </p>
          </div>
          <div className="col-1 nav-icon-col">
            <div className="pkg-nav-icons">
              <img
                className={`nav-icon ${!showLeftButton ? "disabled" : ""}`}
                src={left_arrow}
                onClick={previous}
              ></img>
              <img
                className={`nav-icon ${!showRightButton ? "disabled" : ""}`}
                src={right_arrow}
                onClick={next}
              ></img>
            </div>
          </div>
        </div>
        <div className="pkg-container-wrapper">
          <div
            className="slider-container"
            style={{ paddingBottom: "20px", textAlign: "center" }}
          >
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
          {PkgContentData.map((content, index) => (
            <ContentCard
              key={index}
              content={content}
              ref={el => pkgCardsRef.current[index] = el}
              style={{ '--animation-order': index }}
              onClick={() => handleServiceCardClick(content.id)}
            />
          ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MindfulnessInnerContent;
