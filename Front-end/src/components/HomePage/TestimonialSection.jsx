import React, { useState, useEffect, useRef } from 'react';
import "../../components/CSS/Home/TestimonialSection.css";

const TestimonialSection = () => {

  const [isMobileView, setIsMobileView] = useState(false);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef1.current) {
      observer.observe(sectionRef1.current);
    }

    return () => {
      if (sectionRef1.current) {
        observer.unobserve(sectionRef1.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, []);


  return (
    <section id="testimonial-section" className={`section testimonial-section justify-content-center d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="testimonial-content">
        <div className="row" style={{ gap: '60px', flexDirection: isMobileView? 'column-reverse':"inherit" }}>
          <div className="col-md testimonial-video-coontainer">
            <iframe
              loading='lazy'
              ref={sectionRef1}
              className='testimonial-iframe'
              src='https://www.youtube.com/embed/9YnZwjumA1c'
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            />
          </div>
          <div className="col-md testimonial-text" ref={sectionRef2}>
            <div>
              <h4 className='font-primary' style={{ fontSize: '28px' }}>Testimonial</h4>
              <hr style={{ width: '9.5rem' }} />
              <div>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <p className='font-secondary' style={{ marginTop: '1rem' }}>I recently embarked on a mindfulness journey in the breathtaking landscapes of Sri Lanka, and it was unlike anything I’ve ever experienced before. The serene beauty of this island, combined with the mindfulness practices, left me feeling like an entirely new person. The tranquility I found amidst the natural wonders of Sri Lanka transformed me in ways I couldn’t have imagined. It was a truly rejuvenating and life-changing experience that I highly recommend to anyone seeking inner peace and personal growth.</p>
              <p className='font-secondary'>Jim Ludema | <strong>Global Leader</strong> </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;