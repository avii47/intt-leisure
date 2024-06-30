import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiscoverSection from './components/DiscoverSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <DiscoverSection />
    </div>
  );
}

export default App;
