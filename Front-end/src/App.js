import React, { Suspense, lazy, useTransition } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence, motion } from 'framer-motion';

const HomePage = lazy(() => import('../src/pages/HomePage'));
const ServicePage = lazy(() => import('../src/pages/ServicePage'));
const DestinationsPage = lazy(() => import('../src/pages/DestinationsPage'));
const EventsNewsPage = lazy(() => import('../src/pages/Events&News'));
const MindfulnessPage = lazy(() => import('../src/pages/MindfulnessPage'));
const AboutUsPage = lazy(() => import('../src/pages/AboutUsPage'));
const ContactUsPage = lazy(() => import('../src/pages/ContactUsPage'));
const BookNowPage = lazy(() => import('../src/pages/BookNowPage'));
const BlogsPage = lazy(() => import('../src/pages/BlogsPage'));
const BlogsContentPage = lazy(() => import('../src/pages/BlogsContentPage'));
const PackageContent = lazy(() => import('../src/pages/PackageContent'));
const DestinationInnerPage = lazy(() => import('../src/pages/DestinationInnerPage'));
const EventsInnerPage = lazy(() => import('../src/pages/EventsInnerPage'));
const TermsConditionsPage = lazy(() => import('../src/pages/Terms&ConditionsPage'));
const PrivacyPolicyPage = lazy(() => import('../src/pages/PrivacyPolicyPage'));

const AdminLoginPage = lazy(() => import('../src/components/Admin/AdminLogin'));
const AdminDashboard = lazy(() => import('../src/pages/AdminDashboard'));

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
  const [startTransition, isPending] = useTransition();

  // Define the paths where the Navbar should be hidden
  const hideNavbarPaths = ["/admin", "/dashboard"];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div className="main-container">
      <ScrollToTop />
      {/* Conditionally render the Navbar based on the current route */}
      {!shouldHideNavbar && <Navbar />}
      <AnimatePresence>
        <Suspense fallback={<div>Loading...</div>}>
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
              path="/events&news/:id"
              element={
                <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                  <EventsInnerPage />
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
              path="/blogs"
              element={
                <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                  <BlogsPage />
                </motion.div>
              }
            />
            <Route
              path="/blogs/:id"
              element={
                <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                  <BlogsContentPage />
                </motion.div>
              }
            />
            <Route
              path="/services/:id"
              element={
                <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                  <PackageContent />
                </motion.div>
              }
            />
            <Route
              path="/destinations/:id"
              element={
                <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                  <DestinationInnerPage />
                </motion.div>
              }
            />
            <Route
              path="/termsConditions"
              element={
                <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                  <TermsConditionsPage />
                </motion.div>
              }
            />
            <Route
              path="/privacyPolicy"
              element={
                <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                  <PrivacyPolicyPage />
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
            <Route
              path="/admin"
              element={
                <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                  <AdminLoginPage />
                </motion.div>
              }
            />
            <Route
              path="/dashboard"
              element={
                <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants} className="page-transition">
                  <AdminDashboard />
                </motion.div>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </div>
  );
};

export default App;
