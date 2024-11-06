import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from '../components/LoadingSpinner';
import "../components/CSS/Pages/EventsInnerPage.css";

import sampleItineryContentData from "../data/SampleItineraryContentData";
import activityToursContentData from "../data/ActivityToursContentData";
import ConciergeServiceContentData from "../data/ConciergeServiceContentData";
import OtherToursContentData from "../data/OtherToursData";

const HeroSection = lazy(() => import("../components/ContentHeroSection"));
const ItineraryContent = lazy(() => import("../components/DestinationsPage/SampleItineraryContent"));
const OtherItineraryContent = lazy(() => import("../components/DestinationsPage/OtherItineraryContent"));
const ActivityToursContent = lazy(() => import("../components/DestinationsPage/ActivityToursContent"));
const ConciergeServicesContent = lazy(() => import("../components/DestinationsPage/ConciergeServicesContent"));
const FooterSection = lazy(() => import("../components/FooterSection"));

const ItineraryPage = () => {
  const { category, id } = useParams();

  const contentId = parseInt(id, 10);
  let itineraryContent;
  let content;
  const img = "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951233.jpg?t=st=1728458926~exp=1728462526~hmac=4069696c2cd9754efe1aa650f777777495ce3a02c9b703ad0cb66ee708e17b15&w=1380";

  switch (category) {
    case 'sampleItinery':
      content = sampleItineryContentData.find((item) => item.id === contentId);
      itineraryContent = <ItineraryContent content={content} />;
      break;
    case 'activityTours':
      content = activityToursContentData.find((item) => item.id === contentId);
      itineraryContent = <ActivityToursContent content={content} />;
      break;
    case 'conciergeService':
      content = ConciergeServiceContentData.find((item) => item.id === contentId);
      itineraryContent = <ConciergeServicesContent content={content} />;
      break;
    default:
      content = OtherToursContentData.find((item) => item.id === contentId);
      itineraryContent = <OtherItineraryContent content={content} />;
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="explore our mindfulness events and news" />
        <link rel="canonical" href="https://inttleisure.com/events&news" />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection
          topic={content.title}
          title={content.subTitle}
        />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {itineraryContent}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FooterSection />
      </Suspense>
      <ScrollToTopButton />
    </>
  );
};

export default ItineraryPage;