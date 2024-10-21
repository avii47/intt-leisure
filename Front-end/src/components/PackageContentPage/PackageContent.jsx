import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMobileView } from '../../contexts/MobileViewContext';

const PackageContent = ({content}) => {

  const isMobileView = useMobileView();
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.getElementById('rw4');
    const textSection = document.getElementById('text4');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add('animate-text');
        }
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById('rw5');
    const textSection = document.getElementById('text5');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add('animate-text');
        }
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById('rw6');
    const textSection = document.getElementById('text6');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add('animate-text');
        }
      },
      { threshold: 0.5 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleOnClick = (path) => {
    navigate(path);
  };

  return (
    <section id="package-content-section" className={`package-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="package-section-content page-section">
        <h5 className='font-secondary' style={{ fontSize: '20px' }}>Overview</h5><hr style={{ width: '100px', marginTop: '-1px' }} />
        <p className="font-secondary">{content.subtitle}</p>
        <p className="font-secondary">{content.description}</p>
        <br /><h5 className='font-secondary' style={{ fontSize: '20px' }}>What We Offer:</h5><hr style={{ width: '160px', marginTop: '-1px' }} />
        <ul>
        {content.offers.map((offer, index) => (
          <li key={index}>
            <h5>{offer.offer}</h5>
            <p>{offer.description}</p>
          </li>
        ))}
      </ul>
        <br /><button className='btn btn-secondary get-itinerary-btn' onClick={() => handleOnClick('/contact-us')}>Customize Your Itinerary</button>
      </div>
    </section>
  );
};

export default PackageContent;
