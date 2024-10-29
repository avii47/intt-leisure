import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import LoadingSpinner from '../components/LoadingSpinner';
import "../components/CSS/Pages/MindfulnessPage.css";
import bg from '../assets/images/mindfulnessPage-hero-img.jpg';

const HeroSection = lazy(() => import('../components/HeroSection'));
const MindfulnessContent = lazy(() => import('../components/MindfulnessPage/MindfulnessContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const MindfulnessPage = () => {
    const title = 'Mindfulness Tourism';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    const aboutImg = ''

    return (
        <>
            <Helmet>
                <meta name="description" content="What exactly is Mindful Tourism? We often hear about mindfulness, but how often do we participate in Mindful Tourism? It’s a distinct approach rooted in Sri Lanka's authentic mindfulness teachings and bolstered by solid research." />
                <link rel="canonical" href="https://inttleisure.com/mindfulness" />
            </Helmet>
            <Suspense fallback={<LoadingSpinner />}>
                <HeroSection img={bg} title={title} sub={sub} aboutImg={aboutImg} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <MindfulnessContent />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <FooterSection />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <MobileButton label="Book Now" />
            </Suspense>
            <ScrollToTopButton />
        </>
    )
}

export default MindfulnessPage;