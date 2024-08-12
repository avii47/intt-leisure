import HeroSection from '../components/HomePage/HeroSection';
import MindfulnessTourismSection from '../components/HomePage/MindfulnessTourismSection';
import WhyChooseUsSection from '../components/HomePage/WhyChooseUsSection';
import AboutSection from '../components/HomePage/AboutSection';
import ServicesSection from '../components/HomePage/ServicesSection';
import TestimonialSection from '../components/HomePage/TestimonialSection';
import ConnectAppSection from '../components/HomePage/ConnectAppSection';
import EventsNewsSection from '../components/HomePage/Events&NewsSection';
import FooterSection from '../components/FooterSection';


const HomePage = () => {
    return (
        <>
            <HeroSection />
            <MindfulnessTourismSection />
            <WhyChooseUsSection />
            {/* <AboutSection /> */}
            <ServicesSection />
            <TestimonialSection />
            <ConnectAppSection />
            <EventsNewsSection />
            <FooterSection />
        </>
    )
};

export default HomePage;