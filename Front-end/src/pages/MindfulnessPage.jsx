import HeroSection from '../components/HeroSection'
import MindfulnessContent from '../components/MindfulnessPage/MindfulnessContent'
import FooterSection from '../components/FooterSection'
import bg from '../assets/images/mindfulness-hero.png';

const MindfulnessPage = () => {
    const title = 'Mindfulness Tourism';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';
    
    return (
        <>
            <HeroSection img={bg} title={title} sub={sub} />
            <MindfulnessContent />
            <FooterSection />
        </>
    )
}

export default MindfulnessPage;