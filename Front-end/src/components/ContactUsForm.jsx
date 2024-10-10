import React, { useState, useEffect, useRef, lazy } from "react";
import { useMobileView } from "../contexts/MobileViewContext";
import emailjs from "emailjs-com";
import Modal from "./BookNowPage/Modal";
import "../firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "./CSS/FeedbackSection.css";

function FeedbackForm() {
  const isMobileView = useMobileView();
  const db = getFirestore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const section = document.getElementById("rw1");
    const textSection = document.getElementById("text1");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textSection.classList.add("animate-text");
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

  const saveDataToFirestore = async () => {
    const docRef = await addDoc(collection(db, "Contact_Collection"), {
      Name: name,
      Email: email,
      Mobile: mobile,
      Message: document.querySelector('textarea[name="message"]').value,
    });
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    saveDataToFirestore();

    const bookingDetails = {
      name,
      email,
      mobile,
      message: document.querySelector('textarea[name="message"]').value,
    };

    emailjs
      .send(
        "service_6of844u",
        "template_fmi3ff8",
        bookingDetails,
        "gdzYpqkDHcPcrpQOw"
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
    <section
      id="feedback-section2"
      className={`feedback-section2 d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="feedback-content2">
        <h3 className="font-primary">Get In Touch With Us</h3>
        <p className="font-secondary">
          Thank you for choosing us for your transformative journey. Every
          leader is unique, so we begin by understanding you deeply to craft a
          mindfulness vacation that's perfectly tailored to your needs. Share
          your details below, and our team of experts will be just a click away.
        </p>
        <br />
        <form className="feedback-form2">
          <div className="form-group feedback-ft">
            <input
              type="text"
              className="form-control in-f"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group feedback-ft">
            <input
              type="email"
              className="form-control in-f"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group feedback-ft">
            <input
              type="text"
              className="form-control in-f"
              id="mobile"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="form-group feedback-ft">
            <textarea
              className="form-control in-f"
              id="message"
              rows="6"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <br></br>
          <button
            type="submit"
            className="btn btn-dark"
            onClick={handleSendClick}
          >
            Submit
          </button>
        </form>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2>Your Message has been Submited</h2>
          <br></br>
          <p>Thank you for contacting us!</p>
        </Modal>
      </div>
    </section>
  );
}

export default FeedbackForm;