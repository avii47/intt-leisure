import React from 'react'
import "../CSS/NewsLetterSubBox.css"

function NewsLetterSubBox() {
  return (
    <div className='newsletter-sub-container'>
        <h3 className='font-primary' style={{fontSize:'30px'}}>News Letter</h3><hr />
        <p className='Font-secondary'>Keep the vacation bliss alive! Join us to deepen your mindfulness practice and turn tranquility into a lasting lifestyle. Register now and stay connected to your inner peace!</p>
        <input className='newsletter-sub-email' type="text" name="" id="" placeholder='Your Email Address' />
        <button className='btn newsletter-sub-btn'>Subscribe</button>
        <p className="font-secondary">By subscribing you agree to our Privacy Policy and consent to receive updates from our company.</p>
    </div>
  )
}

export default NewsLetterSubBox