import React, { useEffect, Suspense, lazy } from "react";
import useStore from "../contexts/Store";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from "../components/LoadingSpinner";
import "../components/CSS/Pages/EventsInnerPage.css";

const HeroSection = lazy(() => import("../components/ContentHeroSection"));
const ItineraryContent = lazy(() => import("../components/DestinationsPage/SampleItineraryContent"));
const OtherItineraryContent = lazy(() => import("../components/DestinationsPage/OtherItineraryContent"));
const ActivityToursContent = lazy(() => import("../components/DestinationsPage/ActivityToursContent"));
const ConciergeServicesContent = lazy(() => import("../components/DestinationsPage/ConciergeServicesContent"));
const FooterSection = lazy(() => import("../components/Footer"));

const ItineraryPage = () => {
  const { category, id } = useParams();
  const contentId = parseInt(id, 10);

  const { sampleItineraries, fetchSampleItineraries } = useStore();
  const { activityTours, fetchActivityTours } = useStore();
  const { conciergeServices, fetchConciergeServices } = useStore();
  const { otherTours, fetchOtherTours } = useStore();

  useEffect(() => {
    if (fetchSampleItineraries) {
      fetchSampleItineraries();
    }
  }, [fetchSampleItineraries]);

  useEffect(() => {
    if (fetchActivityTours) {
        fetchActivityTours();
    }
  }, [fetchActivityTours]);

  useEffect(() => {
    if (fetchConciergeServices) {
        fetchConciergeServices();
    }
  }, [fetchConciergeServices]);

  useEffect(() => {
    if (fetchOtherTours) {
        fetchOtherTours();
    }
  }, [fetchOtherTours]);



  let itineraryContent = null;
  let content = null;

  switch (category) {
    case "sampleItinery":
      content = sampleItineraries?.find((item) => item.id === contentId);
      itineraryContent = content ? <ItineraryContent content={content} /> : null;
      break;
    case "activityTours":
      content = activityTours?.find((item) => item.id === contentId);
      itineraryContent = content ? <ActivityToursContent content={content} /> : null;
      break;
    case "conciergeService":
      content = conciergeServices?.find((item) => item.id === contentId);
      itineraryContent = content ? <ConciergeServicesContent content={content} /> : null;
      break;
    default:
      content = otherTours?.find((item) => item.id === contentId);
      itineraryContent = content ? <OtherItineraryContent content={content} /> : null;
  }

  if (!content) {
    return (
      <div className="error-message">
        <h2>Content Not Found</h2>
        <p>The content you are looking for does not exist or is unavailable.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="Explore our mindfulness events and news" />
        <link rel="canonical" href="https://inttleisure.com/events&news" />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection topic={content?.title || "Default Title"} title={content?.subTitle || "Default Subtitle"} />
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
