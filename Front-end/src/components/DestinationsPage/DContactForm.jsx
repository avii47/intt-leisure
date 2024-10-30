import React, { useState, useEffect, useRef, lazy } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import emailjs from "emailjs-com";
import Modal from "../BookNowPage/Modal";
import "../../firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "../CSS/DContactFrom.css";

import callIcon from "../../assets/icons/icons8-call.gif";

function FeedbackForm() {
  const isMobileView = useMobileView();
  const db = getFirestore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nationality, setNationality] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
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

  const nationalityOptions = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
    // ... Add more nationalities
  ];

  return (
    <section
      id="Dfeedback-section"
      className={`Dfeedback-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="Dfeedback-content">
        <h3 className="font-primary">Get In Touch With Us</h3>
        <p className="font-secondary">
          Thank you for choosing us for your transformative journey. Every
          leader is unique, so we begin by understanding you deeply to craft a
          mindfulness vacation that's perfectly tailored to your needs. Share
          your details below, and our team of experts will be just a click away.
        </p>
        <br />
        <form className="Dfeedback-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group Dfeedback-ft">
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
              <div className="form-group  Dfeedback-ft">
                <input
                  type="text"
                  className="form-control in-f"
                  id="mobile"
                  placeholder="Mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group  Dfeedback-ft">
                <input
                  type="date"
                  className="form-control in-f"
                  id="arrivalDate"
                  placeholder="Arrival Date"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group  Dfeedback-ft">
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
              <div className="form-group  Dfeedback-ft">
                <select
                  className="form-control in-f"
                  id="nationality"
                  name="nationality"
                  defaultValue={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  required
                >
                  <option value="">-- Select Nationality --</option>{" "}
                  {nationalityOptions.map((nationality) => (
                    <option key={nationality.value} value={nationality.value}>
                      {nationality.label}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group  Dfeedback-ft">
                <input
                  type="number"
                  className="form-control in-f"
                  id="noOfDays"
                  placeholder="Likely number of days"
                  value={noOfDays}
                  onChange={(e) => setNoOfDays(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group  Dfeedback-ft" style={{ width: "100%" }}>
              <textarea
                className="form-control in-f"
                id="message"
                rows="6"
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>

          <br></br>
          <div className="d-flex" style={{ gap: "20px" }}>
            <button
              type="Submit"
              className="btn btn-dark"
              onClick={handleSendClick}
            >
              Submit Inquiry
            </button>
            <button
              type="submit"
              className="btn btn-outline-dark"
              onClick={handleSendClick}
            >
              <img
                src={callIcon}
                width={25}
                alt=""
                style={{ marginRight: "5px" }}
              />
              Call Now
            </button>
          </div>
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
