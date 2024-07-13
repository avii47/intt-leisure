import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiscoverSection from './components/DiscoverSection';
import MindfulnessTourismSection from './components/MindfulnessTourismSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import ConnectAppSection from './components/ConnectAppSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <MindfulnessTourismSection />
      {/* <DiscoverSection /> */}
      
      <AboutSection />
      {/* <ServicesSection /> */}
      <ServicesSection />
      <TestimonialSection />
      <ConnectAppSection />
      <FooterSection />
    </div>
  );
}

export default App;
