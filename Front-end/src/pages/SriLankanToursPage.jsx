import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from '../components/LoadingSpinner';
import "../components/CSS/Pages/PackageContent.css";
import heroImg from "../assets/images/destination-sl.jpg"

const HeroSection = lazy(() => import("../components/HeroSection"));
const DestinationContent = lazy(() => import("../components/DestinationsPage/SriLankanToursContent"));
const FooterSection = lazy(() => import("../components/FooterSection"));

function SriLankanToursPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="find destinations in Sri Lanka for your mindfulness vacation" />
        <link  rel="canonical" href="https://inttleisure.com/destinations/sriLankan" />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection
          img={heroImg}
          title={"Sri Lanka"}
          sub={"explore sri lankan tours"}
        />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <DestinationContent  />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FooterSection />
      </Suspense>
      <ScrollToTopButton />
    </>
  );
}

export default SriLankanToursPage;
