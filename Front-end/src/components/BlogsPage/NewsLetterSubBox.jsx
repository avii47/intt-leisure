import React from 'react'
import { useMobileView } from "../../contexts/MobileViewContext";
import { useNewsletterSubscription } from '../../hooks/useNewsletterSubscription';
import "../CSS/NewsLetterSubBox.css"

const NewsLetterSubBox = ({ email, setEmail, handleSubscribe }) => {

  const isMobileView = useMobileView();
  
  return (
    <div className={`newsletter-sub-container ${isMobileView ? "mobile-view" : "" }`}>
      <div className='newsletter-sub-content'>
        <h3 className='font-primary' style={{fontSize:'30px'}}>News Letter</h3><hr />
        <p className='font-secondary'>Keep the vacation bliss alive! Join us to deepen your mindfulness practice and turn tranquility into a lasting lifestyle. Register now and stay connected to your inner peace!</p>
        <input className='newsletter-sub-email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email Address' />
        <button className='btn newsletter-sub-btn' onClick={handleSubscribe}>Subscribe</button>
        <p className="font-secondary">By subscribing you agree to our Privacy Policy and consent to receive updates from our company.</p>
      </div>
    </div>
  )
}

export default NewsLetterSubBox