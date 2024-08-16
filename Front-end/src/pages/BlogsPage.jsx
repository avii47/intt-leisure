import React, { Suspense, lazy } from 'react';
import bg from '../assets/images/blogs-bg.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const BlogsContent = lazy(() => import('../components/BlogsPage/BlogsContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));

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
                <BlogsContent />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>
        </>
    )
}

export default BlogsPage;