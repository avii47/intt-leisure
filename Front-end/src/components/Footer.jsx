import React from "react";
import Modal from "../components/BookNowPage/Modal";
import { useMobileView } from "../contexts/MobileViewContext";
import { useNewsletterSubscription } from "../hooks/useNewsletterSubscription";
import "./CSS/FooterSection.css";

import addressIcon from "../assets/icons/icons8-location-pin-50-w.png";
import callIcon from "../assets/icons/icons8-call-50-w.png";
import emailIcon from "../assets/icons/icons8-email-50-w.png";
import logo from "../assets/icons/INTT Leisure Logo-02.png";
import ARC_logo from "../assets/icons/ARC logo.png";
import IATA_logo from "../assets/icons/IATA logo.png";
import Civil_aviation_License from "../assets/icons/Civil aviation License.png";
import SLTDA_Certified from "../assets/icons/SLTDA Certified.png";

const Footer = () => {
  const isMobileView = useMobileView();
  const { email, setEmail, showModal, handleSubscribe, setShowModal } =
    useNewsletterSubscription();

  return (
    <footer className={`footer justify-content-center d-flex ${isMobileView ? "mobile-view" : ""}`}>
      <div className="footer-content justify-content-center">
        <p className="ft-top-txt">
          Keep the vacation bliss alive! Join us to deepen your mindfulness
          practice and turn tranquility into a lasting lifestyle. Register now
          and stay connected to your inner peace!
        </p>
        <hr style={{display: isMobileView? 'none': 'block'}}></hr>

        <div className={`footer-main-container`}>
          <div className="col-md-4" style={{ textAlign: "left" }}>
            <img loading="lazy" src={logo} className="ft-logo" alt="logo" />
            <p>
              By subscribing you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
            <form className="subscription-form">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" onClick={handleSubscribe}>
                Subscribe Now
              </button>
            </form>
            <div className="certificate-container">
              <h5 style={{ margin: "50px 0 20px 0" }}>Our Certificates</h5>
              <div className="footer-logos">
                <div className="col-sm-3">
                  <img
                    loading="lazy"
                    className="certificate-img"
                    src={IATA_logo}
                    alt="iata Logo"
                  />
                </div>
                <div className="col-sm-3">
                  <img
                    loading="lazy"
                    className="certificate-img"
                    src={ARC_logo}
                    alt="pata Logo"
                  />
                </div>
                <div className="col-sm-3">
                  <img
                    loading="lazy"
                    className="certificate-img"
                    src={SLTDA_Certified}
                    alt="iata Logo"
                  />
                </div>
                <div className="col-sm-3">
                  <img
                    loading="lazy"
                    className="certificate-img"
                    src={Civil_aviation_License}
                    alt="pata Logo"
                  />
                </div>
              </div>
            </div>
          </div>

          {isMobileView ? (
            <>
              <div className="col-md footer-nav d-flex">
                <h5 style={{ marginBottom: "-20px" }}>Useful Links</h5>
                <div className="col-md-12 d-flex" style={{ gap: "80px" }}>
                  <div className="col-md-6">
                    <div>
                      <a href="/mindfulness">Mindfulness</a>
                    </div>
                    <div>
                      <a href="/services">Experience</a>
                    </div>
                    <div>
                      <a href="/why-choose-us">Why Choose Us</a>
                    </div>
                    <div>
                      <a href="/contact-us">Contact Us</a>
                    </div>
                    <div>
                      <a href="/termsConditions">Terms of Service</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <a href="/destinations">Destinations</a>
                    </div>
                    <div>
                      <a href="/blogs">Blogs</a>
                    </div>
                    <div>
                      <a href="/events&news">Events & News</a>
                    </div>
                    <div>
                      <a href="/privacyPolicy">Privacy Policy</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 footer-con">
                <h5 style={{ marginBottom: "20px" }}>Contact Info</h5>
                <div className="ftc">
                  <address className="d-flex">
                    <div className="col">
                      <h5>Sri Lanka</h5>
                      No.26/6
                      <br />
                      Major LV Gunarathna Mawatha,
                      <br />
                      Station Road, Dehiwala
                      <br />
                      Sri Lanka
                    </div>
                  </address>
                  <address className="d-flex">
                    <div className="col">
                      <a href="tel:+94 774 48 48 48" className="link-text">
                        +94 774 48 48 48
                      </a>
                      <br />
                    </div>
                  </address>
                  <address className="d-flex">
                    <div className="col">
                      <a
                        href="mailto:sales@intterminal.com"
                        className="link-text"
                      >
                        sales@intterminal.com
                      </a>
                    </div>
                  </address>
                </div>
              </div>
              <div className="footer-con">
                <div className="ftc" style={{ marginTop: "45px" }}>
                  <address className="d-flex">
                    <div className="col">
                      <h5>United States of America</h5>
                      1803 Wicklow Road Naperville
                      <br />
                      IL 60564, Chicago, USA
                    </div>
                  </address>
                  <address className="d-flex">
                    <div className="col">
                      <a href="tel:+1 312-242-1662" className="link-text">
                        +1 312-242-1662
                      </a>
                      <br />
                    </div>
                  </address>
                  <address className="d-flex">
                    <div className="col">
                      <a
                        href="mailto:info@intterminal.com"
                        className="link-text"
                      >
                        info@intterminal.com
                      </a>
                    </div>
                  </address>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-1 footer-nav">
                <h5 style={{ marginBottom: "20px" }}>Useful Links</h5>
                <div>
                  <a href="/mindfulness">Mindfulness</a>
                </div>
                <div>
                  <a href="/services">Experience</a>
                </div>
                <div>
                  <a href="/why-choose-us">Why Choose Us</a>
                </div>
                <div>
                  <a href="/contact-us">Contact Us</a>
                </div>
                <div>
                  <a href="/privacyPolicy">Privacy Policy</a>
                </div>
                <div>
                  <a href="/termsConditions">Terms of Service</a>
                </div>
              </div>
              <div className="col-md-1 footer-nav">
                <h5 style={{ marginBottom: "20px" }}>Explore</h5>
                <div>
                  <a href="/destinations">Destinations</a>
                </div>
                <div>
                  <a href="/blogs">Blogs</a>
                </div>
                <div>
                  <a href="/events&news">Events & News</a>
                </div>
              </div>
              <div className="col-md-2 footer-con">
                <h5 style={{ marginBottom: "20px" }}>Contact Info</h5>
                <div className="ftc">
                  <address className="d-flex">
                    <div className="col-1">
                      <img
                        loading="lazy"
                        src={addressIcon}
                        className="contact-icons"
                        alt="address icon"
                      />
                    </div>
                    <div
                      className="col-11"
                      style={{ marginLeft: "20px", width: "300px" }}
                    >
                      <h5>Sri Lanka</h5>
                      No.26/6
                      <br />
                      Major LV Gunarathna Mawatha,
                      <br />
                      Station Road, Dehiwala
                      <br />
                      Sri Lanka
                    </div>
                  </address>
                  <address className="d-flex">
                    <div className="col-1">
                      <img
                        loading="lazy"
                        src={callIcon}
                        className="contact-icons"
                        alt="call icon"
                      />
                    </div>
                    <div className="col-12" style={{ marginLeft: "20px" }}>
                      <a href="tel:+94 774 48 48 48" className="link-text">
                        +94 774 48 48 48
                      </a>
                      <br />
                    </div>
                  </address>
                  <address className="d-flex">
                    <div className="col-1">
                      <img
                        loading="lazy"
                        src={emailIcon}
                        className="contact-icons"
                        alt="email icon"
                      />
                    </div>
                    <div className="col-12" style={{ marginLeft: "20px" }}>
                      <a
                        href="mailto:sales@intterminal.com"
                        className="link-text"
                      >
                        sales@intterminal.com
                      </a>
                    </div>
                  </address>
                </div>
              </div>
              <div className="col-2 footer-con" style={{ textAlign: "left" }}>
                <div className="ftc" style={{ marginTop: "45px" }}>
                  <address className="d-flex">
                    <div className="col-1">
                      <img
                        loading="lazy"
                        src={addressIcon}
                        className="contact-icons"
                        alt="address icon"
                      />
                    </div>
                    <div
                      className="col-11"
                      style={{ marginLeft: "20px", width: "300px" }}
                    >
                      <h5>United States of America</h5>
                      1803 Wicklow Road Naperville
                      <br />
                      IL 60564
                      <br />
                      Chicago <br />
                      USA
                    </div>
                  </address>
                  <address className="d-flex">
                    <div className="col-1">
                      <img
                        loading="lazy"
                        src={callIcon}
                        className="contact-icons"
                        alt="call icon"
                      />
                    </div>
                    <div className="col-12" style={{ marginLeft: "20px" }}>
                      <a href="tel:+1 312-242-1662" className="link-text">
                        +1 312-242-1662
                      </a>
                      <br />
                    </div>
                  </address>
                  <address className="d-flex">
                    <div className="col-1">
                      <img
                        loading="lazy"
                        src={emailIcon}
                        className="contact-icons"
                        alt="email icon"
                      />
                    </div>
                    <div className="col-12" style={{ marginLeft: "20px" }}>
                      <a
                        href="mailto:info@intterminal.com"
                        className="link-text"
                      >
                        info@intterminal.com
                      </a>
                    </div>
                  </address>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="footer-social">
          <div
            className="social-icons d-flex"
            style={{ gap: "20px", marginTop: "100px" }}
          >
            <a
              href="https://www.facebook.com/inttleisure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-facebook ft-social-icon"></i>
            </a>
            <a
              href="https://www.instagram.com/inttleisure/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-instagram ft-social-icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/intt-leisure?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin ft-social-icon"></i>
            </a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fint_terminal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-x-twitter ft-social-icon"></i>
            </a>
            <a
              href="https://www.youtube.com/@travelglobe405"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-youtube ft-social-icon"></i>
            </a>
          </div>
          <hr />
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 inttleisure.com. All rights reserved.</p>
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2>Your subscription to our list has been confirmed.</h2>
          <br></br>
          <p>
            Thank you for subscribing! <br />
            Look out for news and updates
          </p>
        </Modal>
      </div>
    </footer>
  );
};

export default Footer;
