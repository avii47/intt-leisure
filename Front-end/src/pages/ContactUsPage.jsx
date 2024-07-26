import HeroSection from '../components/HeroSection'
import ContactUsContent from '../components/ContactUsPage/ContactUsContent'
import FeedbackSection from '../components/ContactUsPage/FeedbackSection'
import FooterSection from '../components/FooterSection'
import FooterSection2 from '../components/Footer2'
import ContactUsImg from '../assets/images/Rectangle 72.png'

const ContactUsPage = () => {
    return (
        <>
            <HeroSection img={ContactUsImg} title={"Contact Us"} sub={"Connect with the Ultimate Luxury of Mindfulness in Sri Lanka"} />
            <ContactUsContent />
            <FeedbackSection />
            <FooterSection2 />
        </>
    )
}

export default ContactUsPage;