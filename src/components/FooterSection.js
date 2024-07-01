import React from 'react';

const FooterSection = () => {
    return (
      <section id="footerSection" className="section footerSection justify-content-center d-flex">
        <div className="footer-content">
            <div className="row">
              <div className="col-6" style={{ textAlign: 'left' }}>
                <img className="logo" src="https://pbs.twimg.com/profile_images/1584892301175840769/fSw966m1_400x400.jpg" alt="" />
                <p>Keep the vacation bliss alive! Join us to deepen your mindfulness practice and turn tranquility into a lasting lifestyle. Register now and stay connected to your inner peace!</p>
                <p>
                    <button style={{ width: '300px', marginRight: '20px' }}>Your email</button>
                    <button style={{ width: '150px' }}>Subscribe</button>
                </p>
                <p>By subscribing you agree to our Privacy Policy and consent to receive updates from our company.</p>
              </div>
              <div className="col-6" style={{ paddingTop: '30px', paddingLeft: '20px' }}>
                <div className="row">
                    <div className='col-4'>
                        <p><strong>Pages</strong></p>
                        <p><a href='#'>Page 01</a></p>
                        <p><a href='#'>Page 02</a></p>
                        <p><a href='#'>Page 03</a></p>
                        <p><a href='#'>Page 04</a></p>
                        <p><a href='#'>Page 05</a></p>
                    </div>
                    <div className='col-4'>
                        <p><strong>Links</strong></p>
                        <p><a href='#'>Link 01</a></p>
                        <p><a href='#'>Link 02</a></p>
                        <p><a href='#'>Link 03</a></p>
                        <p><a href='#'>Link 04</a></p>
                        <p><a href='#'>Link 05</a></p>
                    </div>
                    <div className='col-4'>
                        <p><strong>Fallow us</strong></p>
                        <p><a href='#'>Link 01</a></p>
                        <p><a href='#'>Link 02</a></p>
                        <p><a href='#'>Link 03</a></p>
                        <p><a href='#'>Link 04</a></p>
                        <p><a href='#'>Link 05</a></p>
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