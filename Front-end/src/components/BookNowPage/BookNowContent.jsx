import React, { useState, useEffect } from 'react';
import PackageCard from '../BookNowPage/PackageCard'
import '../CSS/Pages/BookNowPage.css';

const BookNowContent = () => {

  const img4 = 'https://img.freepik.com/free-photo/grunge-gray-concrete-textured-background_53876-145492.jpg?t=st=1722571110~exp=1722574710~hmac=dbe2ce48dbeca59499ad4867b3fd0ab0b1cdf15ea16e35d33162d12e12ef02e3&w=1380'
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


  useEffect(() => {
    const section = document.getElementById('bookNow-content');
    const textSection = document.getElementById('text1');

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

  const contentData = [
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Corporate',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
      
  ];


  return (
    <section id="bookNow-content-section" className={`section bookNow-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="bookNow-section-content d-flex flex-nowrap">
        <div className='col-12 d-flex'>
            <div className="col-6 scrollable-content">
                <h3 className='font-primary'>Book your journey with us!</h3><br></br><br></br>
                <form className="feedback-form">
                  <div class="form-group">
                    <input className="form-control form-control-sm" type="text" placeholder="" />
                    <label class="label-text">Name</label>
                  </div>
                  <div class="form-group">
                    <input className="form-control form-control-sm" type="text" placeholder="" />
                    <label class="label-text">Email</label>
                  </div>
                  <div class="form-group">
                    <input className="form-control form-control-sm" type="text" placeholder="" />
                    <label class="label-text">Mobile</label>
                  </div>
                </form><br></br>
                <h3 className='font-primary'>Your stay!</h3><br></br>
                <div className="date-container d-flex">
                    <div className="col-6 d-flex check-in">
                        <input type="text" name="check-in-date" className='check-in-date' id="check-in-date" />
                        <h6 style={{margin:'20px'}}>Check in</h6>
                    </div>
                    <div className="col-6 d-flex check-out">
                        <input type="text" name="check-in-date" className='check-in-date' id="check-in-date" />
                        <h6 style={{margin:'20px'}}>Check out</h6>
                    </div>
                </div><br></br>
                <h3 className='font-primary'>Guests</h3><br></br>
                <div className="date-container d-flex">
                    <div className="col-6 d-flex check-in">
                        <input type="text" name="check-in-date" className='check-in-date' id="check-in-date" />
                        <h6 style={{margin:'20px'}}>No of adults</h6>
                    </div>
                    <div className="col-6 d-flex check-out">
                        <input type="text" name="check-in-date" className='check-in-date' id="check-in-date" />
                        <h6 style={{margin:'20px'}}>No of children</h6>
                    </div>
                </div><br></br>
                <h3 className='font-primary'>Select your package</h3><br></br>
                <div className="package-card-container">
                    {contentData.map((content, index) => (
                        <PackageCard key={index} content={content} />
                    ))}
                </div>
                <textarea name="message" id="" style={{width:'100%'}} rows={8} placeholder='Message'></textarea>
            </div>
            <div className="col-6 booking-summary-col">
              <div className='booking-summary-content'>
                <h3 className='font-primary'>Booking Summary</h3><br></br><br></br>
                <div class="form-group">
                  <input className="form-control form-control-sm" type="text" placeholder="" />
                  <label class="label-text">Name</label>
                </div>
                <div class="form-group">
                  <input className="form-control form-control-sm" type="text" placeholder="" />
                  <label class="label-text">Email</label>
                </div>
                <div class="form-group">
                  <input className="form-control form-control-sm" type="text" placeholder="" />
                  <label class="label-text">Mobile</label>
                </div>
              </div>
                
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookNowContent;