import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/CSS/Pages/AboutUsPage.css";
import bg from '../assets/images/whoWeArePage-hero-img.jpg';

const HeroSection = lazy(() => import('../components/HeroSection'));
const AboutUsContent = lazy(() => import('../components/AboutusPage/AboutUsContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const AboutUsPage = () => {
    const title = 'Who We Are';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';

    return (
        <>
            <Helmet>
                <meta name="description" content="A Forbes Coach Council member and a leading practitioner of the original form of mindfulness. With over 12 years of experience in the travel industry in the USA, Dr. Hewawasam has recognized a gap between traditional mindfulness teachings preserved in Sri Lanka and their often diluted Western practices." />
                <link rel="canonical" href="https://inttleisure.com/why-choose-us" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={bg} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <AboutUsContent />
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

export default AboutUsPage;