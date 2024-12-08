import React, { useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import useStore from '../contexts/Store';
import useImage from '../hooks/useImage';
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from '../components/LoadingSpinner';
import "../components/CSS/Pages/PackageContent.css";

const HeroSection = lazy(() => import("../components/HeroSection"));
const PackageContent = lazy(() => import("../components/PackageContentPage/PackageContent"));
const FooterSection = lazy(() => import('../components/Footer'));

const PackageContentPage = () => {
  const { id } = useParams();
  const { services, isLoading, fetchServices } = useStore();

  useEffect(() => {
    if (!services.length) {
      fetchServices(); 
    }
  }, [fetchServices, services]);

  const contentId = parseInt(id, 10);
  const content = services.find((item) => item.id === contentId);

  const { loading, error, image } = useImage(content?.img || null);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us." />
        <link rel="canonical" href="https://inttleisure.com/services" />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection
          img={image} 
          title={content.title}
          sub={content.sub3}
        />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <PackageContent content={content} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FooterSection />
      </Suspense>
      <ScrollToTopButton />
    </>
  );
};

export default PackageContentPage;
