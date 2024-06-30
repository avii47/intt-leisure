import React from 'react';

const HeroSection = () => {
  return (
    <div id="Hero-section" className="section hero-section">
      <div className="hero-background-container">
        <div className="hero-content">
          <h1>Experience <span style={{ color: 'black' }}>Mindfulness Tourism</span> in Sri Lanka</h1>
          <p>Discover the beauty of Sri Lanka through mindfulness practices</p>
          <button type="button" className="btn btn-dark">Book Your Trip Today</button>

          <div className="d-flex justify-content-center hero-cards-container col-12">
            <div className="hero-card col-1">
              <img src="https://img.freepik.com/free-photo/concentrated-woman-meditating-nature_1098-1412.jpg" className="hero-card-img" alt="..." />
            </div>
            <div className="hero-card col-1">
              <img src="https://img.freepik.com/free-photo/concentrated-woman-meditating-nature_1098-1412.jpg" className="hero-card-img" alt="..." />
            </div>
            <div className="hero-card col-1">
              <img src="https://img.freepik.com/free-photo/concentrated-woman-meditating-nature_1098-1412.jpg" className="hero-card-img" alt="..." />
            </div>
          </div>

          <div className="bottom-viewbar d-flex">
            <div className="bottom-viewbar-content d-flex">
                <h5 className="bottom-viewbar-text">Introduced By Manolead</h5>
                <img src="https://pbs.twimg.com/profile_images/1584892301175840769/fSw966m1_400x400.jpg" alt="" className='bottom-viewbar-img'/>
                <img src="https://www.sew.ai/sites/default/files/2021-07/ftc-social_2.png" alt="" className='bottom-viewbar-img'/>
                <i className="fa-brands fa-facebook social-icon"></i>
                <i className="fa-brands fa-linkedin social-icon"></i>
                <i className="fa-brands fa-youtube social-icon"></i>
                <i className="fa-brands fa-instagram social-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;