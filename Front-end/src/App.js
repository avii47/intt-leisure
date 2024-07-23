import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';

import HomePage from '../src/pages/HomePage';
import ServicePage from '../src/pages/ServicePage';

function App() {
  return (
    <div className="App">
        <Navbar />
        <HomePage />
    </div>
  );
}

export default App;
