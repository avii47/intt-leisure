import React, { Suspense, lazy, useEffect } from 'react';
import useStore from '../contexts/Store';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import LoadingSpinner from '../components/LoadingSpinner';
import "../components/CSS/Pages/Events&NewsPage.css";
import bg from '../assets/images/events&newsPage-hero-img.jpg'

const HeroSection = lazy(() => import('../components/HeroSection'));
const EventsNewsContent = lazy(() => import('../components/Events&NewsPage/Events&NewsContent'));
const FooterSection = lazy(() => import('../components/Footer'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const ContactUsPage = () => {
    const title = 'Events & News';
    const sub = 'Latest Updates in Mindfulness and Travel';
    const aboutImg = ''

    const { fetchEvents, fetchBlogs } = useStore();
  
    useEffect(() => {
      fetchEvents(); 
    }, [fetchEvents]);

    useEffect(() => {
      fetchBlogs(); 
    }, [fetchBlogs]);
  

    return (
        <>
            <Helmet>
                <meta name="description" content="explore our mindfulness events and news" />
                <link rel="canonical" href="https://inttleisure.com/events&news" />
            </Helmet>
            <Suspense fallback={<LoadingSpinner />}>
                <HeroSection img={bg} title={title} sub={sub} aboutImg={aboutImg} />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
                <EventsNewsContent />
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

export default ContactUsPage;