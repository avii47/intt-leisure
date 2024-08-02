import HeroSection from '../components/HeroSection'
import BookNowContent from '../components/BookNowPage/BookNowContent'
import FooterSection from '../components/FooterSection'
import bg from '../assets/images/Book-now-bg.jpg'

const BookNowPage = () => {
    // const img = 'https://img.freepik.com/free-photo/young-woman-sitting-blanket-reading-book_23-2147911502.jpg?t=st=1722335308~exp=1722338908~hmac=c76276d9d9ea2943dcea0645a15a9ec4c4ff70e31d95c926dac4b659997dd3f3&w=1380'
    const img = bg;
    const title = 'Book Now';
    const sub = 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka';

    return (
        <>
            <HeroSection img={img} title={title} sub={sub} />
            <BookNowContent />
            <FooterSection />
        </>
    )
}

export default BookNowPage;