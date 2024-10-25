import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import contentData from "../../data/DestinationsListData";
import MainTourCard from "../DestinationsPage/MainTourCard"
import CategoryCard from "./CategoryCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/sriLankanTours-img.jpg"
import img2 from "../../assets/images/otherTours-img.jpg"
import img3 from "../../assets/images/Group 83.png"
import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";

const DestinationsContent = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();
  const mainTourCardsRef = useRef([]);
  let sliderRef = useRef(null);
  const [showLeftButton4, setShowLeftButton4] = useState(false);
  const [showRightButton4, setShowRightButton4] = useState(true);
  const [currentSlide4, setCurrentSlide4] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    mainTourCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      mainTourCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [mainTourCardsRef]);

  const updateButtonVisibility4 = (currentSlide2) => {
    setShowLeftButton4(currentSlide2 > 0);
    setShowRightButton4(currentSlide2 < contentData.length - 4);
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

  const handleDestinationCardClick = (id) => {
    navigate(`/contact-us`);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    beforeChange: (current, next) => setCurrentSlide4(next),
    afterChange: (current) => updateButtonVisibility4(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <section
      id="destination-content-section"
      className={`destination-content-section ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="destination-section-content page-section">
          <div className="main-dcards-section-container">
            <h2 className="font-primary">Where to next?</h2>
            <p className="font-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <div className="main-cards-container">
              < CategoryCard  imageSrc={img1} title={"Sri Lankan Tours"} />
              < CategoryCard  imageSrc={img2} title={"Other Tours"} />
            </div>
          </div>
          <div className="dVideo-container">
            <img style={{width:'100%'}} src={img3} alt="" />
          </div>
          <div className="latest-tours-container">
            <h2 className="font-primary">Our Latest Tours</h2>
            <p className="font-secondary" style={{width:'95%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="row">
              <div className="div" style={{marginTop:'-40px'}}>
                  <div className="mainTourCards-nav-icons">
                    <img
                      className={`nav-icon ${!showLeftButton4 ? "disabled" : ""}`}
                      src={left_arrow}
                      onClick={previous}
                    ></img>
                    <img
                      className={`nav-icon ${!showRightButton4 ? "disabled" : ""}`}
                      src={right_arrow}
                      onClick={next}
                    ></img>
                  </div>
              </div>
            </div>

            <div className="mainTourCards-slider-wrapper">
              <div className="slider-container" style={{ paddingBottom: "20px" }}>
                <Slider
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                  {...settings}
                >
                  {contentData.map((content, index) => (
                    <MainTourCard
                      className={`mian-tour-card card-item${index}`}
                      key={index}
                      content={content}
                      ref={(el) => (mainTourCardsRef.current[index] = el)}
                      style={{ "--animation-order": index }}
                      // onClick={() => handleServiceCardClick(content.id)}
                    />
                  ))}
                </Slider>
              </div>
            </div>

            <div className="certifices-container">

            </div>
          </div>
      </div>
      
    </section>
  );
};

export default DestinationsContent;
