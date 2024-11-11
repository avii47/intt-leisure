import React, { useState, useEffect, Suspense } from "react";
import "./BookingForm.css";
import PackageCard from "../BookNowPage/PackageCard";
import LoadingSpinner from "../../components/LoadingSpinner";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mindfulnessContentData from "../../data/ServicePageData";
import sampleItineraryContentData from "../../data/SampleItineraryContentData";
import activityToursContentData from "../../data/ActivityToursContentData";
import conciergeServiceContentData from "../../data/ConciergeServiceContentData";
import otherToursContentData from "../../data/OtherToursData";

function PackageSelector({ onSelectPackage, onTabChange }) {
  const [selectedCard, setSelectedCard] = useState({ tabId: null, cardIndex: null });
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
    dots: true,
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
    const timer = setTimeout(() => setLoading(false), 500); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleCardClick = (tabId, index, title) => {
    setSelectedCard({ tabId, cardIndex: index });
    onSelectPackage(title);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId); // Notify BookingForm of the tab change
  };

  return (
    <>
      <h3 className="font-primary" style={{ fontSize: "30px" }}>
        Select Your Experience
      </h3>

      <div className="package-card-container">
        {/* Tab Controls */}
        <div className="tab-controls">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {loading ? (
            <div className="loading-indicator"><LoadingSpinner /></div>
          ) : (
            <Slider {...settings}>
              {tabs[activeTab].content.map((content, index) => (
                <div key={index} className="slider-item">
                    <PackageCard
                      content={content}
                      onClick={() => handleCardClick(activeTab, index, content.title)}
                      isSelected={
                        selectedCard.tabId === activeTab && selectedCard.cardIndex === index
                      }
                    />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
}

export default PackageSelector;
