import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/CSS/Pages/Events&NewsPage.css";
import bg from '../assets/images/events&newsPage-hero-img.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const EventsNewsContent = lazy(() => import('../components/Events&NewsPage/Events&NewsContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const ContactUsPage = () => {
    const title = 'Events & News';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    const aboutImg = ''

    return (
        <>
            <Helmet>
                <meta name="description" content="mindfulness events and news" />
                <link rel="canonical" href="https://inttleisure.com/events&news" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={bg} title={title} sub={sub} aboutImg={aboutImg} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <EventsNewsContent />
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

export default ContactUsPage;