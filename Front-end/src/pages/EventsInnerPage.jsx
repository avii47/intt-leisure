import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from '../components/LoadingSpinner';
import contentData from "../data/EventstData";
import "../components/CSS/Pages/EventsInnerPage.css";

const HeroSection = lazy(() => import("../components/ContentHeroSection"));
const EventsInnerContent = lazy(() => import("../components/Events&NewsPage/EventsInnerContent"));
const FooterSection = lazy(() => import('../components/Footer'));

const EventsInnerPage = () => {
  const { id } = useParams();

  const contentId = parseInt(id, 10);
  const content = contentData.find((item) => item.id === contentId);
  const img = "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951233.jpg?t=st=1728458926~exp=1728462526~hmac=4069696c2cd9754efe1aa650f777777495ce3a02c9b703ad0cb66ee708e17b15&w=1380";
  const topic = "Latest Events and News"

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="explore our mindfulness events and news" />
        <link rel="canonical" href="https://inttleisure.com/events&news" />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection
          img={img}
          topic={topic}
          title={content.eventTitle}
        />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <EventsInnerContent content={content} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FooterSection />
      </Suspense>
      <ScrollToTopButton />
    </>
  );
};

export default EventsInnerPage;
