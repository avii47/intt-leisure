import React, { useState, useEffect } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import "./BookingForm.css";
import PackageCard from "../BookNowPage/PackageCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mindfulnessContentData from "../../data/ServicePageData";
import sampleItineraryContentData from "../../data/SampleItineraryContentData";
import activityToursContentData from "../../data/ActivityToursContentData";
import conciergeServiceContentData from "../../data/ConciergeServiceContentData";
import otherToursContentData from "../../data/OtherToursData";

function PackageSelector({ onSelectPackage, onTabChange }) {
  const isMobileView = useMobileView();
  const [selectedCard, setSelectedCard] = useState({
    tabId: null,
    cardIndex: null,
  });
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  const sriLankanContentData = [
    ...sampleItineraryContentData,
    ...activityToursContentData,
    ...conciergeServiceContentData,
  ];

  const tabs = [
    {
      id: 0,
      label: "Mindfulness Tours",
      content: mindfulnessContentData,
    },
    {
      id: 1,
      label: "Sri Lankan Tours",
      content: sriLankanContentData,
    },
    {
      id: 2,
      label: "Other Tours",
      content: otherToursContentData,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleCardClick = (tabId, index, title) => {
    setSelectedCard({ tabId, cardIndex: index });
    if (onSelectPackage) {
      onSelectPackage(title); 
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId); 
    }
  };

  return (
    <div
      className={`package-selector-section ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="package-selector-content">
        <h3 className="font-primary" style={{ fontSize: "25px" }}>
          Select Your Experience
        </h3>

        <div className="package-card-container">
          {/* Tab Controls */}
          <div className="tab-controls">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <TransitionGroup>
            <CSSTransition key={activeTab} classNames="fade" timeout={300}>
              <div className="tab-content">
                <div className={`loading-indicator ${loading ? "visible" : ""}`} >
                  <LoadingSpinner />
                </div>
                <div className={`pkg-card-container ${loading ? "" : "visible"}`} >
                  <Slider {...settings}>
                    {tabs[activeTab].content.map((content, index) => (
                      <div key={index} className="slider-item2">
                        <PackageCard
                          content={content}
                          onClick={() =>
                            handleCardClick(activeTab, index, content.title)
                          }
                          isSelected={
                            selectedCard.tabId === activeTab &&
                            selectedCard.cardIndex === index
                          }
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default PackageSelector;
