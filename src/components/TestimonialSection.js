import React from 'react';

const TestimonialSection = () => {
    return (
      <section id="testimonialSection" className="section testimonialSection">
        <div className="testimonial-content">
            <div className="row">
              <div className="col-6" style={{ height: '400px'}}>
                <img className='testimonial-img' src="https://calvin.edu/contentAsset/image/ea8def4a-a584-4bdc-a551-6891e0c7cc09/binaryimage/filter/Resize,Jpeg/resize_w/660/jpeg_q/75" alt=""/>
              </div>
              <div className="col-4 testimonial-text">
                <h5>Testimonial</h5>
                <hr style={{ width: '100px' }}></hr>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-solid fa-star star"></i>
                <i class="fa-regular fa-star"></i>
                <p style={{ fontSize: '16px', marginTop: '20px' }}>I recently embarked on a mindfulness journey in the breathtaking landscapes of Sri Lanka, and it was unlike anything I’ve ever experienced before. The serene beauty of this island, combined with the mindfulness practices, left me feeling like an entirely new person. The tranquility I found amidst the natural wonders of Sri Lanka transformed me in ways I couldn’t have imagined. It was a truly rejuvenating and life-changing experience that I highly recommend to anyone seeking inner peace and personal growth.</p>
                <p style={{ fontSize: '16px' }}>Jim Ludema | <strong>Global Leader</strong> </p>
              </div>
            </div>
          </div>
      </section>
    );
  };

export default TestimonialSection;