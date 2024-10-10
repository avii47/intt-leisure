import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMobileView } from '../contexts/MobileViewContext';
import "../components/CSS/Pages/TermsConditions.css";

const TermsConditionsPage = () => {

    const isMobileView = useMobileView();

    return (
  
      <section id="termsConditions-content-section" className={`section justify-content-center termsConditions-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
        <div className="service-section-content justify-content-center" style={{backgroundColor:'white'}}>
            <Helmet>
                <meta name="description" content="What exactly is Mindful Tourism? We often hear about mindfulness, but how often do we participate in Mindful Tourism? It’s a distinct approach rooted in Sri Lanka's authentic mindfulness teachings and bolstered by solid research." />
                <link rel="canonical" href="https://inttleisure.com/termsConditions" />
            </Helmet>
            <h1 className='font-primary top-container'>Terms & Conditions</h1>
            <ul className='terms-list'>
                <li>
                    <h4>1. Introduction</h4>
                    <p className='font-secondary'>Welcome to INTT Leisure. By using our services, you agree to the following Terms & Conditions. Please read them thoroughly.</p>
                </li>
                <li>
                    <h4>2. Services</h4>
                    <p className='font-secondary'>INTT Leisure offers mindfulness vacation experiences in Sri Lanka. We reserve the right to alter or cease any part of our services at our discretion.</p>
                </li>
                <li>
                    <h4>3. Booking and Payment</h4>
                    <p className='font-secondary'>Your booking will be confirmed once we receive full payment.</p>
                </li>
                <li>
                    <h4>4. Cancellation Policy</h4>
                    <p className='font-secondary'>Cancellations made at least 7 days prior to the start date will receive a full refund. Cancellations made within 7 days of the start date will be subject to a 100% cancellation fee.</p>
                </li>
                <li>
                    <h4>5. Changes to Terms</h4>
                    <p className='font-secondary'>We may revise these Terms & Conditions periodically. Updated terms will be posted on our website. Continued use of our services constitutes acceptance of the revised terms.</p>
                </li>
                <li>
                    <h4>6. Special Requests</h4>
                    <p className='font-secondary'>When making a booking, please inform our reservations team of any special dietary needs, allergies, or celebratory events occurring during your stay.</p>
                </li>
            </ul>

        </div>
      </section>
    )
}

export default TermsConditionsPage;