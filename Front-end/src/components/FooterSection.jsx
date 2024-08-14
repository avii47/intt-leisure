import React, { useState, useEffect } from 'react';
import { useMobileView } from '../contexts/MobileViewContext';
import addressIcon from '../assets/icons/icons8-location-pin-50.png';
import callIcon from '../assets/icons/icons8-call-50.png';
import emailIcon from '../assets/icons/icons8-email-50.png';
import logo from '../assets/images/INTT LEISURE VERTICLE.png';
import ft_icon1 from '../assets/images/footer-icon1.png';
import ft_icon2 from '../assets/images/footer-icon2.png';
import ft_icon3 from '../assets/images/footer-icon3.png';
import ft_icon4 from '../assets/images/footer-icon4.png';
import './CSS/FooterSection.css';

const Footer = () => {

  const isMobileView = useMobileView();

  return (
    <footer className={`footer justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`} >
      <div className="footer-content justify-content-center">
        <div className="footer-nav d-flex col-md-12" >
          <div>
              <a  href="/mindfulness">MINDFULNESS</a>
          </div>
          <div>
              <a href="/services">EXPERIENCE</a>
          </div>
          <div>
              <a href="/why-choose-us">WHY CHOOSE US</a>
          </div>
          <div>
              <a href="/contact-us">CONTACT US</a>
          </div>
        </div>
        <hr></hr>

        <div className='col-md-12 d-flex footer-2nd-row'>
          <div className="col-md-8">
              <div className="footer-subscription">
                  <h3>Connect</h3>
                  <p style={{margin:'22px 0'}}>
                      Keep the vacation bliss alive! Join us to deepen your mindfulness
                      practice and turn tranquility into a lasting lifestyle. Register now
                      and stay connected to your inner peace!
                  </p>
                  <form className="subscription-form">
                      <input type="email" placeholder="Your Email" />
                      <button type="submit">Subscribe Now &gt;</button>
                  </form>
                  <p>
                      By subscribing you agree to our Privacy Policy and consent to receive
                      updates from our company.
                  </p>
              </div>
          </div>
          <div className="col-md-4">
              <div className="footer-contact">
                  <address className='d-flex'>
                    <div className="col-1">
                      <img loading="lazy" src={addressIcon} className='contact-icons' alt="address icon" />
                    </div>
                    <div className="col-11" style={{marginLeft:'20px', width:'300px'}}>
                      <h5>INTT Leisure</h5>
                      No.26/6<br />
                      Major LV Gunarathna Mawatha,<br />
                      Station Road, Dehiwala-Mount Lavinia,<br />
                      Sri Lanka
                    </div>
                  </address>
                  <address className='d-flex'>
                    <div className="col-1">
                      <img loading="lazy" src={callIcon} className='contact-icons' alt="call icon" />
                    </div>
                    <div className="col-12" style={{marginLeft:'20px'}}>
                      <a href="tel:0094770437293" className='link-text'>+1 312-242-1662</a><br />
                    </div>
                  </address>
                  <address className='d-flex'>
                    <div className="col-1">
                      <img loading="lazy" src={emailIcon} className='contact-icons' alt="email icon" />
                    </div>
                    <div className="col-12" style={{marginLeft:'20px'}}>
                      <a href="mailto:isuru.tours@delmege.com" className='link-text'>info@intterminal.com</a>
                    </div>
                  </address>
              </div>
          </div>
        </div>


        <div className="footer-logos">
          <img loading="lazy" src={ft_icon1} alt="pata Logo" />
          <img loading="lazy" src={ft_icon2} alt="iata Logo" />
          {/* <img loading="lazy" src={ft_icon3} alt="manolead logo" />
          <img loading="lazy" src={ft_icon4} alt="intterminal logo" /> */}
        </div>
        <div className="footer-bottom">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookies Settings</a>
        </div>
        <div className="footer-social">
          <img loading="lazy" src={logo} style={{height:'50px', margin:'30px'}} alt="logo" />
          <h5>Follow Us On</h5>
          <div className="social-icons d-flex" style={{gap:'20px', justifyContent:'center', marginTop:'20px'}}>
            <a href="https://www.facebook.com/inttleisure" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-facebook ft-social-icon"></i>
            </a>
            <a href="https://www.pinterest.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-pinterest-square ft-social-icon"></i>
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-instagram ft-social-icon"></i>
            </a>
            <a href="https://www.linkedin.com/company/intt-leisure" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin ft-social-icon"></i>
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-x-twitter ft-social-icon"></i>
            </a>
            <a href="https://www.youtube.com/@travelglobe405" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-youtube ft-social-icon"></i>
            </a>
          </div>
        </div>
        {/* <hr></hr> */}
        <div className="footer-copyright">
          <p>&copy; 2024 inttleisure.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
