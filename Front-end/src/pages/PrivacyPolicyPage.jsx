import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMobileView } from '../contexts/MobileViewContext';
import "../components/CSS/Pages/TermsConditions.css";


const PrivacyPolicyPage = () => {

    const isMobileView = useMobileView();

    return (
  
      <section id="termsConditions-content-section" className={`section justify-content-center termsConditions-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
        <div className="service-section-content justify-content-center" style={{backgroundColor:'white'}}>
            <h1 className='font-primary top-container'>Privacy Policy</h1>
            <p>This Privacy Policy outlines the practices of INTT Leisure regarding the collection, use, and disclosure of your information when you interact with our website <a href="https://www.inttleisure.com">(https://www.inttleisure.com)</a> (referred to as the “Service”). By using the Service, you consent to the practices described in this Privacy Policy. If you do not agree with these terms, please refrain from using the Service.</p>
            <p>We may update this Privacy Policy at any time without prior notice. The revised policy will be effective 180 days from the date it is posted on the Service. Your continued use of the Service after this period signifies your acceptance of the updated Privacy Policy. We recommend checking this page periodically for any changes.</p>
            <h4>Information We Collect:</h4>
            <p>We gather and process the following personal information:</p>
            <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Mobile</li>
            </ul>
            <h4>How We Use Your Information:</h4>
            <p>Your information is used for:</p>
            <ul>
                <li>Marketing and promotional activities</li>
                <li>Administrative purposes</li>
                <li>Targeted advertising</li>
                <li>Managing customer orders</li>
            </ul>
            <p>If we intend to use your information for any other purpose, we will obtain your consent and use it solely for the purpose granted, unless otherwise required by law.</p>
            <h4>How We Share Your Information:</h4>
            <p>We will not share your personal information with third parties without your consent, except in certain situations, including:</p>
            <ul>
                <li>Advertising services</li>
                <li>Marketing agencies</li>
                <li>Analytics providers</li>
                <li>Payment recovery services</li>
            </ul>
            <p>We ensure that any third parties receiving your information use it only for the purpose intended and do not retain it longer than necessary.</p>
            <p>Your information may also be disclosed to:</p>
            <ul>
                <li>Comply with legal obligations, regulations, or court orders.</li>
                <li>Enforce our agreements, including this Privacy Policy.</li>
                <li>Analytics providers</li>
                <li>Address claims that your use of the Service infringes upon third-party rights.</li>
            </ul>
            <p>In the case of a merger or acquisition, your information may be transferred as part of the business assets.</p><br />
            <h4>Retention of Your Information:</h4>
            <p>We retain your personal information for up to 2 years from your first interaction with the website, or as long as needed to fulfill the purposes described in this Privacy Policy. Some information may be kept longer for legal reasons, such as record-keeping or fraud prevention. Anonymous and aggregated data may be stored indefinitely.</p>
            <h4>Your Rights:</h4>
            <p>Depending on applicable laws, you may have rights to access, correct, or delete your personal data, obtain a copy of your data, restrict or object to processing, request data portability, withdraw consent, or file a complaint with a regulatory authority. To exercise these rights, please contact us at info@intterminal.com or sales@intterminal.com. We will respond according to applicable laws.</p>
            <p>You may also opt out of direct marketing or profiling by contacting us at sales@intterminal.com.</p>
            <p>Please note that if you do not provide or withdraw consent for the necessary personal information, you may not be able to access or use the services for which the information was collected.</p>
            <h4>Security:</h4>
            <p>We implement reasonable security measures to protect your information from loss, misuse, or unauthorized alteration. However, we cannot guarantee absolute security of any information transmitted to us due to inherent risks.</p>
            <h4>Third-Party Links:</h4>
            <p>Our Service may include links to external websites not operated by us. This Privacy Policy does not apply to those third-party sites. We recommend reviewing the privacy policies of any third-party sites you visit. We are not responsible for the content or privacy practices of these external sites.</p>
            <h4>Contact:</h4>
            <p>For any questions or concerns about how your information is processed, please contact us at sales@intterminal.com. We will address your inquiries in line with applicable laws.</p>

        </div>
      </section>
    )
}

export default PrivacyPolicyPage;