import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from '../components/LoadingSpinner';
import contentData from "../data/PackageContentData";
import "../components/CSS/Pages/PackageContent.css";

const HeroSection = lazy(() => import("../components/HeroSection"));
const PackageContent = lazy(() => import("../components/PackageContentPage/PackageContent"));
const FooterSection = lazy(() => import("../components/FooterSection"));

const PackageContentPage = () => {
  const { id } = useParams();

  const contentId = parseInt(id, 10);
  const content = contentData.find((item) => item.id === contentId);

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
          img={content.img}
          title={content.title}
          sub={content.subtitle}
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
