import HeroSection from '../components/HeroSection'
import DestinationsContent from '../components/DestinationsPage/DestinationContent'
import FooterSection from '../components/FooterSection';

const ContactUsPage = () => {
    const img = 'https://img.freepik.com/free-photo/attractive-happy-smiling-couple-traveling-summer-by-sea-bicycles_285396-7566.jpg?t=st=1722252740~exp=1722256340~hmac=806dd15e5698b7890e432aed9cba70b0e3637866c3895190f74dfe66d4aa5bc5&w=1380'
    const title = 'Destinations';
    const sub = 'Explore Our Services';
    
    return (
        <>
            <HeroSection img={img} title={title} sub={sub} />
            <DestinationsContent />
            <FooterSection />
        </>
    )
}

export default ContactUsPage;