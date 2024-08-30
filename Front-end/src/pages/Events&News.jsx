import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('../components/HeroSection'));
const EventsNewsContent = lazy(() => import('../components/Events&NewsPage/Events&NewsContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const ContactUsPage = () => {
    const img = 'https://www.shutterstock.com/shutterstock/photos/451370875/display_1500/stock-photo-kandy-sri-lanka-july-kohomba-kankariya-dancing-festival-on-july-in-kandy-sri-lanka-451370875.jpg'
    const title = 'Events & News';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={img} title={title} sub={sub} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <EventsNewsContent />
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

export default ContactUsPage;