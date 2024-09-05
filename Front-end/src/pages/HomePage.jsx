import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const HeroSection = lazy(() => import('../components/HomePage/HeroSection'));
const MindfulnessTourismSection = lazy(() => import('../components/HomePage/MindfulnessTourismSection'));
const WhyChooseUsSection = lazy(() => import('../components/HomePage/WhyChooseUsSection'));
const ServicesSection = lazy(() => import('../components/HomePage/ServicesSection'));
const TestimonialSection = lazy(() => import('../components/HomePage/TestimonialSection'));
const ConnectAppSection = lazy(() => import('../components/HomePage/ConnectAppSection'));
const EventsNewsSection = lazy(() => import('../components/HomePage/Events&NewsSection'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const SliderComponent = lazy(() => import('../components/HomePage/sliderComponent'));

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Rediscover yourself with Mindfulness Tours and Retreats. Explore mindfulness practices with panoramic views of the Indian Ocean, guided by experts." />
                <link rel="canonical" href="https://inttleisure.com/" />
            </Helmet>

            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <MindfulnessTourismSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <WhyChooseUsSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ServicesSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <TestimonialSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ConnectAppSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <EventsNewsSection />
            </Suspense>
            {/* <Suspense fallback={<div>Loading...</div>}>
                <SliderComponent />
            </Suspense> */}
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <MobileButton label="Book Now" />
            </Suspense>

        </>
    )
};

export default HomePage;