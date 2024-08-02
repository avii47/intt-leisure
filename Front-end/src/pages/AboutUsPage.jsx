import HeroSection from '../components/HeroSection'
import AboutUsContent from '../components/AboutusPage/AboutUsContent'
import FooterSection from '../components/FooterSection'
import AboutUsImg from '../assets/images/Why Choose us_.jpg'

const AboutUsPage = () => {
    const img = 'https://img.freepik.com/free-photo/group-people-taking-interview-outdoors_23-2149032381.jpg?t=st=1722240323~exp=1722243923~hmac=f8549aaa2337e0db5ef2134a7d64d62945b7ed782bb56176c1f3910c557287c0&w=1380'
    const title = 'Who We Are';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';

    return (
        <>
            <HeroSection img={AboutUsImg} title={title} sub={sub} />
            {/* <AboutUsContent /> */}
            <FooterSection />
        </>
    )
}

export default AboutUsPage;