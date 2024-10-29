import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import cardLoader from '../../hooks/cardLoader';
import "../CSS/Pages/SriLankanToursPage.css";
import ItineraryCard from './ItineraryCard';

import Slider from "react-slick";
import contentData from "../../data/EventstData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SriLankanToursContent() {

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
  
  
    if(!isMobileView) { 
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
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        beforeChange: (current, next) => setSTcurrentSlide(next),
        afterChange: (current) => updateSTButtonVisibility(current),
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true
            }
          },
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
    <section
    id="sl-tours-section"
    className={`justify-content-center sl-tours-section d-flex ${
      isMobileView ? "mobile-view" : ""
    }`}
  >
    <div className="sl-tours-content justify-content-center page-section">
      <h3 className="font-primary">Discover Sri Lanka Like An Insider</h3>
      <p className="font-secondary" style={{ marginTop: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <h3 className="font-seconadry">Sample Itineraries</h3>
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
  </section>
  )
}

export default SriLankanToursContent