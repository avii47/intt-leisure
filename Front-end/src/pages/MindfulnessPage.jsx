import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/CSS/Pages/MindfulnessPage.css";
import bg from '../assets/images/mindfulnessPage-hero-img.jpg';

const HeroSection = lazy(() => import('../components/HeroSection'));
const MindfulnessContent = lazy(() => import('../components/MindfulnessPage/MindfulnessContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const MindfulnessPage = () => {
    const title = 'Mindfulness Tourism';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    const aboutImg = 'description about the image'

    return (
        <>
            <Helmet>
                <meta name="description" content="What exactly is Mindful Tourism? We often hear about mindfulness, but how often do we participate in Mindful Tourism? It’s a distinct approach rooted in Sri Lanka's authentic mindfulness teachings and bolstered by solid research." />
                <link rel="canonical" href="https://inttleisure.com/mindfulness" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={bg} title={title} sub={sub} aboutImg={aboutImg} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <MindfulnessContent />
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

export default MindfulnessPage;