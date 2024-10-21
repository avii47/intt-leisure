import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMobileView } from '../contexts/MobileViewContext';
import { useDropdown } from '../contexts/DropdownContext'; 
import './CSS/ContentHeroSection.css';
import Lottie from 'lottie-react';
import animationData from '../assets/icons/down-arrow2.json';

const ContentHeroSection = ({ img, title, topic }) => {
  const isMobileView = useMobileView();
  const [isblogTitle, setIsblogTitle] = useState(false);

  const { dropdownVisible1, dropdownVisible2 } = useDropdown();  

  useEffect(() => {
    const wordCount = title.trim().length === 0 ? 0 : title.trim().split(/\s+/).length;
    setIsblogTitle(wordCount >= 5);
  }, [title]);

  useEffect(() => {
    const section = document.getElementById('content-hero-section');
    const heading = document.getElementById('content-hero-heading-section');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add('animate-heading');
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

  return (
    <div id="content-hero-section" className={`content-hero-section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="content-hero-overlayer"></div>
      <LazyLoadImage
        src={"https://img.freepik.com/free-psd/gradient-waves-border-design_23-2150756135.jpg?t=st=1729431352~exp=1729434952~hmac=3aae6e307d5ad05c4a02b3a316e1a50c6b7095138996bd1d8b8f82af13f5c885&w=1380"}
        className="content-hero-img"
        alt="hero image"
      />
      <div className="content-hero-content">
        {/* Conditionally hide only the content-hero-heading */}
        {!dropdownVisible1 && !dropdownVisible2 && (
          <div id='content-hero-heading-section' className="content-hero-heading-section">
            <h1 className='content-hero-heading font-primary' style={{ width: isMobileView ? '100%' : '50%', marginInline: 'auto', fontSize: isMobileView ? '35px' : '40px' }}>
              {topic}
            </h1>
            <h6 className='font-secondary' style={{fontWeight:'300'}}>{title}</h6>
            <Lottie loading="lazy" className='content-hero-arrow-icon' animationData={animationData}></Lottie>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContentHeroSection;
