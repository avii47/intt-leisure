import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/CSS/Pages/DestinationsPage.css";
import bg from '../assets/images/destinationsPage-hero-img.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const DestinationsContent = lazy(() => import('../components/DestinationsPage/DestinationContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const DestinationPage = () => {

    const title = 'Destinations';
    const sub = 'Explore Our Services';
    const aboutImg = 'Sigiriya, the ancient rock fortress of Sri Lanka, rises proudly from the lush plains, a striking symbol of history. Standing nearly 200 meters tall, this massive rock once held a royal palace at its summit. As you climb the carved pathways, you will find beautiful frescoes of maidens painted on the rock walls.'

    return (
        <>
            <Helmet>
                <meta name="description" content="view mindfulness vacation destinations in Sri Lanka" />
                <link rel="canonical" href="https://inttleisure.com/destinations" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={bg} title={title} sub={sub} aboutImg={aboutImg} />
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
            <ScrollToTopButton />
        </>
    )
}

export default DestinationPage;