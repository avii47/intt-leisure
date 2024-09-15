import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../components/ScrollToTopButton";
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
        <meta name="description" content="find best package for you" />
        <link rel="canonical" href="https://inttleisure.com/services" />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection
          img={content.img}
          title={content.title}
          sub={content.subtitle}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PackageContent content={content} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FooterSection />
      </Suspense>
      <ScrollToTopButton />
    </>
  );
};

export default PackageContentPage;
