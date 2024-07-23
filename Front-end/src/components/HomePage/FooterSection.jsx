import React from 'react';
import '../CSS/FooterSection.css';
import logo from '../../assets/images/INTT LEISURE VERTICLE.png';

const FooterSection = () => {
    return (
      <section id="footer-section" className="section footer-section justify-content-center">
        <div className="footer-content">

            <div className="row d-flex">
              <div className="col-lg" style={{  }}>
                <div className="row d-flex">
                  <div className="col-md-6" style={{  }}>
                    <img style={{ marginLeft:'-1.3rem' }} src={logo} alt="" /><br></br><br></br>
                    <h6 style={{ marginLeft:'-4rem' }}>Follow us on</h6>
                    <i class="fa-brands fa-square-facebook ft-social-icon"></i>
                    <i class="fa-brands fa-pinterest-square ft-social-icon" ></i>
                    <i class="fa-brands fa-square-instagram ft-social-icon"></i><br></br>
                    <i className="fa-brands fa-linkedin ft-social-icon"><a href="https://www.linkedin.com/company/intt-leisure/"></a></i>
                    <i class="fa-brands fa-square-x-twitter ft-social-icon"></i>
                    <i class="fa-brands fa-square-youtube ft-social-icon"><a href="https://www.youtube.com/@travelglobe405"></a></i>
                  </div>
                  <div className="col-md-6 pg-link" style={{  }}>
                    <h6>Pages</h6>
                    <ul className="page-list">
                      <li style={{ marginTop: '2rem' }}>Page 01</li>
                      <li>Page 02</li>
                      <li>Page 03</li>
                      <li>Page 04</li>
                      <li>Page 05</li>
                    </ul>
                    
                  </div>
                </div>

              </div>
              <div className="col-lg">
                <div className="row d-flex">
                    <div className="" style={{ textAlign: 'left' }}>
                      <h6><strong>Connect</strong></h6>
                      <p>Keep the vacation bliss alive! Join us to deepen your mindfulness practice and turn tranquility into a lasting lifestyle. Register now and stay connected to your inner peace!</p>
                      <p>
                          <button className='btn-footer-email'>Your email</button>
                          <button className='btn btn-dark'>Learn more ></button>
                      </p>
                      <p>By subscribing you agree to our Privacy Policy and consent to receive updates from our company.</p>
                    </div>
                </div>
              </div>
            </div>
            
            <br></br><br></br>
            <hr></hr>
            <div className='row' style={{ fontSize: '10px' }}>
                <div className='col-6' style={{ textAlign: 'left' }}>
                    <p>C 2024 inttleisure.com. All rights reserves.</p>
                </div>
                <div className='col-6' style={{ textAlign: 'right' }}>
                    <button className='btn btn-footer'>Privacy Policy</button>
                    <button className='btn btn-footer'>Terms of Service</button>
                    <button className='btn btn-footer'>Cookies Settings</button>
                </div>
            </div>
          </div>
      </section>
    );
  };

export default FooterSection;