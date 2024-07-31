import HeroSection from '../components/HeroSection'
import ContactUsContent from '../components/ContactUsPage/ContactUsContent'
import FeedbackSection from '../components/ContactUsPage/FeedbackSection'
import FooterSection from '../components/FooterSection';
import ContactUsImg from '../assets/images/Rectangle 72.png'

const ContactUsPage = () => {
    const img = 'https://img.freepik.com/free-photo/group-people-taking-interview-outdoors_23-2149032381.jpg?t=st=1722240323~exp=1722243923~hmac=f8549aaa2337e0db5ef2134a7d64d62945b7ed782bb56176c1f3910c557287c0&w=1380'
    const title = 'Who We Are';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    
    return (
        <>
            <HeroSection img={ContactUsImg} title={"Contact Us"} sub={"Connect with the Ultimate Luxury of Mindfulness in Sri Lanka"} />
            <ContactUsContent />
            <FeedbackSection />
            <FooterSection />
        </>
    )
}

export default ContactUsPage;