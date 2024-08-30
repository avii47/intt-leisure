import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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