import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../components/ScrollToTopButton";
import contentData from "../data/EventstData";
import "../components/CSS/Pages/EventsInnerPage.css";

const HeroSection = lazy(() => import("../components/HeroSection"));
const EventsInnerContent = lazy(() => import("../components/Events&NewsPage/EventsInnerContent"));
const FooterSection = lazy(() => import("../components/FooterSection"));

const EventsInnerPage = () => {
  const { id } = useParams();

  const contentId = parseInt(id, 10);
  const content = contentData.find((item) => item.id === contentId);
  const img = "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951233.jpg?t=st=1728458926~exp=1728462526~hmac=4069696c2cd9754efe1aa650f777777495ce3a02c9b703ad0cb66ee708e17b15&w=1380";

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="find best package for you" />
        <link rel="canonical" href="https://inttleisure.com/services" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection
          img={img}
          title={content.eventTitle}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <EventsInnerContent content={content} />
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <EventsNewsSection />
      </Suspense> */}
      <Suspense fallback={<div>Loading...</div>}>
        <FooterSection />
      </Suspense>
      <ScrollToTopButton />
    </>
  );
};

export default EventsInnerPage;
