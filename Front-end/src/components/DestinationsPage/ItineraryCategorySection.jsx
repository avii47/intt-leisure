import React, { useState, useRef } from "react";
import useStore from '../../contexts/Store';
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import cardLoader from '../../hooks/cardLoader';
import ItineraryCard from './ItineraryCard';
import "../CSS/ItineraryCategorySection.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";

function ItineraryCategorySection({ contentCat, topic, exclude }) {

    const { sampleItineraries, activityTours, conciergeServices, otherTours } = useStore();

    let contentData = [];
    if (contentCat === "sampleItinery") {
        contentData = sampleItineraries;
    } else if (contentCat === "activityTours") {
        contentData = activityTours;
    } else if (contentCat === "conciergeService") {
        contentData = conciergeServices;
    } else if (["dubai", "indonesia", "thailand"].includes(contentCat)) {
        otherTours.forEach((content) => {
            if (content.tag === contentCat) {
                contentData.push(content);
            }
        });
    }
    

    const navigate = useNavigate();
    const isMobileView = useMobileView();

    const itineraryCardsRef = useRef([]);

    const [STshowLeftButton, setSTshowLeftButton] = useState(false);
    const [STshowRightButton, setSTshowRightButton] = useState(true);
    const [setItineraryCurrentSlide] = useState(0);

    let itinerarySliderRef = useRef(null);

    if (!isMobileView) {
        cardLoader(itineraryCardsRef, 'visible', 200, { threshold: 0.5 });
    }

    const updateSliderButtonVisibility = (currentSlide) => {
        setSTshowLeftButton(currentSlide > 0);
        setSTshowRightButton(currentSlide < contentData.length - settings.slidesToShow);
    };

    const handleItineraryCardClick = (id) => {
        if(contentCat === 'sampleItinery' || contentCat === 'activityTours' || contentCat === 'conciergeService') {
            navigate(`/destinations/sriLankan/${contentCat}/${id}`);
        }
        else if(contentCat === 'dubai' || contentCat === 'indonesia' || contentCat === 'thailand') {
            navigate(`/destinations/other/${contentCat}/${id}`);
        }
        
    };

    const next = () => {
        itinerarySliderRef.slickNext();
    };
    const previous = () => {
        itinerarySliderRef.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next) => setItineraryCurrentSlide(next),
        afterChange: (current) => updateSliderButtonVisibility(current),
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 669,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="itinerary-category-section">
            <h3 className="font-seconadry">{topic}</h3>
            <div className="row" style={{ display: isMobileView ? "none" : "flex" }} >
                <div className="div" style={{ marginTop: "-40px" }}>
                    <div className="mainTourCards-nav-icons">
                        <img
                            className={`nav-icon ${!STshowLeftButton ? "disabled" : ""}`}
                            src={left_arrow}
                            onClick={previous}
                            alt="Previous"
                        />
                        <img
                            className={`nav-icon ${!STshowRightButton ? "disabled" : ""}`}
                            src={right_arrow}
                            onClick={next}
                            alt="Next"
                        />
                    </div>
                </div>
            </div>
            <div className='itinerary-wrapper'>
                <div className="slider-container" style={{ paddingBottom: '100px' }} >
                    <Slider ref={slider => { itinerarySliderRef = slider; }} {...settings}>
                        {contentData
                            .filter((content) => content.id !== exclude )
                            .map((content, index) => (
                                <ItineraryCard
                                    key={index}
                                    content={content}
                                    ref={(el) => (itineraryCardsRef.current[index] = el)}
                                    style={{ "--animation-order": index }}
                                    onClick={() => handleItineraryCardClick(content.id)}
                                />
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ItineraryCategorySection;
