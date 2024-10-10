import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";

import "../../components/CSS/Home/Events&NewsSection.css";
import Slider from "react-slick";
import contentData from "../../data/Events&NewsSectionData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";

const ContentCard = lazy(() => import("../HomePage/ContentCard"));
const ContactUsForm = lazy(() => import("../ContactUsForm"));

const OtherEventsSection = ({exclue}) => {

  const [showLeftButton3, setShowLeftButton3] = useState(false);
  const [showRightButton3, setShowRightButton3] = useState(true);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const navigate = useNavigate();
  let sliderRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById("eventsNews-section");
    const cardSection = document.getElementById("eventsNews-cards");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardSection.classList.add("animate-cards");
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

  const handleOnClick = (path) => {
    navigate(path);
  };

  const updateButtonVisibility3 = (currentSlide3) => {
    setShowLeftButton3(currentSlide3 > 0);
    setShowRightButton3(currentSlide3 < contentData.length - 3);
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
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (current, next) => setCurrentSlide3(next),
    afterChange: (current) => updateButtonVisibility3(current),
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1600,
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
      <div className="eventsNews-content2 justify-content-center">
        <div className="col-12 d-flex">
          <div className="col">
            <h3 className="font-primary">Other Events</h3>
          </div>
          <div className="col-1 nav-icon-col">
            <div className="service-card-nav-icons" style={{ marginTop: "0" }}>
              <img
                className={`nav-icon ${!showLeftButton3 ? "disabled" : ""}`}
                src={left_arrow}
                onClick={previous}
              ></img>
              <img
                className={`nav-icon ${!showRightButton3 ? "disabled" : ""}`}
                src={right_arrow}
                onClick={next}
              ></img>
            </div>
          </div>
        </div>
        <div className="eventsNews-wrapper2">
          <div
            id="eventsNews-cards"
            className="slider-container"
            style={{ paddingBottom: "0", textAlign: "center" }}
          >
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
            {contentData
              .filter(content => content.id !== exclue)  
              .map((content, index) => (
                <ContentCard
                  key={index}
                  content={content}
                  onClick={() => handleOnClick(`/events&news/${content.id}`)}
                />
              ))
            }
            </Slider>
          </div>
        </div>
      </div>
  );
};

function EventsInnerContent({ content }) {
  const isMobileView = useMobileView();

  return (
    <section
      id="event-content-section"
      className={`section event-content-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="event-section-content">
        <h2 className="font-primary event-inner-heading">
          {content.eventTitle}
        </h2>
        <div className="col-12 d-flex" style={{marginTop:'50px', gap:'50px'}}>
          <div className="col-md-6">
            <img src={content.img} className="event-img" alt={content.eventTitle} />
          </div>
          <div className="col-md-6">
            <div className="meta-tags3">
                <p className="Font-secondary event-date-place3">
                  <i class="fa-regular fa-calendar-check events-meta-icons2"></i>
                  {content.tag}
                </p>
                <p className="Font-secondary event-date-place3">
                  <i className="fa-solid fa-calendar-days events-meta-icons2"></i>
                  {content.date}
                </p>
                <p className="Font-secondary event-date-place3">
                  <i className="fa-regular fa-clock events-meta-icons2"></i>
                  {content.time}
                </p>
                <p className="Font-secondary event-date-place3">
                  <i className="fa-solid fa-location-dot events-meta-icons2"></i>
                  {content.venue}
                </p>
            </div>
          </div>
        </div>

        {content.description && (
          <ul className="event-details-list">
            {content.description.map((desc, index) => (
              <li key={index} className="font-secondary event-des-list">
                {desc}
              </li>
            ))}
          </ul>
        )}

        <Suspense fallback={<div>Loading...</div>}>
          <ContactUsForm/>
        </Suspense>

        <OtherEventsSection exclue={content.id} />

      </div>
    </section>
  );
}

export default EventsInnerContent;
