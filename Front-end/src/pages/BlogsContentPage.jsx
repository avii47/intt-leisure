import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogsContentData from '../data/BlogsData';
import ScrollToTopButton from '../components/ScrollToTopButton';
// import "../components/CSS/Pages/BlogsPage.css";
import "../components/CSS/Pages/BlogsPage.css";

const HeroSection = lazy(() => import("../components/ContentHeroSection"));
const BlogsContent = lazy(() => import('../components/BlogsPage/BlogsContentTemplate'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const BlogsContentPage = () => {

    const { id } = useParams();

    const contentId = parseInt(id, 10);
    const content = blogsContentData.find(item => item.id === contentId);
  
    if (!content) {
      return <div>Content not found</div>;
    }

    const topic = "Read Our Latest Blogs"

    return (
        <>
            <Helmet>
                <meta name="description" content="A Forbes Coach Council member and a leading practitioner of the original form of mindfulness. With over 12 years of experience in the travel industry in the USA, Dr. Hewawasam has recognized a gap between traditional mindfulness teachings preserved in Sri Lanka and their often diluted Western practices." />
                <link rel="canonical" href="https://inttleisure.com/blogs" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={content.img} title={content.title} topic={topic} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <BlogsContent content={content} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <MobileButton label="Book Now" />
            </Suspense>
            <ScrollToTopButton />
        </>
    )
}

export default BlogsContentPage;