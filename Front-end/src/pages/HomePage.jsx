import React, { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import useInView from '../hooks/useInView';
import LoadingSpinner from '../components/LoadingSpinner'; 
import useStore from '../contexts/Store';

const HeroSection = lazy(() => import('../components/HomePage/HeroSection'));
const MindfulnessTourismSection = lazy(() => import('../components/HomePage/MindfulnessTourismSection'));
const WhyChooseUsSection = lazy(() => import('../components/HomePage/WhyChooseUsSection'));
const ServicesSection = lazy(() => import('../components/HomePage/ServicesSection'));
const TestimonialSection = lazy(() => import('../components/HomePage/TestimonialSection'));
const DMCSection = lazy(() => import('../components/HomePage/DMCSection'));
const EventsNewsSection = lazy(() => import('../components/HomePage/Events&NewsSection'));
const FooterSection = lazy(() => import('../components/Footer'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const SectionLoader = ({ Component }) => {
    const [setRef, isInView] = useInView({ threshold: 0.25 });

    const { fetchServices, fetchEvents, fetchDmc } = useStore();
  
    useEffect(() => {
      fetchEvents(); 
    }, [fetchEvents]);

    useEffect(() => {
        fetchServices(); 
    }, [fetchServices]);

    useEffect(() => {
        fetchDmc(); 
    }, [fetchDmc]);
  
    // if (isLoading || error) {
    //   return (
    //     <div>
    //       {isLoading && <p>Loading events...</p>}
    //       {error && <p>Error: {error}</p>}
    //     </div>
    //   );
    // }

    return (
        <div ref={setRef}>
            {isInView ? (
                <Suspense fallback={<LoadingSpinner />}>
                    <Component />
                </Suspense>
            ) : (
                <LoadingSpinner /> 
            )}
        </div>
    );
};

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Rediscover yourself with Mindfulness Tours and Retreats. Explore mindfulness practices with panoramic views of the Indian Ocean, guided by experts." />
                <link rel="canonical" href="https://inttleisure.com/" />
            </Helmet>

            <Suspense fallback={<LoadingSpinner />}>
                <HeroSection />
            </Suspense>
            
            <SectionLoader Component={WhyChooseUsSection} />

            <SectionLoader Component={MindfulnessTourismSection} />

            <SectionLoader Component={ServicesSection} />

            <SectionLoader Component={TestimonialSection} />

            <SectionLoader Component={DMCSection} />

            <SectionLoader Component={EventsNewsSection} />

            <SectionLoader Component={FooterSection} />
            
            <Suspense fallback={<LoadingSpinner />}>
                <MobileButton label="Book Now" />
            </Suspense>
            <ScrollToTopButton />
        </>
    );
};

export default HomePage;
