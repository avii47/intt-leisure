import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

const HeroSection = lazy(() => import('../components/HeroSection'));
const ContactUsContent = lazy(() => import('../components/ContactUsPage/ContactUsContent'));
const FeedbackSection = lazy(() => import('../components/ContactUsPage/FeedbackSection'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const ContactUsPage = () => {
    const img = 'https://www.shutterstock.com/shutterstock/photos/470419964/display_1500/stock-photo-hawks-bill-sea-turtle-release-to-the-freedom-470419964.jpg'
    const title = 'Contact Us';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    
    return (
        <>
            <Helmet>
                <meta name="description" content="contact intt leisure team for mindfulness tours" />
                <link rel="canonical" href="https://inttleisure.com/contact-us" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={img} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ContactUsContent />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <FeedbackSection />
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

export default ContactUsPage;