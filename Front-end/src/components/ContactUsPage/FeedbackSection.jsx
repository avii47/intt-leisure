import React, { useState, useEffect } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import emailjs from "emailjs-com";
import Modal from "../BookNowPage/Modal";
import "../../components/CSS/FeedbackSection.css";

const FeedbackSection = () => {

  const isMobileView = useMobileView();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const section = document.getElementById('rw1');
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

  const handleSendClick = (e) => {
    e.preventDefault();

    const bookingDetails = {
      name,
      email,
      mobile,
      message: document.querySelector('textarea[name="message"]').value,
    };

    emailjs
      .send(
        "service_933kflg",
        "template_o95d5bx",
        bookingDetails,
        "_rf9OG9FxhVPr0Rsu"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };


  return (
    <section id="feedback-section" className={`feedback-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="feedback-content">
        <h3 className='font-primary' style={{marginBottom:'50px'}}>Get In Touch With Us</h3>
        <form className="feedback-form">
            <div className="form-group feedback-ft">
              <input type="text" className="form-control in-f" id="name" placeholder="Name" required />
            </div>
            <div className="form-group feedback-ft">
              <input type="email" className="form-control in-f" id="email" placeholder="Email" required />
            </div>
            <div className="form-group feedback-ft">
              <input type="text" className="form-control in-f" id="mobile" placeholder="Mobile" required />
            </div>
            <div className="form-group feedback-ft">
              <textarea className="form-control in-f" id="message" rows="6" name="message" placeholder="Message" required></textarea>
            </div><br></br>
            <button type="submit" className="btn btn-dark" style={{width:'100%', height:'60px', borderRadius:'10px'}} onClick={ handleSendClick }>Submit</button>
        </form>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2>Your Message Submited</h2>
          <br></br>
          <p>
            Our team will contact you soon.
          </p>
        </Modal>
      </div>
    </section>
  );
};

export default FeedbackSection;