import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import useInView from '../hooks/useInView';
import LoadingSpinner from '../components/LoadingSpinner'; 
import img from '../assets/images/Map outline 1.gif'
import mindfulnessImg from '../assets/images/mindfulness_particles_movement_optimized.gif'
import icon1 from '../assets/icons/spec1-icon.png'
import icon2 from '../assets/icons/spec2-icon.png'
import icon3 from '../assets/icons/spec3-icon.png'
import icon4 from '../assets/icons/spec4-icon.png'

const HeroSection = lazy(() => import('../components/HomePage/HeroSection'));
const MindfulnessTourismSection = lazy(() => import('../components/HomePage/MindfulnessTourismSection'));
const WhyChooseUsSection = lazy(() => import('../components/HomePage/WhyChooseUsSection'));
const ServicesSection = lazy(() => import('../components/HomePage/ServicesSection'));
const TestimonialSection = lazy(() => import('../components/HomePage/TestimonialSection'));
const TourPackageCard = lazy(() => import('../components/HomePage/ToursSection'));
const EventsNewsSection = lazy(() => import('../components/HomePage/Events&NewsSection'));
const FooterSection = lazy(() => import('../components/FooterSection'));
const MobileButton = lazy(() => import('../components/MobileBookNowButton'));

const SectionLoader = ({ Component }) => {
    const [setRef, isInView] = useInView({ threshold: 0.25 });

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
            {/* <SectionLoader Component={MindfulnessTourismSection} /> */}

            <TourPackageCard
                imageUrl={mindfulnessImg}
                title="Mindfulness Tourism"
                sub="Explore"
                description="Experience mindfulness in Sri Lanka with techniques supported by research and teachings rooted in original practices. Our approach is distinct from common Western ideologies, offering a unique way to deepen your mindfulness practice and find true relaxation."
                spec1="Authentic Practices"
                spec1Icon={icon4}
                spec2="Research Based"
                spec2Icon={icon3}
                buttonLabel="Learn More"
                link="mindfulness"
            />
            
            <SectionLoader Component={ServicesSection} />

            <TourPackageCard
                imageUrl={img}
                title="Your Trusted Destination Management Company For Sri Lanka"
                sub="Sri Lanka Tour Packages"
                description="No Matter Your Travel Style, We Have You Covered With Both Tailored And Ready-Made Tours Across Sri Lanka. From Romantic Escapes And Nature-Filled Adventures To Incentive Trips And Group Getaways, We Offer Something Special For Everyone."
                spec1="Sri Lankan Tours"
                spec1Icon={icon2}
                spec2="Concierge Services"
                spec2Icon={icon1}
                buttonLabel="Learn More"
                link="destinations"
            />

            <SectionLoader Component={TestimonialSection} />

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
