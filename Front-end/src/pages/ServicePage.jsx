import HeroSection from '../components/HeroSection'
import ServiceContent from '../components/ServicePage/ServiceContent'
import FooterSection from '../components/FooterSection'

const ServicePage = () => {
    const serviceHeroImg = "https://img.freepik.com/free-photo/full-shot-woman-meditating-mat_23-2149996120.jpg?t=st=1721206452~exp=1721210052~hmac=d1de86b8c04f88f43b72eb72a05dbb3f72a530c4947c6cee21f04e0377e6239d&w=1380"
    return (
        <>
            <HeroSection img={serviceHeroImg} title={"Choose Your Journey"} sub={"Explore Our Services"} />
            <ServiceContent />
            <FooterSection />
        </>
    )
}

export default ServicePage;