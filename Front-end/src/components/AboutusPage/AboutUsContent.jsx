import React, { useState, useEffect, lazy, useRef } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import "../../components/CSS/Home/AboutSection.css";

import img from '../../assets/images/our-story-img.png'
import achievement_img1 from '../../assets/images/achievements-img1.png'
import achievement_img2 from '../../assets/images/achievements-img2.png'
import gb from '../../assets/images/gb.png'
import vision_icon from '../../assets/icons/vision_icon.png'
import mission_icon from '../../assets/icons/mission_icon.png'

import testImg from '../../assets/images/Group 69.png';

import left_arrow from '../../assets/icons/left-arrow.png';
import right_arrow from '../../assets/icons/right-arrow.png';
import IconCard from './IconCard';
import contentData from '../../data/WhyChooseUsSectionData';
import "../../components/CSS/Home/WhyChooseUsSection.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const WhyChooseUsSection = lazy(() => import('../../components/HomePage/WhyChooseUsSection'));

const WhyChooseUsSection = () => {

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const iconCardsRef = useRef([]);
  let sliderRef = useRef(null);

  const isMobileView = useMobileView();

  const updateButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateButtons();
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', updateButtons);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', updateButtons);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    iconCardsRef.current.forEach(card => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      iconCardsRef.current.forEach(card => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [iconCardsRef]);

  const updateButtonVisibility = (currentSlide) => {
    setShowLeftButton(currentSlide > 0);
    setShowRightButton(currentSlide < contentData.length - 4);
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => updateButtonVisibility(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 669,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };


  return (
    <section id="why-chooseus-Section" className={`section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`} style={{ marginTop:'-100px'}}>
      <div className="why-chooseus-content justify-content-center" style={{marginTop:'-120px'}}>
        <div className="col-12 d-flex">
          <div className="col why-cu-text-col">
            <h3 className='font-primary'>What Makes Us Unique?</h3>
            <hr style={{ width: '400px', marginTop: '-1px' }}></hr>
            <br></br>
            <p className='font-secondary'>Experience authentic mindfulness according to Buddha’s teachings, designed by Forbes-certified coach Dr. Gamini Hewawasam. Rooted in Sri Lankan heritage and backed by research, our programs guide you through ancient practices in carefully chosen locations, ensuring a seamless, expert-managed journey.</p>
          </div>
          <div className="col-1 nav-icon-col">
            <div className='service-card-nav-icons'>
              <img className={`nav-icon ${!showLeftButton ? 'disabled' : ''}`} src={left_arrow} onClick={previous}></img>
              <img className={`nav-icon ${!showRightButton ? 'disabled' : ''}`} src={right_arrow} onClick={next}></img>
            </div>
          </div>
        </div>

        <div className="icon-container-wrapper">
          <div className="slider-container" style={{ paddingBottom: '20px', textAlign: 'center' }} >
            {/* <Slider ref={slider => { sliderRef = slider; }} {...settings}>
              {contentData.map((content, index) => (
                <IconCard
                  className={`icon-card`}
                  key={index}
                  content={content}
                  ref={el => iconCardsRef.current[index] = el}
                  style={{ '--animation-order': index }}
                />
              ))}
            </Slider> */}
              {contentData.map((content, index) => (
                <IconCard
                  className={`icon-card`}
                  key={index}
                  content={content}
                  ref={el => iconCardsRef.current[index] = el}
                  style={{ '--animation-order': index }}
                />
              ))}
          </div>
        </div>

      </div>
    </section>
  )
};

const AboutUsContent = () => {

  const isMobileView = useMobileView();
  const offset = 200;
  const iconCardsRef = useRef([]);

  useEffect(() => {
    const section = document.querySelector('.top-section');
    const cols = document.querySelectorAll('.top-col');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cols.forEach((col, index) => {
            col.style.animation = `slideInLeft 1s ease-out forwards ${index * 0.2}s`;
          });
        }
      },
      { threshold: 0.1 }
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
    const section = document.getElementById('our-story');
    const blockSection = document.getElementById('our-story-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blockSection.classList.add('animate-block');
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
    const section = document.getElementById('our-missionVision');
    const blockSection = document.getElementById('our-missionVision-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blockSection.classList.add('animate-vmCard');
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
    const section = document.getElementById('our-achievements');
    const blockSection = document.getElementById('our-achievements-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blockSection.classList.add('animate-block');
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
    const section = document.getElementById('ceo-message');
    const blockSection = document.getElementById('ceo-message-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blockSection.classList.add('animate-vmCard');
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

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition - offset,  
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    iconCardsRef.current.forEach(card => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      iconCardsRef.current.forEach(card => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [iconCardsRef]);


  return (
    <section id="aboutus-content-section" className={`section aboutus-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="aboutus-section-content">
        {/* <WhyChooseUsSection /> */}
        {/* <div id='top-section' className="top-section d-flex">
          <div className="col-lg-3 top-col" style={{ padding: '0 40px 0 0' }}>
            <a href="#our-story" onClick={(e) => handleScroll(e, 'our-story')}>
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>Our Story</h3>
              </div>
            </a>
          </div>
          <div className="col-lg-3 top-col" style={{ padding: '0 40px 0 0' }}>
            <a href="#our-missionVision" onClick={(e) => handleScroll(e, 'our-missionVision')}>
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>Our Vision</h3>
              </div>
            </a>
          </div>
          <div className="col-lg-3 top-col" style={{ padding: '0 30px 0 0' }}>
            <a href="#our-achievements" onClick={(e) => handleScroll(e, 'our-achievements')}>
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>Achievements</h3>
              </div>
            </a>
          </div>
          <div className="col-lg-3 top-col" style={{ padding: '0 0 0 30px' }}>
            <a href="#ceo-message" onClick={(e) => handleScroll(e, 'ceo-message')}>
              <div className="topic-item">
                <h3 className='font-primary topic-item-text'>A Word From CEO</h3>
              </div>
            </a>
          </div>
        </div> */}



        <section id='top-cards' className='top-cards why-choose-item'>
          <div id='top-cards-content' className="top-cards-content row d-flex">
            <h2 className='font-primary' style={{textAlign:'left', marginBottom:'10px'}}>Why Choos Us</h2><hr/>

            {contentData.map((content, index) => (
              <div className="col-md-4 col-sm-6 col-12" key={index} style={{marginTop: isMobileView? '0':'50px'}}>
                <IconCard
                  className={`icon-card2`}
                  content={content}
                  ref={el => iconCardsRef.current[index] = el}
                  style={{ '--animation-order': index }}
                />
              </div>
            ))}
            

          </div>
        </section>

        <section id='our-story' className='our-story why-choose-item' style={{marginTop:'80px'}}>
          <div id='our-story-content' className="our-story-content col-12 d-flex" style={{flexWrap:'wrap'}}>
            <div className="col-lg-8 txt-col">
              <div>
                <h2 className='font-primary' style={{textAlign:'left', marginBottom:'10px'}}>Our Story</h2><hr />
                <h3 className="font-secondary" style={{fontSize:'25px', marginTop:'40px'}}>At the heart of our mindfulness vacations is Dr. Gamini Hewawasam</h3>
                <p className="font-secondary">Dr. GB Hewawasam, a Forbes Coach Council member and a leading practitioner of the original form of mindfulness, carries over 12 years of experience in the travel industry in the USA, thus making him an ideal expert regarding the benefits of Mindfulness Tourism. Through his extensive research and experience, Dr. Hewawasam has recognized a gap between traditional mindfulness teachings preserved in Sri Lanka and the often diluted Western practices. </p><br />
                <p className="font-secondary">Dedicated to bridging this gap, Dr. Hewawasam invites seekers like you to experience mindfulness in its most authentic form. Our meticulously crafted itineraries are designed to satisfy your personal goals, allowing you to truly immerse yourself in the essence of mindfulness as practiced for centuries in Sri Lanka.</p><br />
                <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique style and perspective, providing a deep and meaningful experience that goes beyond conventional practices. Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
              </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: 'right' }}>
              <img src={img} alt="our-story-image" className='story-img' />
            </div>
          </div>
        </section>

        <section id='our-missionVision' className='our-missionVision why-choose-item'>
          <div id='our-missionVision-content' className='our-missionVision-content d-flex col-md-12'>
              <div className="col-md-4 d-flex vm-card-col">
                <div className='vm-container'>
                  <h3 className="font-primary">Our Vision</h3>
                  <img src={vision_icon} alt="vision_icon" style={{height:'200px', marginBottom:'40px'}}/>
                  <p className="font-secondary" style={{fontSize:'20px'}}>To unlock leadership potential with mindfulness vacations.</p>
                </div>
              </div>
              <div className="col-md-4 d-flex vm-card-col" style={{justifyContent:'center'}}>
                <div className='vm-container'>
                  <h3 className="font-primary">Our Mission</h3>
                  <img src={mission_icon} alt="mission_icon" style={{height:'200px', marginBottom:'40px'}}/>
                  <p className="font-secondary" style={{fontSize:'20px'}}>To uncover the hidden gem of authentic Buddhist teachings that provide the key to intellectual and emotional balance.</p>
                </div>
              </div>
              <div className="col-md-4 d-flex vm-card-col" style={{justifyContent:'right' }}>
                <div className='vm-container'>
                  <h3 className="font-primary">Our Goals</h3>
                  <img src={mission_icon} alt="mission_icon" style={{height:'200px', marginBottom:'40px'}}/>
                  <p className="font-secondary" style={{fontSize:'20px'}}>To uncover the hidden gem of authentic Buddhist teachings that provide the key to intellectual and emotional balance.</p>
                </div>
              </div>
          </div>
        </section>

        <section id='our-achievements' className='our-achievements why-choose-item' style={{}}>
            {/* <h3 className="font-primary">Our Achievements</h3> */}
            <div id='our-achievements-content' className='our-achievements-content'>
              {/* <div className="row d-flex" style={{flexWrap:'wrap'}}>
                <div className="col-lg-4">
                  <img className='achivement-img' src={achievement_img1} alt="" />
                </div>
                <div className="col-lg-7 txt-col">
                  <div className='txt-col-p'>
                    <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices. Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
                  </div>
                </div>
              </div><br></br><br></br><br></br>
              <div className="row d-flex" style={{flexWrap:'wrap'}}>
                <div className="col-lg-4">
                  <img className='achivement-img' src={achievement_img2} alt="" />
                </div>
                <div className="col-lg-7 txt-col">
                  <div className='txt-col-p2'>
                    <p className="font-secondary">Every aspect of your journey is tailored to resonate with your unique leadership needs, providing a deep and meaningful experience that goes beyond conventional practices. Discover the true depth and serenity of mindfulness, guided by Dr. Hewawasam’s expertise, and enrich your leadership journey with us.</p>
                  </div>
                </div>
              </div> */}
              <img src={testImg} alt="" style={{width:'100vw'}} />
            </div>
        </section>

        <section id='ceo-message' className='ceo-message why-choose-item'>
          <div id='ceo-message-content' className="ceo-message-content col-12 d-flex" style={{flexWrap:'wrap'}}>
            <div className="col-lg-7 txt-col">
              <div>
                <h3 className="font-primary">Meet Our Visionary</h3>
                <p className="font-secondary">“Mindfulness is approached from many perspectives, yet its true essence often remains elusive. It is time to bring clarity to its origins and explore its transformative potential in our lives." - Dr. Gamini Hewawasam. </p><br />
                <p className="font-secondary">Dr. Gamini Hewawasam, a distinguished executive and mindfulness expert with over 20 years in the airline industry and leadership development, is the founder and CEO of INTT Leisure. With a Ph.D. and a deep commitment to personal and professional growth, Dr. Hewawasam integrates techniques like Anapanasati (mindfulness of breathing) into leadership training, enhanced decision-making, stress management, and overall well-being.</p><br />
                <p className="font-secondary">At INTT Leisure, Dr. Hewawasam aims to offer the holistic benefits of mindfulness, rooted in the original teachings of Lord Buddha, through immersive mindfulness vacations in Sri Lanka, a land where these practices have long been cherished.</p>
              </div>
            </div>
            <div className="col-lg-5" style={{ textAlign: 'right' }}>
              <img src={gb} alt="our-story-image" className='story-img' />
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default AboutUsContent;
