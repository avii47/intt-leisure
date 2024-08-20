import React, { useState, useEffect } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/PackageContent.css';

import img from '../../assets/images/aboutus-img.png'

const PackageContent = () => {

  const isMobileView = useMobileView();

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

  return (
    <section id="package-content-section" className={`section package-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="package-section-content">
        <h3 className="font-primary">Overview</h3>
        <p className="font-secondary">Unlock Your Leadership Potential with Mindfulness in Sri Lanka</p>
        <p className="font-secondary">In the serene and culturally rich backdrop of Sri Lanka, where mindfulness has thrived for centuries, INTT Leisure invites leaders like you to embark on a transformative journey towards becoming more mindful and effective in your leadership role.</p>
        <br /><h5 className='font-secondary' style={{fontSize:'20px'}}>What We Offer:</h5><hr style={{width:'160px', marginTop:'-1px'}}/>
        <p className="font-secondary">Stress Reduction in Serenity: Leaders often bear the weight of significant stress. Our mindfulness programs, set against the tranquil landscapes of Sri Lanka, provide practical techniques to manage stress, allowing you to lead with clarity and resilience.</p>
        <p className="font-secondary">Enhanced Focus amidst Natural Beauty: Immerse yourself in the lush natural beauty of Sri Lanka as mindfulness practices sharpen your focus and attention, enabling you to make better decisions and prioritize effectively.</p>
        <p className="font-secondary">Ancient Wisdom for Modern Leaders: Benefit from the wealth of mindfulness knowledge that Sri Lanka has cultivated since ancient times. Our programs seamlessly blend ancient wisdom with contemporary leadership principles.</p>
        <br /><button className='btn btn-secondary get-itinerary-btn'>Sample Itinerary</button>
        <form action="#" style={{fontSize:'20px'}}>
          <label className='font-secondary' for="itineraries" style={{marginRight:'40px', fontSize:'20px'}}>Itinerary</label>
          <select name="itineraries" id="itineraries" style={{width:'300px'}}>
            <option value="javascript">Itinerary 01</option>
            <option value="php">Itinerary 02</option>
            <option value="java">Itinerary 03</option>
            <option value="golang">Itinerary 04</option>
            <option value="python">Itinerary 05</option>
            <option value="c#">Itinerary 06</option>
            <option value="C++">Itinerary 07</option>
            <option value="erlang">Itinerary 08</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default PackageContent;
