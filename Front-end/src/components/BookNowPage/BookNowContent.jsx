import React, { useState, useEffect } from 'react';
import PackageCard from '../BookNowPage/PackageCard';
import { StickyContainer, Sticky } from 'react-sticky';
import DatePicker from "react-datepicker";
import { useMobileView } from '../../contexts/MobileViewContext';
import "react-datepicker/dist/react-datepicker.css";
import emailjs from 'emailjs-com';
import Modal from './Modal'; 

import img1 from '../../assets/images/stock-photo-old-man-with-gray-hair-reading-a-book-sited-on-an-bench-2292379427 (1).jpg'
import img2 from '../../assets/images/stock-photo-group-of-diverse-young-people-practicing-yoga-doing-easy-seat-exercise-sukhasana-pose-working-1227103207.jpg'
import img3 from '../../assets/images/full-shot-man-working-outdoors.jpg'
import img4 from '../../assets/images/WhatsApp Image 2024-08-23 at 3.43.43 PM.jpeg'
import img5 from '../../assets/images/beautiful-woman-meditating-nature.jpg'

const BookNowContent = () => {

  const img6 = 'https://img.freepik.com/free-photo/fit-man-practicing-yoga_23-2151745576.jpg?t=st=1724408447~exp=1724412047~hmac=920d3b90806acfb59af294d14b6ea635a051638d00ac6f663da71fd1014b9947&w=1380'
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());
  const [selectedCard, setSelectedCard] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [duration, setDuration] = useState('');
  const [pack, setPackage] = useState('');
  const isMobileView = useMobileView();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const section = document.getElementById('bookNow-content-section');
    const textSection = document.getElementById('text1');

    if (!textSection) {
      console.warn("Element with ID 'text1' not found.");
      return; 
    }

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

  // Calculate and set the duration when the user selects the checkout date
  const handleCheckoutChange = (date2) => {
    setCheckoutDate(date2);
    if (checkinDate && date2) {
      const timeDiff = date2.getTime() - checkinDate.getTime();
      const dayDiff = timeDiff / (1000 * 3600 * 24); 
      setDuration(Math.ceil(dayDiff)+" days");  
    }
  };

  const handleProceedClick = (e) => {
    e.preventDefault();
  
    const bookingDetails = {
      name,
      email,
      mobile,
      duration,
      pack,
      message: document.querySelector('textarea[name="message"]').value
    };
  
    emailjs.send(
      'service_933kflg',        
      'template_o95d5bx',      
      bookingDetails,
      '_rf9OG9FxhVPr0Rsu'            
    ).then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setShowModal(true);
    }).catch((error) => {
      console.error('Failed to send email:', error);
    });
  };

  const contentData = [
    {
      'img': img1,
      'title': 'Leaders',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
        {
      'img': img2,
      'title': 'Educators',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img3,
      'title': 'Corporates',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img4,
      'title': 'Seekers',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img5,
      'title': 'Studets',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
    {
      'img': img6,
      'title': 'Others',
      'sub': 'MINDFULNESS AT RITIGALA',
      'text': 'Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.'
    },
  ];

  const handleCardClick = (index, title) => {
    setSelectedCard(index);
    setPackage(title)
  };

  return (
    <section id="bookNow-content-section" className={`section bookNow-content-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="bookNow-section-content d-flex">
        <div className='col-md-12 d-flex main-col'>
          <div className="col-6 scrollable-content">
            <h3 className='font-primary'>Book your journey with us!</h3>
            <br /><br />
            <form className="feedback-form">
              <div className="form-group">
                <input 
                  className="form-control form-control-sm" 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="" 
                />
                <label className="label-text">Name</label>
              </div>
              <div className="form-group">
                <input 
                  className="form-control form-control-sm" 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="" 
                />
                <label className="label-text">Email</label>
              </div>
              <div className="form-group">
                <input 
                  className="form-control form-control-sm" 
                  type="text" 
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="" 
                />
                <label className="label-text">Mobile</label>
              </div>
            </form>
            <br />
            <h3 className='font-primary'>Your stay!</h3>
            <br />
            <div className="date-container d-flex">
              <div className="col-6 d-flex check-in stay-input">
                <i className="fa-solid fa-calendar-days book-icons"></i>
                <p className='book-text' style={{ margin: '0px 12px' }}>Check in</p>
                <DatePicker 
                  className='date-input' 
                  selected={checkinDate} 
                  onChange={(date1) => setCheckinDate(date1)} 
                />
              </div>
              <div className="col-6 d-flex check-out stay-input">
                <i className="fa-solid fa-calendar-days book-icons"></i>
                <p className='book-text' style={{ margin: '0px 12px' }}>Check out</p>
                <DatePicker 
                  className='date-input' 
                  selected={checkoutDate} 
                  onChange={handleCheckoutChange} 
                />
              </div>
            </div>
            <br />
            <h3 className='font-primary'>Guests</h3>
            <br />
            <div className="date-container d-flex">
              <div className="col-6 d-flex check-in stay-input">
                <i className="fa-solid fa-person book-icons"></i>
                <p className='book-text' style={{ margin: '0px 12px' }}>No of adults</p>
                <input className='count-input in1' name="age" type="number" />
              </div>
              <div className="col-6 d-flex check-out stay-input">
                <i className="fa-solid fa-child-reaching book-icons"></i>
                <p className='book-text' style={{ margin: '0px 12px' }}>No of children</p>
                <input className='count-input' name="age" type="number" />
              </div>
            </div>
            <br />
            <h3 className='font-primary'>Select the Experience</h3>
            <br />

            <div className="package-card-container">
              {contentData.map((content, index) => (
                <PackageCard
                  key={index}
                  content={content}
                  onClick={() => handleCardClick(index, content.title)}
                  isSelected={selectedCard === index}
                />
              ))}
            </div>

            <textarea name="message" style={{ width: '100%' }} rows={8} placeholder='Message'></textarea>
          </div>
          {isMobileView ? (
            <div className="col-md-12 booking-summary-col">
              <div className='booking-summary-content'>
                <h3 className='font-primary'>Booking Summary</h3>
                <br /><br />
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" value={name} placeholder="" readOnly />
                  <label className="label-text">Name</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" value={email} placeholder="" readOnly />
                  <label className="label-text">Email</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" value={mobile} placeholder="" readOnly />
                  <label className="label-text">Mobile</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" value={duration} placeholder="" readOnly />
                  <label className="label-text">Duration of your stay</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" value={pack} placeholder="" readOnly />
                  <label className="label-text">Package Details</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" placeholder="" readOnly />
                  <label className="label-text">Total</label>
                </div>
                <div className="col-12 d-flex bottom-btn-container">
                    <button className='btn btn-dark btn-book-f' onClick={handleProceedClick}>Proceed</button>
                </div>
              </div>
            </div>
          ) : (
            <StickyContainer>
              <Sticky topOffset={-200} bottomOffset={180}>
                {({ style, isSticky }) => (
                  <div className="col-6 booking-summary-col " style={{ ...style, marginTop: isSticky ? '170px' : '0px', width: isSticky ? '500px' : '500px' }}>
                    <div className='booking-summary-content content-wrapper'>
                      <h3 className='font-primary'>Booking Summary</h3>
                      <br /><br />
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" value={name} placeholder="" readOnly />
                        <label className="label-text">Name</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" value={email} placeholder="" readOnly />
                        <label className="label-text">Email</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" value={mobile} placeholder="" readOnly />
                        <label className="label-text">Mobile</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" value={duration} placeholder="" readOnly />
                        <label className="label-text">Duration of your stay</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" value={pack} placeholder="" readOnly />
                        <label className="label-text">Package Details</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" placeholder="" readOnly />
                        <label className="label-text">Total</label>
                      </div>

                      <div className="col-12 d-flex bottom-btn-container">
                          <button className='btn btn-dark btn-book-f' onClick={handleProceedClick}>Proceed</button>
                      </div>
                    </div>
                  </div>
                )}
              </Sticky>
            </StickyContainer>
          )}
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2>Booking Confirmed!</h2>
          <p>Your booking details have been sent to your email.</p>
        </Modal>
      </div>
    </section>
  );
};

export default BookNowContent;
