import React, { useEffect, Suspense, lazy } from "react";
import useStore from "../contexts/Store";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from '../components/LoadingSpinner';
import "../components/CSS/Pages/PackageContent.css";
import heroImg from "../assets/images/otherTours-img.jpg"

const HeroSection = lazy(() => import("../components/HeroSection"));
const DestinationContent = lazy(() => import("../components/DestinationsPage/OtherToursContent"));
const FooterSection = lazy(() => import('../components/Footer'));

function OtherToursPage() {

  const { fetchOtherTours } = useStore();
  useEffect(() => {
    if (fetchOtherTours) {
        fetchOtherTours();
    }
  }, [fetchOtherTours]);

  return (
    <>
      <Helmet>
        <meta name="description" content="find destinations in Sri Lanka for your mindfulness vacation" />
        <link rel="canonical" href="https://inttleisure.com/destinations/other" />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection
          img={heroImg}
          title={"Other Tours"}
          sub={"Explore Exclusive Global Destinations Tailored to You."}
        />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <DestinationContent />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FooterSection />
      </Suspense>
      <ScrollToTopButton />
    </>
  )
}

export default OtherToursPage