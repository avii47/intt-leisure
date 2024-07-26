import HeroSection from '../components/HeroSection'
import AboutUsContent from '../components/AboutusPage/AboutUsContent'
import FooterSection from '../components/FooterSection'
import AboutUsImg from '../assets/images/aboutUs-bg.png'

const AboutUsPage = () => {
    return (
        <>
            <HeroSection img={AboutUsImg} title={"Who We Are"} sub={"Connect with the Ultimate Luxury of Mindfulness in Sri Lanka"} />
            <AboutUsContent />
            <FooterSection />
        </>
    )
}

export default AboutUsPage;