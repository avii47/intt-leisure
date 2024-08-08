import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import HomePage from '../src/pages/HomePage';
import ServicePage from '../src/pages/ServicePage';
import DestinationsPage from '../src/pages/DestinationsPage';
import EventsNewsPage from '../src/pages/Events&News';
import MindfulnessPage from '../src/pages/MindfulnessPage';
import AboutUsPage from '../src/pages/AboutUsPage';
import ContactUsPage from '../src/pages/ContactUsPage';
import BookNowPage from '../src/pages/BookNowPage';

import { AnimatePresence, motion } from 'framer-motion';


// const pageVariants = {
//   initial: {
//     x: "100vw",
//     position: "absolute",
//   },
//   enter: {
//     x: 0,
//     position: "absolute",
//   },
//   exit: {
//     x: "-100vw",
//     position: "absolute",
//   },
// };

const pageVariants = {
  initial: {
    x: "100%",
    opacity: 1,
    position: "absolute",
  },
  enter: {
    x: 0,
    opacity: 1,
    position: "absolute",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    x: "-100%",
    opacity: 1,
    position: "absolute",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
};

const App = () => {
  const location = useLocation();

  return (
    <div className="main-container">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence >
        <Routes location={location} key={location.pathname}>
          <Route
            path="/services"
            element={
              <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                <ServicePage />
              </motion.div>
            }
          />
          <Route
            path="/mindfulness"
            element={
              <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                <MindfulnessPage />
              </motion.div>
            }
          />
          <Route
            path="/destinations"
            element={
              <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                <DestinationsPage />
              </motion.div>
            }
          />
          <Route
            path="/why-choose-us"
            element={
              <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                <AboutUsPage />
              </motion.div>
            }
          />
          <Route
            path="/contact-us"
            element={
              <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                <ContactUsPage />
              </motion.div>
            }
          />
          <Route
            path="/events&news"
            element={
              <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                <EventsNewsPage />
              </motion.div>
            }
          />
          <Route
            path="/bookNow"
            element={
              <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                <BookNowPage />
              </motion.div>
            }
          />
          <Route
            path="/"
            element={
              <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                <HomePage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;









