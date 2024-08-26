import HeroSection from '../components/HeroSection'
import ServiceContent from '../components/ServicePage/ServiceContent'
import FooterSection from '../components/FooterSection'
import img2 from '../assets/images/Experiences - Header.png';
import img3 from '../assets/images/aerial-shot-long-road-surrounded-by-trees-fields2.jpg'

const ServicePage = () => {
    const img = img3
    const title = 'Experience the Experience';
    const sub = 'Choose Your Journey';
    
    return (
        <>
            <HeroSection img={img} title={title} sub={sub} />
            <ServiceContent />
            <FooterSection />
        </>
    )
}

export default ServicePage;