// Footer.js
import React from 'react';
import './CSS/FooterSection.css';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-nav d-flex" style={{ width:'100%'}}>
        <div>
            <a  href="#page01">PAGE 01</a>
        </div>
        <div>
            <a href="#page02">PAGE 02</a>
        </div>
        <div>
            <a href="#page03">PAGE 03</a>
        </div>
        <div>
            <a href="#page04">PAGE 04</a>
        </div>
        <div>
            <a href="#page05">PAGE 05</a>
        </div>
      </div><hr></hr>

      <div className='col-12 d-flex'>
        <div className="col-6">
            <div className="footer-subscription">
                <h3>Connect</h3>
                <p>
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
        <div className="col-6">
            <div className="footer-contact">
                <h3>Delmege Tours</h3>
                <address>
                    No. 101, Vinayalankara Mawatha,<br />
                    Colombo 10, Sri Lanka.<br />
                    <a href="tel:0094770437293">0094 770437293</a><br />
                    <a href="mailto:isuru.tours@delmege.com">isuru.tours@delmege.com</a>
                </address>
            </div>
        </div>

      </div>


      <div className="footer-logos">
        <img src="pata-logo.png" alt="PATA Logo" />
        <img src="iata-logo.png" alt="IATA Logo" />
        <img src="agent-logo.png" alt="Accredited Agent Logo" />
        <img src="other-logo.png" alt="Other Logo" />
      </div>
      <div className="footer-bottom">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#cookies">Cookies Settings</a>
      </div>
      <div className="footer-social">
        <h3>Follow Us On</h3>
        <div className="social-icons">
          <a href="#facebook"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#twitter"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#instagram"><img src="instagram-icon.png" alt="Instagram" /></a>
          <a href="#linkedin"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
          <a href="#youtube"><img src="youtube-icon.png" alt="YouTube" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 inttleisure.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
