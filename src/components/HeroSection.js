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
              <img src="https://img.freepik.com/free-photo/smiling-female-athlete-doing-stretching-exercise-cobra-pose-rocky-beach-sunset-copy-space_637285-5493.jpg?t=st=1719801249~exp=1719804849~hmac=cf76f9d0dfb7c51f3a629a4fe864d0d6fd0afa0ce34e45909be7f811937c9524&w=996" className="hero-card-img" alt="..." />
            </div>
            <div className="hero-card col-1">
              <img src="https://img.freepik.com/free-photo/beautiful-girl-sitting-cliff_72229-751.jpg?t=st=1719801289~exp=1719804889~hmac=bd7b69865680a33e9bdf0fb58337eaa4c0da2449d98744bff4ee9332501f6296&w=996" className="hero-card-img" alt="..." />
            </div>
            <div className="hero-card col-1">
              <img src="https://img.freepik.com/free-photo/beautiful-woman-doing-yoga-beach_72229-1499.jpg?t=st=1719801320~exp=1719804920~hmac=2a309f14ff4af1c071df32418ef6536614312442fcfcb26a84525e4d197a1ecb&w=996" className="hero-card-img" alt="..." />
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