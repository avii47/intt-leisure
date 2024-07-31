import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';

import HomePage from '../src/pages/HomePage';
import ServicePage from '../src/pages/ServicePage';
import DestinationsPage from '../src/pages/DestinationsPage';
import EventsNewsPage from '../src/pages/Events&News';
import MindfulnessPage from '../src/pages/MindfulnessPage';
import AboutUsPage from '../src/pages/AboutUsPage';
import ContactUsPage from '../src/pages/ContactUsPage';
import BooknowPage from '../src/pages/BookNowPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/services" element={<ServicePage />} />
        <Route path="/mindfulness" element={<MindfulnessPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/why-choose-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/events&news" element={<EventsNewsPage />} />
        <Route path="/bookNow" element={<BooknowPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;