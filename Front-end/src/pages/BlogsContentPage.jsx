import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogsListData from '../data/BlogListData';
import blogsContentData from '../data/BlogContentData';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/CSS/Pages/BlogsPage.css";

const HeroSection = lazy(() => import('../components/HeroSection'));
const BlogsContent = lazy(() => import('../components/BlogsPage/BlogsContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const BlogsContentPage = () => {

    const { id } = useParams();

    const heroContentId = parseInt(id, 10);
    const heroContent = blogsListData.find(item => item.id === heroContentId);

    const contentId = parseInt(id, 10);
    const content = blogsContentData.find(item => item.id === contentId);
  
    if (!content) {
      return <div>Content not found</div>;
    }

    return (
        <>
            <Helmet>
                <meta name="description" content="A Forbes Coach Council member and a leading practitioner of the original form of mindfulness. With over 12 years of experience in the travel industry in the USA, Dr. Hewawasam has recognized a gap between traditional mindfulness teachings preserved in Sri Lanka and their often diluted Western practices." />
                <link rel="canonical" href="https://inttleisure.com/blogs" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={heroContent.img} title={heroContent.title} sub={heroContent.sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <BlogsContent   
                    title={content.title}
                    description={content.description}
                    img={content.img}
                    paragraphs={content.paragraphs} 
                    sections={content.sections}
                    recommendedLinks={content.recommendedLinks} 
                />
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