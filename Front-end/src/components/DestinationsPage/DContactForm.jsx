import React, { useState } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import emailjs from "emailjs-com";
import Modal from "../BookNowPage/Modal";
import "../../firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "../CSS/DContactFrom.css";
import callIcon from "../../assets/icons/icons8-call.gif";
import CountrySelector from './CountrySelector';

function FeedbackForm({ defPackageName }) {
  const isMobileView = useMobileView();
  const db = getFirestore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nationality, setNationality] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const saveDataToFirestore = async () => {
    try {
      await addDoc(collection(db, "Contact_Collection"), {
        Name: name,
        Email: email,
        Mobile: mobile,
        Nationality: nationality, // Save selected nationality
        ArrivalDate: arrivalDate,
        Message: document.querySelector('textarea[name="message"]').value,
      });
    } catch (error) {
      console.error("Error saving data to Firestore:", error);
    }
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    saveDataToFirestore();

    const bookingDetails = {
      name,
      email,
      mobile,
      nationality, 
      arrivalDate,
      defPackageName,
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
      id="Dfeedback-section"
      className={`Dfeedback-section d-flex ${isMobileView ? "mobile-view" : ""}`}
    >
      <div className="Dfeedback-content">
        <h3 className="font-primary">Get In Touch With Us</h3>
        <p className="font-secondary">
          Thank you for choosing us for your transformative journey. Every
          leader is unique, so we begin by understanding you deeply to craft a
          mindfulness vacation that's perfectly tailored to your needs.
        </p>
        
        <form className="Dfeedback-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group Dfeedback-ft">
                <input
                  type="text"
                  className="form-control in-f"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group Dfeedback-ft">
                <input
                  type="text"
                  className="form-control in-f"
                  placeholder="Mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group Dfeedback-ft">
                <input
                  type="date"
                  className="form-control in-f"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group Dfeedback-ft">
                <input
                  type="email"
                  className="form-control in-f"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group Dfeedback-ft">
                <CountrySelector onSelectCountry={setNationality} />
              </div>
              <div className="form-group Dfeedback-ft">
                <input
                  type="text"
                  className="form-control in-f"
                  placeholder="Package Name"
                  value={defPackageName}
                  readOnly
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group Dfeedback-ft" style={{ width: "100%" }}>
              <textarea
                className="form-control in-f"
                rows="6"
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>

          <div className="d-flex" style={{ gap: "20px" }}>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleSendClick}
            >
              Submit Inquiry
            </button>
            <a href="tel:+1234567890" className="btn btn-outline-dark cl-btn">
              <img
                src={callIcon}
                width={25}
                alt="Call Icon"
                style={{ marginRight: "5px" }}
              />
              Call Now
            </a>
          </div>
        </form>

        {showModal && (
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <h2>Your Message has been Submitted</h2>
            <p>Thank you for contacting us!</p>
          </Modal>
        )}
      </div>
    </section>
  );
}

export default FeedbackForm;
