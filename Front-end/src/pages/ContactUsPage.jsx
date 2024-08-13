import React, { Suspense, lazy } from 'react';
// import HeroSection from '../components/HeroSection'
// import ContactUsContent from '../components/ContactUsPage/ContactUsContent'
// import FeedbackSection from '../components/ContactUsPage/FeedbackSection'
// import FooterSection from '../components/FooterSection';
import ContactUsImg from '../assets/images/Rectangle 72.png'

const HeroSection = lazy(() => import('../components/HeroSection'));
const ContactUsContent = lazy(() => import('../components/ContactUsPage/ContactUsContent'));
const FeedbackSection = lazy(() => import('../components/ContactUsPage/FeedbackSection'));
const FooterSection = lazy(() => import('../components/FooterSection'));

const ContactUsPage = () => {
    const img = 'https://img.freepik.com/free-photo/group-people-taking-interview-outdoors_23-2149032381.jpg?t=st=1722240323~exp=1722243923~hmac=f8549aaa2337e0db5ef2134a7d64d62945b7ed782bb56176c1f3910c557287c0&w=1380'
    const title = 'Who We Are';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={ContactUsImg} title={"Contact Us"} sub={"Connect with the Ultimate Luxury of Mindfulness in Sri Lanka"} />
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
        </>
    )
}

export default ContactUsPage;