import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import "../components/CSS/Pages/DestinationsPage.css";
import bg from '../assets/images/destinationsPage-hero-img.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const DestinationsContent = lazy(() => import('../components/DestinationsPage/DestinationContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const ContactUsPage = () => {

    const img = bg;
    const title = 'Destinations';
    const sub = 'Explore Our Services';

    return (
        <>
            <Helmet>
                <meta name="description" content="view mindfulness vacation destinations in Sri Lanka" />
                <link rel="canonical" href="https://inttleisure.com/destinations" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={img} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <DestinationsContent />
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

export default ContactUsPage;