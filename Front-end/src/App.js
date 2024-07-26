import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';

import HomePage from '../src/pages/HomePage';
import ServicePage from '../src/pages/ServicePage';
import AboutUsPage from '../src/pages/AboutUsPage';
import ContactUsPage from '../src/pages/ContactUsPage';

// function App() {
//   return (
//     <div className="App">
//         <Navbar />
//         <HomePage />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/services" element={<ServicePage />} />
        <Route path="/why-choose-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;