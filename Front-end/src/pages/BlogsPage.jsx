import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import bg from '../assets/images/blogs-bg.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const BlogsContent = lazy(() => import('../components/BlogsPage/BlogsContent'));
const BlogsList = lazy(() => import('../components/BlogsPage/BlogList'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const BlogsPage = () => {

    const img = bg;
    const title = 'Blogs';
    const sub = 'Explore Our Practice';

    return (
        <>
            <Helmet>
                <meta name="description" content="A Forbes Coach Council member and a leading practitioner of the original form of mindfulness. With over 12 years of experience in the travel industry in the USA, Dr. Hewawasam has recognized a gap between traditional mindfulness teachings preserved in Sri Lanka and their often diluted Western practices." />
                <link rel="canonical" href="https://inttleisure.com/blogs" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={img} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<BlogsList />} />
                    <Route path="/:blogId" element={<BlogsContent />} />
                </Routes>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <MobileButton label="Book Now" />
            </Suspense>
        </>
    )
}

export default BlogsPage;