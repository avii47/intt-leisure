import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/CSS/Pages/ContactUsPage.css";
import bg from '../assets/images/contactUsPage-hero-img.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const FeedbackSection = lazy(() => import('../components/ContactUsPage/FeedbackSection'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const ContactUsPage = () => {
    const title = 'Contact Us';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    const aboutImg = 'In Sri Lanka, the Hawksbill sea turtle is released into the ocean, its flippers moving smoothly as it returns to its natural habitat. The sunlight highlights the beautiful patterns on its shell, with shades of amber and brown.'
    
    return (
        <>
            <Helmet>
                <meta name="description" content="contact intt leisure team for mindfulness tours" />
                <link rel="canonical" href="https://inttleisure.com/contact-us" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <HeroSection img={bg} title={title} sub={sub} aboutImg={aboutImg} />
            </Suspense>
            {/* <Suspense fallback={<div>Loading...</div>}>
                <ContactUsContent />
            </Suspense> */}
            <Suspense fallback={<div>Loading...</div>}>
                <FeedbackSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <FooterSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <MobileButton  label="Book Now" />
            </Suspense>
            <ScrollToTopButton />
        </>
    )
}

export default ContactUsPage;