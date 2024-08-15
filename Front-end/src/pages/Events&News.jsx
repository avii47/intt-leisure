import React, { Suspense, lazy } from 'react';
// import HeroSection from '../components/HeroSection'
// import EventsNewsContent from '../components/Events&NewsPage/Events&NewsContent'
// import FooterSection from '../components/FooterSection';

const HeroSection = lazy(() => import('../components/HeroSection'));
const EventsNewsContent = lazy(() => import('../components/Events&NewsPage/Events&NewsContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));

const ContactUsPage = () => {
    const img = 'https://img.freepik.com/free-photo/man-practicing-yoga-mindfulness_23-2151745660.jpg?t=st=1723722070~exp=1723725670~hmac=27995bf5933ef729a74c2c28ab87b740f6feae24a6810e2c5cf31dc703b3c270&w=1480'
    const title = 'Events & News';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    
    return (
        <>
            <HeroSection img={img} title={title} sub={sub} />
            <EventsNewsContent />
            <FooterSection />
        </>
    )
}

export default ContactUsPage;