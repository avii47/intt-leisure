import React, { Suspense, lazy } from 'react';
// import HeroSection from '../components/HeroSection'
// import EventsNewsContent from '../components/Events&NewsPage/Events&NewsContent'
// import FooterSection from '../components/FooterSection';

const HeroSection = lazy(() => import('../components/HeroSection'));
const EventsNewsContent = lazy(() => import('../components/Events&NewsPage/Events&NewsContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));

const ContactUsPage = () => {
    const img = 'https://img.freepik.com/free-photo/group-people-taking-interview-outdoors_23-2149032381.jpg?t=st=1722240323~exp=1722243923~hmac=f8549aaa2337e0db5ef2134a7d64d62945b7ed782bb56176c1f3910c557287c0&w=1380'
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