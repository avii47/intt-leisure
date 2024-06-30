import React from 'react';
import ContentCard from '../components/ContentCard';

const DiscoverSection = () => {

    const content = {
        'img': 'https://img.freepik.com/free-photo/thoughtful-pretty-girl-trying-calm-down-sitting-lotus-pose-marble-slab_8353-6639.jpg?t=st=1719571074~exp=1719574674~hmac=97fd683e6e394b72a9bab8fa369857bceb413055afed3d19bb40e5060a962a1f&w=996',
        'title': 'Connect with Nature and Rejuvenate Your Soul',
        'sub': 'Embraced by verdant jungle with panoramic views of the Indian Ocean'
    }

  return (
    <section id="discover-section" className="section">
      <div className="discover-content">
        <h6>Discover</h6>
        <hr style={{ width: '60px' }} />
        <h3>Rediscover yourself with Mindfulness Tours and Retreats</h3>
        <p>Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka, an all-inclusive luxury private resort, welcomes exclusively your family and friends alone to this private beachfront estate on the island’s fabled south coast.</p>
        <div className="d-flex discover-cards">
          <ContentCard content={content}></ContentCard>
        </div>
        <br /><br />
        <button type="button" className="btn btn-outline-dark">Explore</button>
        <button type="button" className="btn btn-link" style={{ textDecoration: 'none' }}>Learn more ></button>
      </div>
    </section>
  );
};

export default DiscoverSection;