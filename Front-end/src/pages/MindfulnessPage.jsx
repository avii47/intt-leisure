import React, { Suspense, lazy } from 'react';
import bg from '../assets/images/mindfulness-hero.png';

const HeroSection = lazy(() => import('../components/HeroSection'));
const MindfulnessContent = lazy(() => import('../components/MindfulnessPage/MindfulnessContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const MindfulnessPage = () => {
    const title = 'Mindfulness Tourism';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={bg} title={title} sub={sub} />
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
        </>
    )
}

export default MindfulnessPage;