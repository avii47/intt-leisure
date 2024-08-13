import React, { Suspense, lazy } from 'react';
// import HeroSection from '../components/HeroSection'
// import BookNowContent from '../components/BookNowPage/BookNowContent'
// import FooterSection from '../components/FooterSection'
import bg from '../assets/images/Book-now-bg.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const BookNowContent = lazy(() => import('../components/BookNowPage/BookNowContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));

const BookNowPage = () => {
    const img = bg;
    const title = 'Book Now';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={img} title={title} sub={sub} />
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