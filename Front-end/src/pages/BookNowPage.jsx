import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import LoadingSpinner from '../components/LoadingSpinner';
// import "../components/CSS/Pages/BookNowPage.css";
import bg from '../assets/images/bookNowPage-hero-img.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const BookNowContent = lazy(() => import('../components/BookNowPage/BookingForm'));
const FooterSection = lazy(() => import('../components/FooterSection'));

const BookNowPage = () => {
    const title = 'Book Now';
    const sub = 'Begin Your Journey Today';
    const aboutImg = ''

    return (
        <>
            <Helmet>                                                            
                <meta name="description" content="book a mindfulness vacation in Sri Lanka" />
                <link rel="canonical" href="https://inttleisure.com/bookNow" />
            </Helmet>
            <Suspense fallback={<LoadingSpinner />}>
                <HeroSection img={bg} title={title} sub={sub} aboutImg={aboutImg} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <BookNowContent />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <FooterSection />
            </Suspense>
            <ScrollToTopButton />
        </>
    )
}

export default BookNowPage;