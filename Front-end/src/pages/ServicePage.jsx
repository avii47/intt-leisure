import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import bg from '../assets/images/servicesPage-hero-img.jpg';

const HeroSection = lazy(() => import('../components/HeroSection'));
const ServiceContent = lazy(() => import('../components/ServicePage/ServiceContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const ServicePage = () => {
    const title = 'Experience the Experience';
    const sub = 'Choose Your Journey';

    return (
        <>
            <Helmet>
                <meta name="description" content="As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us." />
                <link rel="canonical" href="https://inttleisure.com/services" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={bg} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ServiceContent />
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

export default ServicePage;