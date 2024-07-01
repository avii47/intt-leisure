import React from 'react';

const MindfulnessTourismSection = () => {
  return (
    <section id="mindfulness-tourism-section" className="section mindfulness-tourism-section">
      <div className="mindfulness-tourism-container">
        <div className="mindfulness-tourism-content">
          <div className="row">
            <div className="col-6">
            </div>
            <div className="col-4" style={{ textAlign: 'left' }}>
              <h6 style={{ marginTop: '-50px', marginBottom: '20px' }}>Explore</h6>
              <hr style={{ width: '60px' }}></hr>
              <h3>Mindfulness Tourism</h3>
              <p>Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka, an all-inclusive luxury private resort, welcomes exclusively your family and friends alone to this private beachfront estate on the island’s fabled south coast.</p>
              <br></br><p>
                <button type="button" className="btn btn-outline-dark" style={{ width: '120px'}}>Button</button>
                <button type="button" className="btn btn-link" style={{ textDecoration: 'none', color: 'black' }}>Learn more ></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindfulnessTourismSection;