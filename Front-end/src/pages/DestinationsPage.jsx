import React, { Suspense, lazy } from 'react';
// import HeroSection from '../components/HeroSection'
// import DestinationsContent from '../components/DestinationsPage/DestinationContent'
// import FooterSection from '../components/FooterSection';
import bg from '../assets/images/destinations-bg.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const DestinationsContent = lazy(() => import('../components/DestinationsPage/DestinationContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));

const ContactUsPage = () => {
    
    const img = bg;
    const title = 'Destinations';
    const sub = 'Explore Our Services';
    
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={img} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <DestinationsContent />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>
        </>
    )
}

export default ContactUsPage;