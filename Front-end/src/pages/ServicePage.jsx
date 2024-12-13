import React, { useEffect, Suspense, lazy } from 'react';
import useStore from '../contexts/Store';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import LoadingSpinner from '../components/LoadingSpinner';
import "../components/CSS/Pages/ServicePage.css";
import bg from '../assets/images/servicesPage-hero-img.jpg';

const HeroSection = lazy(() => import('../components/HeroSection'));
const ServiceContent = lazy(() => import('../components/ServicePage/ServiceContent'));
const FooterSection = lazy(() => import('../components/Footer'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const ServicePage = () => {
    const title = 'Experience the Experience';
    const sub = 'Choose Your Journey';
    const aboutImg = ''

    const { fetchServices } = useStore();

    useEffect(() => {
        fetchServices(); 
    }, [fetchServices]);

    return (
        <>
            <Helmet>
                <meta name="description" content="As you immerse yourself in this enchanting destination, we invite you to participate in profound self-reflection and practice alongside us." />
                <link rel="canonical" href="https://inttleisure.com/services" />
            </Helmet>
            <Suspense fallback={<LoadingSpinner />}>
                <HeroSection img={bg} title={title} sub={sub} aboutImg={aboutImg} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <ServiceContent />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <FooterSection />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <MobileButton label="Book Now" />
            </Suspense>
            <ScrollToTopButton />
        </>
    )
}

export default ServicePage;