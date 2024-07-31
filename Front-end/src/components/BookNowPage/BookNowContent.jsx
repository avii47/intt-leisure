import React, { useState, useEffect } from 'react';
import PackageCard from '../BookNowPage/PackageCard'
import '../CSS/Pages/BookNowPage.css';

const BookNowContent = () => {

  const img4 = 'https://img.freepik.com/free-photo/business-woman-gray-jacket-enjoying-music-while-sitting-workplace-white-office_197531-10691.jpg?t=st=1722326018~exp=1722329618~hmac=664bb3f19e1c854d3a319c2da3751044c9ae2180e9f3c4370378ae712184d3be&w=1380'
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
                <h3 className='font-primary'>Book your journey with us!</h3><br></br>
                <form className="feedback-form">
                    <div className="form-group feedback-ft">
                        <input type="text" className="form-control" id="name" placeholder="Name" required />
                    </div>
                    <div className="form-group feedback-ft">
                        <input type="email" className="form-control" id="email" placeholder="Email" required />
                    </div>
                    <div className="form-group feedback-ft">
                        <input type="text" className="form-control" id="mobile" placeholder="Mobile" required />
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
                <h3 className='font-primary'>Booking Summary</h3><br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis repellat quasi est delectus fugiat, a accusamus accusantium doloribus qui, unde id, tenetur illum sed earum nam nemo esse omnis.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookNowContent;