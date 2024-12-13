import React, { lazy, Suspense, useState, useEffect } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import useImage from '../../hooks/useImage'
import "../../components/CSS/Home/Events&NewsSection.css";

const ContactUsForm = lazy(() => import("../ContactUsForm"));
const EventsNewsSection = lazy(() => import('../../components/HomePage/Events&NewsSection'));


function EventsInnerContent({ content }) {
  const isMobileView = useMobileView();
  const [showVideo, setShowVideo] = useState(false);
  const { loading, error, image } = useImage(content.img)

  useEffect(() => {
    setShowVideo(content.id === 2);
  }, [content.id]);

  return (
    <section
      id="event-content-section"
      className={`event-content-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="event-section-content page-section">
        <div
          className="col-12 d-flex"
          style={{ marginTop: isMobileView ? '-20px':'50px', flexDirection: isMobileView ? 'column' : 'row'}}
        >
          <div className="col-md-6" style={{paddingRight: isMobileView ? '0px': '50px'}}>
            <h2 className="font-primary event-inner-heading">
              {content.eventTitle}
            </h2>
            <div className="meta-tags2 d-flex">
              <div className="col-sm-3">
                <p className="Font-secondary event-date-place3">
                  <i class="fa-regular fa-calendar-check events-meta-icons"></i>
                  {content.tag}
                </p>
              </div>
              <div className="col-sm-3">
                <p className="Font-secondary event-date-place3">
                  <i className="fa-solid fa-calendar-days events-meta-icons"></i>
                  {content.date}
                </p>
              </div>
              <div className="col-sm-3">
                <p className="Font-secondary event-date-place3">
                  <i className="fa-regular fa-clock events-meta-icons"></i>
                  {content.time}
                </p>
              </div>
              <div className="col-sm-3">
                <p className="Font-secondary event-date-place3">
                  <i className="fa-solid fa-location-dot events-meta-icons"></i>
                  {content.venue}
                </p>
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
          </div>
          <div className="col-md-6" style={{paddingLeft: isMobileView ? '0px': '50px'}}>
            {showVideo ? (
              <iframe
                loading='lazy'
                className='event-iframe'
                src='https://www.youtube.com/embed/Q-iNjiyz1Xk'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                
              />
            ) : (
              <img
                src={image}
                alt={`${content.eventTitle}-image`}
                className="event-img"
              />
            )}

          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <ContactUsForm />
        </Suspense>

        <div className="other-events-container">
          <EventsNewsSection exclue={content.id} />
        </div>

        
      </div>
    </section>
  );
}

export default EventsInnerContent;
