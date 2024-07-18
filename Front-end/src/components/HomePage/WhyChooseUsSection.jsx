import React, { useState, useEffect } from 'react';
import '../CSS/AboutSection.css';
import authentic_practices from '../../assets/icons/Authentic Practices.png';
import experties from '../../assets/icons/expertise.png';
import unique_excursions from '../../assets/icons/Unique Excursions.png';
import IconCard from '../HomePage/IconCard';

const WhyChooseUsSection = () => {

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 1000); 
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const contentData = [
      {
        img: unique_excursions,
        title: 'Unique Excursions',
        sub: 'subtitile 02',
      },
      {
        img: authentic_practices,
        title: 'Authentic Practices',
        sub: 'subtitile 01',
      },
      {
        img: experties,
        title: 'Our Expertise',
        sub: 'subtitile 03',
      }
    ];

    return (
        <section id="why-chooseus-Section" className={`section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
            <div className="about-content justify-content-center" style={{textAlign: 'center'}}>
                <h3 className='font-primary'>Why Choose Us?</h3>
                <hr style={{width: '200px', margin: 'auto'}}></hr>
                <br></br>
                <p className='font-secondary' style={{fontSize: '20px'}}>A workshop was conducted at the university of Moratuwa on the 19th of June 2023.The workshop focused on enhancing the staff of the University of Moratuwa’s understanding and application of Appreciative Inquiry in the context of mindfulness-based leadership. Throughout the workshop, participants had the opportunity to listen to informative speeches delivered by Dr. GB Hewawa, sam and Jim.</p>
                <div className='icon-container d-flex justify-content-center' style={{gap: '100px', marginTop: '50px', overflow: 'auto'}}>
                  {contentData.map((content, index) => (
                      <IconCard
                        key={index}
                        content={content}
                      />
                  ))}
                </div>

            </div>
        </section>
    )
};

export default WhyChooseUsSection;