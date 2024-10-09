import React, { useEffect, Suspense, lazy } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import { useNavigate } from "react-router-dom";
import eventstData from "../../data/EventstData";
import contentData from "../../data/BlogListData";
import "../../components/CSS/Pages/BlogsListPage.css";

const EventCard = lazy(() => import("../Events&NewsPage/EventCard"));
const NewsCard = lazy(() => import("../Events&NewsPage/NewsCard"));
const BlogCard = lazy(() => import("../BlogsPage/BlogCard"));

const EventsNewsContent = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.getElementById("rw1");
    const textSection = document.getElementById("text1");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add("animate-text");
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
    const section = document.getElementById("rw2");
    const textSection = document.getElementById("text2");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add("animate-text");
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
    const section = document.getElementById("rw3");
    const textSection = document.getElementById("text3");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add("animate-text");
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

  const handleBlogCardClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleEventCardClick = (id) => {
    navigate(`/events&news/${id}`);
  };

  return (
    <section
      id="eventsNews-content-section"
      className={`section eventsNews-content-section justify-content-center d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="eventsNews-section-content justify-content-center">
        <h3 className="font-primary" style={{ marginBottom: "50px" }}>
          <b>Latest Events</b>
        </h3>
        <div className="events-cards-container">
          {eventstData.map((content, index) => (
            <EventCard 
              key={index} 
              content={content} 
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
                content={content}
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
