
import React, { Suspense, lazy } from 'react';
import AboutUsImg from '../assets/images/Why Choose us_.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const AboutUsContent = lazy(() => import('../components/AboutusPage/AboutUsContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const AboutUsPage = () => {
    const img = 'https://www.shutterstock.com/shutterstock/photos/2427351787/display_1500/stock-photo-knuckles-mountain-range-sri-lanka-a-captivating-landscape-of-lush-valleys-and-rugged-peaks-an-2427351787.jpg'
    const title = 'Who We Are';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={img} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <AboutUsContent />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <MobileButton  label="Book Now" />
            </Suspense>
        </>
    )
}

export default AboutUsPage;