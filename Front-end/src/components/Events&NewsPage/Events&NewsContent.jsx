import React, { Suspense, useRef } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import useStore from '../../contexts/Store';
import { useNavigate } from "react-router-dom";
import EventCard from './EventCard';
import BlogCard from '../BlogsPage/BlogCard';
import cardLoader from '../../hooks/cardLoader';
import contentData from "../../data/BlogsData";
import "../../components/CSS/Pages/BlogsListPage.css";

const EventsNewsContent = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();
  const eventCardsRef = useRef([]);
  const blogCardsRef2 = useRef([]);
  const { events } = useStore();

  if(!isMobileView) {
    cardLoader(eventCardsRef, 'visible', 200, { threshold: 0.5 });
    cardLoader(blogCardsRef2, 'visible', 200, { threshold: 0.5 });
  }

  const handleBlogCardClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleEventCardClick = (id) => {
    navigate(`/events&news/${id}`);
  };

  return (
    <section
      id="eventsNews-content-section"
      className={`eventsNews-content-section justify-content-center d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="eventsNews-section-content justify-content-center page-section">
        <h3 className="font-primary" style={{ marginBottom: "50px" }}>
          <b>Latest Events</b>
        </h3>
        <div className="events-cards-container">
          {events.map((content, index) => (
            <EventCard 
              key={index} 
              content={content} 
              ref={el => eventCardsRef.current[index] = el}
              style={{ '--animation-order': index }}
              onClick={() => handleEventCardClick(content.id)}
            />
          ))}
        </div>
        <br></br>
        <h3 className="font-primary" style={{ marginBottom: "50px" }}>
          <b>Latest News</b>
        </h3>
        <div className="news-cards-container d-flex">
          {contentData.slice(0, 3).map((content, index) => (
            <Suspense key={index} fallback={<div>Loading...</div>}>
              <BlogCard
                key={index}
                content={content}
                ref={el => blogCardsRef2.current[index] = el}
                style={{ '--animation-order': index }}
                onClick={() => handleBlogCardClick(content.id)}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsNewsContent;
