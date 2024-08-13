import React, { useState, useEffect, useRef } from 'react';
import PackageCard from '../BookNowPage/PackageCard'
import { StickyContainer, Sticky } from 'react-sticky';
import DatePicker from "react-datepicker";
import { useMobileView } from '../../contexts/MobileViewContext';
import '../CSS/Pages/BookNowPage.css';
import "react-datepicker/dist/react-datepicker.css";

const BookNowContent = () => {

  const img4 = 'https://img.freepik.com/free-photo/grunge-gray-concrete-textured-background_53876-145492.jpg?t=st=1722571110~exp=1722574710~hmac=dbe2ce48dbeca59499ad4867b3fd0ab0b1cdf15ea16e35d33162d12e12ef02e3&w=1380'
  const [startDate, setStartDate] = useState(new Date());
  const [selectedCard, setSelectedCard] = useState(null);
  const isMobileView = useMobileView();

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

  const handleCardClick = (index) => {
    setSelectedCard(index);
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
                <input className="form-control form-control-sm" type="text" placeholder="" />
                <label className="label-text">Name</label>
              </div>
              <div className="form-group">
                <input className="form-control form-control-sm" type="text" placeholder="" />
                <label className="label-text">Email</label>
              </div>
              <div className="form-group">
                <input className="form-control form-control-sm" type="text" placeholder="" />
                <label className="label-text">Mobile</label>
              </div>
            </form>
            <br />
            <h3 className='font-primary'>Your stay!</h3>
            <br />
            <div className="date-container d-flex">
              <div className="col-6 d-flex check-in stay-input">
                <i class="fa-solid fa-calendar-days book-icons"></i>
                <p className='book-text' style={{ margin: '0px 12px' }}>Check in</p>
                <DatePicker className='date-input' selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              <div className="col-6 d-flex check-out stay-input">
                <i class="fa-solid fa-calendar-days book-icons"></i>
                <p className='book-text' style={{ margin: '0px 12px' }}>Check out</p>
                <DatePicker className='date-input' selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
            </div>
            <br />
            <h3 className='font-primary'>Guests</h3>
            <br />
            <div className="date-container d-flex">
              <div className="col-6 d-flex check-in stay-input">
                <i class="fa-solid fa-person book-icons"></i>
                <p className='book-text' style={{ margin: '0px 12px' }}>No of adults</p>
                <input className='count-input in1' name="age" type="number" />
              </div>
              <div className="col-6 d-flex check-out stay-input">
                <i class="fa-solid fa-child-reaching book-icons"></i>
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
                    onClick={() => handleCardClick(index)}
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
                  <input className="form-control form-control-sm" type="text" placeholder="" />
                  <label className="label-text">Name</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" placeholder="" />
                  <label className="label-text">Email</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" placeholder="" />
                  <label className="label-text">Mobile</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" placeholder="" />
                  <label className="label-text">Duration of your stay</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" placeholder="" />
                  <label className="label-text">Package Details</label>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-sm" type="text" placeholder="" />
                  <label className="label-text">Total</label>
                </div>
                <button className='btn btn-dark btn-book-f'>Book Now</button>
              </div>
            </div>
          ) : (
            <StickyContainer>
              <Sticky topOffset={-200} bottomOffset={200}>
                {({ style, isSticky }) => (
                  <div className="col-6 booking-summary-col " style={{ ...style, marginTop: isSticky ? '170px' : '0px', width: isSticky ? '500px': '500px' }}>
                    <div className='booking-summary-content content-wrapper'>
                      <h3 className='font-primary'>Booking Summary</h3>
                      <br /><br />
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" placeholder="" />
                        <label className="label-text">Name</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" placeholder="" />
                        <label className="label-text">Email</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" placeholder="" />
                        <label className="label-text">Mobile</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" placeholder="" />
                        <label className="label-text">Duration of your stay</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" placeholder="" />
                        <label className="label-text">Package Details</label>
                      </div>
                      <div className="form-group">
                        <input className="form-control form-control-sm" type="text" placeholder="" />
                        <label className="label-text">Total</label>
                      </div>
                    </div>
                  </div>
                )}
              </Sticky>
            </StickyContainer>
          )}
        </div>
        <div className="col-12 d-flex bottom-btn-container">
          <button className='btn btn-dark btn-book-f'>Proceed</button>
        </div>
      </div>
    </section>
  );
};

export default BookNowContent;