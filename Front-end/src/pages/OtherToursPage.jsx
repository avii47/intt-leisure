import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/CSS/Pages/PackageContent.css";

import img1 from '../assets/images/destination-Dubai.jpeg';
import img2 from '../assets/images/destination-Thailand.jpeg';
import img3 from '../assets/images/destination-sriLanka.jpeg';

const HeroSection = lazy(() => import('../components/HeroSection'));
// const DestinationContent = lazy(() => import('../components/DestinationsPage/DestinationInnerContent'));
const FooterSection = lazy(() => import('../components/FooterSection'));

function OtherToursPage() {
  return (
    <div>OtherToursPage</div>
  )
}

export default OtherToursPage