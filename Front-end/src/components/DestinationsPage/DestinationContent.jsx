import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import contentData from "../../data/OtherToursData";
import TourCard from "./TourCard";
import MainTourCard from "./MainTourCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/destination-sl.jpg"
import img2 from "../../assets/images/otherTours-img.jpg";
import logo_light from "../../assets/icons/INTT Leisure Logo-02.png";
import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";
import dLogo1 from "../../assets/images/d-logo1.png";
import dLogo2 from "../../assets/images/d-logo2.png";
import dLogo3 from "../../assets/images/d-logo3.png";

const DestinationsContent = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isCursorMoving, setIsCursorMoving] = useState(true);
  const tourCardsRef = useRef([]);
  let sliderRef = useRef(null);
  let inactivityTimeout;
  const [showLeftButton4, setShowLeftButton4] = useState(false);
  const [showRightButton4, setShowRightButton4] = useState(true);
  const [currentSlide4, setCurrentSlide4] = useState(0);

  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [showLogo, setShowLogo] = useState(false);
  const fullText1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const fullText2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const contentRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      let index1 = 0;
      const typingInterval1 = setInterval(() => {
        setTypedText1((prev) => prev + fullText1[index1]);
        index1++;
        if (index1 === fullText1.length) {
          clearInterval(typingInterval1);
          // Start typing second paragraph once the first completes
          let index2 = 0;
          const typingInterval2 = setInterval(() => {
            setTypedText2((prev) => prev + fullText2[index2]);
            index2++;
            if (index2 === fullText2.length) {
              clearInterval(typingInterval2);
              setShowLogo(true); // Show logo after second paragraph completes
            }
          }, 50);
        }
      }, 50);
    }
  }, [isSectionVisible]);

  useEffect(() => {
    const section = document.getElementById("main-cards-container");
    const card1 = document.getElementById("card-right");
    const card2 = document.getElementById("card-left");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card1.classList.add("animate");
          card2.classList.add("animate");
        }
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

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

    tourCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      tourCardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [tourCardsRef]);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsCursorMoving(true);
      clearTimeout(inactivityTimeout);

      inactivityTimeout = setTimeout(() => {
        setIsCursorMoving(false);
      }, 5000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(inactivityTimeout);
    };
  }, []);

  const updateButtonVisibility4 = (currentSlide2) => {
    setShowLeftButton4(currentSlide2 > 0);
    setShowRightButton4(currentSlide2 < contentData.length - 4);
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const handleTourCardClick = (id,tag) => {
    navigate(`/destinations/other/${tag}/${id}`);
  };

  const handleMainCardClick = (cat) => { 
    if(cat === "sl"){
      navigate(`/destinations/sriLankan`);
    }
    else if(cat === "other"){
      navigate(`/destinations/other`);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide4(next),
    afterChange: (current) => updateButtonVisibility4(current),
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
    <section
      id="destination-content-section"
      className={`destination-content-section ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="destination-section-content page-section">
        <div className="main-dcards-section-container">
          <h2 className="font-primary">Where to next?</h2>
          <p className="font-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div id="main-cards-container" className="main-cards-container">
            <div id="card-left" className="card-left col-md-6">
              <MainTourCard imageSrc={img1} title="Sri Lankan Tours" onClick={() => handleMainCardClick("sl")} />
            </div>
            <div id="card-right" className="card-right col-md-6">
              <MainTourCard imageSrc={img2} title="Other Tours" onClick={() => handleMainCardClick("other")} />
            </div>
          </div>
        </div>

        <div className="dVideo-section-container d-flex" ref={contentRef}>
          <div className="overlayer"></div>
          <video
            src={require("../../assets/INTL Web Video.mp4")}
            type="video/mp4"
            autoPlay
            loop
            muted
            preload="auto"
          />
          <div className="dVideo-content d-flex">
            <div className="col-md-6 d-flex" style={{justifyContent:'center'}}>
              {/* {!isMobileView && <img src={playIcon} alt="" />} */}
            </div>
            <div className="col-md-6 dText-col" >
              <h2 className="font-primary">Sri Lanka</h2>
              <br />
              <p className="font-secondary">{typedText1}</p>
              <p className="font-secondary">{typedText2}</p>
              {showLogo && (
                <div className="dLogo-container">
                  <img
                    src={logo_light}
                    className="dLogo fade-in-logo"
                    alt="Company Logo"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="latest-tours-container">
          <h2 className="font-primary">Our Latest Tours</h2>
          <p className="font-secondary" style={{ width: "95%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div
            className="row"
            style={{ display: isMobileView ? "none" : "flex" }}
          >
            <div className="div" style={{ marginTop: "-40px" }}>
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
                  <TourCard
                    className={`mian-tour-card card-item${index}`}
                    key={index}
                    content={content}
                    ref={(el) => (tourCardsRef.current[index] = el)}
                    style={{ "--animation-order": index }}
                    onClick={() => handleTourCardClick(content.id, content.tag)}
                  />
                ))}
              </Slider>
            </div>
          </div>

          <div className="certifices-section-container">
            <h2 className="font-primary">Our Certifications</h2>
            <div className="certifices-container d-flex">
              <div className="col-md-4" style={{textAlign:'center'}}>
                <img className="dlogo" src={dLogo1} alt="Sri Lankan Tourism Development Authority logo" />
                <h3 className="font-secondary dlogo-txt">Sri Lankan Tourism Development Authority</h3>
              </div>
              <div className="col-md-4" style={{textAlign:'center'}}>
                <img className="dlogo" src={dLogo2} alt="IATA Accredited Agent logo" />
                <h3 className="font-secondary dlogo-txt">IATA Accredited Agent</h3>
              </div>
              <div className="col-md-4" style={{textAlign:'center'}}>
                <img className="dlogo" src={dLogo3} alt="Sri Lankan Aviation Authority Sri Lanka logo" />
                <h3 className="font-secondary dlogo-txt">Sri Lankan Aviation Authority Sri Lanka</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DestinationsContent;
