import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import bg from '../assets/images/bookNowPage-hero-img.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const BookNowContent = lazy(() => import('../components/BookNowPage/BookNowContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));

const BookNowPage = () => {
    const title = 'Book Now';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';

    return (
        <>
            <Helmet>                                                            
                <meta name="description" content="book a mindfulness vacation in Sri Lanka" />
                <link rel="canonical" href="https://inttleisure.com/bookNow" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={bg} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <BookNowContent />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>
        </>
    )
}

export default BookNowPage;