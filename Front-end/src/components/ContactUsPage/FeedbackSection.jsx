import React, { useState } from 'react';
import { useMobileView } from '../../contexts/MobileViewContext';
import { createMessages } from "../../api/contactUs";
import emailjs from "emailjs-com";
import Modal from "../BookNowPage/Modal";
import "../../firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "../../components/CSS/FeedbackSection.css";

const FeedbackSection = () => {
  const isMobileView = useMobileView();
  const db = getFirestore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ success: null, message: '',});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    if (!message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const saveDataToFirestore = async () => {
  //   await addDoc(collection(db, "Contact_Collection"), {
  //     Name: name,
  //     Email: email,
  //     Mobile: mobile,
  //     Message: message,
  //   });
  // };

  const handleSendClick = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormData({
        name: name,
        email: email,
        mobile: mobile,
        message: message,
      });
    }
    else{
      return;
    }

    // saveDataToFirestore();

    // const bookingDetails = { name, email, mobile, message };

    const contactUsDetails = {
      name,
      email,
      mobile,
      message: document.querySelector('textarea[name="message"]').value,
    };

    emailjs
      .send(
        "service_6of844u",
        "template_fmi3ff8",
        contactUsDetails,
        "gdzYpqkDHcPcrpQOw"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        saveToDatabase();
        setShowModal(true);
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  const saveToDatabase = async (e) => {
    try {
      const data = await createMessages(formData);
      setStatus({ success: true, message: data.message });
    } catch (error) {
      setStatus({ success: false, message: error });
    }
  };

  return (
    <section id="feedback-section" className={`feedback-section d-flex ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="feedback-content page-section">
        <h3 className='font-primary' style={{ marginBottom: '50px' }}>Get In Touch With Us</h3>
        <p className='font-secondary top-text'>
          Thank you for choosing us for your transformative journey. Every leader is unique, 
          so we begin by understanding you deeply to craft a mindfulness vacation that's perfectly tailored to your needs. 
          Share your details below, and our team of experts will be just a click away.
        </p><br />
        <form className="feedback-form">
          <div className="form-group feedback-ft">
            <input 
              type="text" 
              className="form-control in-f" 
              id="name" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>
          <div className="form-group feedback-ft">
            <input 
              type="email" 
              className="form-control in-f" 
              id="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>
          <div className="form-group feedback-ft">
            <input 
              type="text" 
              className="form-control in-f" 
              id="mobile" 
              placeholder="Mobile" 
              value={mobile} 
              onChange={(e) => setMobile(e.target.value)} 
            />
            {errors.mobile && <small className="error-text">{errors.mobile}</small>}
          </div>
          <div className="form-group feedback-ft">
            <textarea 
              className="form-control in-f" 
              id="message" 
              rows="6" 
              name="message" 
              placeholder="Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            ></textarea>
            {errors.message && <small className="error-text">{errors.message}</small>}
          </div><br></br>
          <button type="submit" className="btn btn-dark feedback-submit-btn" onClick={handleSendClick}>
            Submit
          </button>
        </form>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2>Your Message has been Submitted</h2>
          <br></br>
          <p>
            Thank you for contacting us!
          </p>
        </Modal>
      </div>
    </section>
  );
};

export default FeedbackSection;
