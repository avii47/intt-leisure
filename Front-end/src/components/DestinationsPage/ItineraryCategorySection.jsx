import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import cardLoader from '../../hooks/cardLoader';
import ItineraryCard from './ItineraryCard';
import "../CSS/ItineraryCategorySection.css";

import Slider from "react-slick";
import contentData from "../../data/EventstData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";

function ItineraryCategorySection({ content, topic }) {

    const navigate = useNavigate();
    const isMobileView = useMobileView();

    const STCardsRef = useRef([]);
    const ATCardsRef = useRef([]);
    const CTCardsRef = useRef([]);

    const [STshowLeftButton, setSTshowLeftButton] = useState(false);
    const [STshowRightButton, setSTshowRightButton] = useState(true);
    const [STcurrentSlide, setSTcurrentSlide] = useState(0);

    const [ATshowLeftButton, setATshowLeftButton] = useState(false);
    const [ATshowRightButton, setATshowRightButton] = useState(true);
    const [ATcurrentSlide, setATcurrentSlide] = useState(0);

    const [CTshowLeftButton, setCTshowLeftButton] = useState(false);
    const [CTshowRightButton, setCTshowRightButton] = useState(true);
    const [CTcurrentSlide, setCTcurrentSlide] = useState(0);

    let STsliderRef = useRef(null);
    let ATsliderRef = useRef(null);
    let CTsliderRef = useRef(null);


    if (!isMobileView) {
        cardLoader(STsliderRef, 'visible', 200, { threshold: 0.5 });
        cardLoader(ATsliderRef, 'visible', 200, { threshold: 0.5 });
        cardLoader(CTsliderRef, 'visible', 200, { threshold: 0.5 });
    }

    const handleOnClick = (path) => {
        navigate(path);
    };

    const updateSTButtonVisibility = (STcurrentSlide) => {
        setSTshowLeftButton(STcurrentSlide > 0);
        setSTshowRightButton(STcurrentSlide < contentData.length - 3);
    };

    const next = () => {
        STsliderRef.slickNext();
    };
    const previous = () => {
        STsliderRef.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next) => setSTcurrentSlide(next),
        afterChange: (current) => updateSTButtonVisibility(current),
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
                        ></img>
                        <img
                            className={`nav-icon ${!STshowRightButton ? "disabled" : ""}`}
                            src={right_arrow}
                            onClick={next}
                        ></img>
                    </div>
                </div>
            </div>
            <div className='itinerary-wrapper'>
                <div className="slider-container" style={{ paddingBottom: '100px' }} >
                    <Slider ref={slider => { STsliderRef = slider; }} {...settings}>
                        {contentData
                            .map((content, index) => (
                                <ItineraryCard
                                    title="Itinerary Title"
                                    duration="04 Nights / 05 Days"
                                    description="You will be met on arrival at the Bandaranaike International Airport by our INTT leisure..."
                                    image="path-to-image.jpg"
                                />
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ItineraryCategorySection