import React from 'react';
import ContentCard from '../components/ContentCard';

const content1 = {
  'img': 'https://img.freepik.com/free-photo/yoga-girl-with-wireless-headphones_1385-415.jpg?t=st=1719777236~exp=1719780836~hmac=99bbf7e4f2e10c9d01c8347945c5c101402d47af5107214bea5860603b7b2497&w=996',
  'title': 'Why Us?',
  'sub': 'Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka'
}
const content2 = {
  'img': 'https://www.nddcb.gov.lk/mindfulness/images/g4.jpg',
  'title': 'Why Sri Lanka?',
  'sub': 'Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka'
}
const content3 = {
  'img': 'https://bookretreats.com/cdn-cgi/image/width=1200,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/41k/41368/p_1480658/1000_1716793600.jpg',
  'title': 'Our Team.',
  'sub': 'Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka'
}

const AboutSection = () => {
  return (
    <section id="about-section" className="section justify-content-center d-flex">
      <div className="about-content justify-content-center">
        <h6>Discover</h6>
        <hr style={{ width: '60px' }} />
        <h3>Rediscover yourself with Mindfulness Tours and Retreats</h3>
        <p>Embraced by verdant jungle with panoramic views of the Indian Ocean, ÀNI Sri Lanka, an all-inclusive luxury private resort, welcomes exclusively your family and friends alone to this private beachfront estate on the island’s fabled south coast.</p>
        <div className="d-flex about-cards">
            <ContentCard content={content1}></ContentCard>
            <ContentCard content={content2}></ContentCard>
            <ContentCard content={content3}></ContentCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;