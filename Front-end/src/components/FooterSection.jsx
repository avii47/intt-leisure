import React, { useState, useEffect } from 'react';
import { useMobileView } from '../contexts/MobileViewContext';
import addressIcon from '../assets/icons/icons8-location-pin-50.png';
import callIcon from '../assets/icons/icons8-call-50.png';
import emailIcon from '../assets/icons/icons8-email-50.png';
import logo from '../assets/images/INTT LEISURE VERTICLE.png';
import ft_icon1 from '../assets/images/footer-icon1.png';
import ft_icon2 from '../assets/images/footer-icon2.png';
import './CSS/FooterSection.css';

const Footer = () => {

  const isMobileView = useMobileView();

  return (
    <footer className={`footer ${isMobileView ? 'mobile-view' : ''}`} >
      <div className="footer-content">
        <div className="footer-nav d-flex col-md-12" >
          <div>
              <a  href="#page01">SERVICES</a>
          </div>
          <div>
              <a href="#page02">MINDFULNESS</a>
          </div>
          <div>
              <a href="#page03">EVENTS & NEWS</a>
          </div>
          <div>
              <a href="#page04">WHY CHOOSE US</a>
          </div>
          <div>
              <a href="#page05">CONTACT US</a>
          </div>
        </div>
        <hr></hr>

        <div className='col-md-12 d-flex footer-2nd-row'>
          <div className="col-md-8">
              <div className="footer-subscription">
                  <h3>Connect</h3>
                  <p >
                      Keep the vacation bliss alive! Join us to deepen your mindfulness
                      practice and turn tranquility into a lasting lifestyle. Register now
                      and stay connected to your inner peace!
                  </p>
                  <form className="subscription-form">
                      <input type="email" placeholder="Your Email" />
                      <button type="submit">Learn More &gt;</button>
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
                      <img src={addressIcon} className='contact-icons' alt="" />
                    </div>
                    <div className="col-12" style={{marginLeft:'20px'}}>
                      <h5>INT Leasure</h5>
                      No. 101, Vinayalankara Mawatha,<br />
                      Colombo 10, Sri Lanka.
                    </div>
                  </address>
                  <address className='d-flex'>
                    <div className="col-1">
                      <img src={callIcon} className='contact-icons' alt="" />
                    </div>
                    <div className="col-12" style={{marginLeft:'20px'}}>
                      <a href="tel:0094770437293" className='link-text'>+94 77 4 48 48 48</a><br />
                    </div>
                  </address>
                  <address className='d-flex'>
                    <div className="col-1">
                      <img src={emailIcon} className='contact-icons' alt="" />
                    </div>
                    <div className="col-12" style={{marginLeft:'20px'}}>
                      <a href="mailto:isuru.tours@delmege.com" className='link-text'>info@intterminal.com</a>
                    </div>
                  </address>
              </div>
          </div>
        </div>


        <div className="footer-logos">
          <img src={ft_icon1} alt="PATA Logo" />
          <img src={ft_icon2} alt="IATA Logo" />
          <img src="agent-logo.png" alt="logo 01" />
          <img src="other-logo.png" alt="logo 02" />
        </div>
        <div className="footer-bottom">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookies Settings</a>
        </div>
        <div className="footer-social">
          <img src={logo} style={{height:'50px', margin:'30px'}} alt="" />
          <h5>Follow Us On</h5>
          <div className="social-icons d-flex" style={{gap:'20px', justifyContent:'center', marginTop:'20px'}}>
              <i className="fa-brands fa-square-facebook ft-social-icon"></i>
              <i className="fa-brands fa-pinterest-square ft-social-icon" ></i>
              <i className="fa-brands fa-square-instagram ft-social-icon"></i>
              <i className="fa-brands fa-linkedin ft-social-icon"></i>
              <i className="fa-brands fa-square-x-twitter ft-social-icon"></i>
              <i className="fa-brands fa-square-youtube ft-social-icon"></i>
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
