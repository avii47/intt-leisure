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
        src={"https://img.freepik.com/free-photo/bright-beautiful-flowers-red-poppies-field-ai-generated-image_587448-1304.jpg?t=st=1730184549~exp=1730188149~hmac=7a8a7e225e9ce0aa2cf17c7a326cb4ea8f7a0e007140901eb3173ef6c660d630&w=1380"}
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
