import React, { Suspense, lazy } from 'react';
import img3 from '../assets/images/aerial-shot-long-road-surrounded-by-trees-fields2.jpg'

const HeroSection = lazy(() => import('../components/HomePage/HeroSection'));
const ServiceContent = lazy(() => import('../components/ServicePage/ServiceContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const ServicePage = () => {
    const img = img3
    const title = 'Experience the Experience';
    const sub = 'Choose Your Journey';
    
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={img} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ServiceContent />
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

export default ServicePage;