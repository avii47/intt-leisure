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
    const img = 'https://www.shutterstock.com/shutterstock/photos/470419964/display_1500/stock-photo-hawks-bill-sea-turtle-release-to-the-freedom-470419964.jpg'
    const title = 'Who We Are';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={img} title={"Contact Us"} sub={"Connect with the Ultimate Luxury of Mindfulness in Sri Lanka"} />
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