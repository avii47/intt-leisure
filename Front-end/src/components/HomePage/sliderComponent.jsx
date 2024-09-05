
import React, { useState, useEffect, useRef, lazy } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img_01 from '../../assets/images/events-img1.png';
import img_02 from '../../assets/images/events-img2.png';
import img_05 from '../../assets/images/img24.png';

const ContentCard = lazy(() => import('./ContentCard'));

const img4 = 'https://img.freepik.com/free-photo/grunge-gray-concrete-textured-background_53876-145492.jpg?t=st=1722571110~exp=1722574710~hmac=dbe2ce48dbeca59499ad4867b3fd0ab0b1cdf15ea16e35d33162d12e12ef02e3&w=1380'

const contentData = [
    {
      'img': img_05,
      'sub': 'Wisdom in the times of Crisis'
    },
    {
      'img': img_01,
      'sub': 'Exploring the Impact of Mindfulness on Leadership'
    },
    {
      'img': img_02,
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img4,
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img4,
      'sub': 'Well trained experts to guide you through the journey.'
    },
    {
      'img': img4,
      'sub': 'Well trained experts to guide you through the journey.'
    }
    
  ];

  

export default function SimpleSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className="slider-container" style={{padding:'0 2rem 0 2rem'}}>
        <Slider {...settings}>
            {contentData.map((content, index) => (
                <ContentCard key={index} content={content} />
            ))}
        </Slider> 
    </div>
  );
}