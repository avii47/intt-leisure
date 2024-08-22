import HeroSection from '../components/HeroSection'
import ServiceContent from '../components/ServicePage/ServiceContent'
import FooterSection from '../components/FooterSection'
import img2 from '../assets/images/Experiences - Header.png';

const ServicePage = () => {
    const img = img2
    const title = 'Choose Your Journey';
    const sub = 'Experience the Experience';
    
    return (
        <>
            <HeroSection img={img} title={title} sub={sub} />
            <ServiceContent />
            <FooterSection />
        </>
    )
}

export default ServicePage;