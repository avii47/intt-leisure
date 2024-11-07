import React, { useState } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import emailjs from "emailjs-com";
import Modal from "../BookNowPage/Modal";
import "../../firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "./BookingForm.css";
import callIcon from "../../assets/icons/icons8-call.gif";
import CountrySelector from "../DestinationsPage/CountrySelector";
import PackageSelector from "./PackageSelector";

function BookingForm({ defPackageName }) {
  const isMobileView = useMobileView();
  const db = getFirestore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nationality, setNationality] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [numDays, setNumDays] = useState("");
  const [pack, setPackage] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!mobile || !/^\+?[0-9]{7,15}$/.test(mobile)) newErrors.mobile = "Invalid mobile number";
    if (!arrivalDate) newErrors.arrivalDate = "Arrival date is required";
    if (!nationality) newErrors.nationality = "Nationality is required";
    if (!numPeople || !/^[1-9][0-9]*$/.test(numPeople)) newErrors.numPeople = "Enter a valid number of people";
    if (!defPackageName && (!numDays || !/^[1-9][0-9]*$/.test(numDays))) {
      newErrors.numDays = "Enter a valid number of days";
    }
    if (!message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveDataToFirestore = async () => {
    try {
      await addDoc(collection(db, "Contact_Collection"), {
        Name: name,
        Email: email,
        Mobile: mobile,
        Nationality: nationality,
        ArrivalDate: arrivalDate,
        NumPeople: numPeople,
        NumDays: numDays,
        Message: message,
      });
    } catch (error) {
      console.error("Error saving data to Firestore:", error);
    }
  };

  const handleSendClick = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    await saveDataToFirestore();

    const bookingDetails = {
      name,
      email,
      mobile,
      nationality,
      arrivalDate,
      defPackageName,
      numPeople,
      numDays,
      message,
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
      id="bookingForm-container"
      className={`bookingForm-container d-flex ${isMobileView ? "mobile-view" : ""}`}
    >
      <div className="bookingForm-content">
        <h3 className="font-primary">Get In Touch With Us</h3>
        <p className="font-secondary">
          Thank you for choosing us for your transformative journey. Every leader is unique,
          so we begin by understanding you deeply to craft a mindfulness vacation that's perfectly tailored to your needs.
        </p>

        <form className="booking-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <small className="error-text">{errors.name}</small>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
                {errors.mobile && <small className="error-text">{errors.mobile}</small>}
              </div>
              <div className="form-group" style={{ position: "relative" }}>
                <label
                  htmlFor="arrivalDate"
                  className={`date-label ${arrivalDate ? "filled" : ""}`}
                >
                  Select arrival date
                </label>
                <input
                  id="arrivalDate"
                  type="date"
                  className="form-control"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  required
                />
                {errors.arrivalDate && <small className="error-text">{errors.arrivalDate}</small>}
              </div>

              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Number of People"
                  value={numPeople}
                  onChange={(e) => setNumPeople(e.target.value)}
                  required
                />
                {errors.numPeople && <small className="error-text">{errors.numPeople}</small>}
              </div>


            </div>

            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <small className="error-text">{errors.email}</small>}
              </div>

              <CountrySelector onSelectCountry={setNationality} />
              {errors.nationality && <small className="error-text">{errors.nationality}</small>}

              {!defPackageName && (
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of Days"
                    value={numDays}
                    onChange={(e) => setNumDays(e.target.value)}
                    required
                  />
                  {errors.numDays && <small className="error-text">{errors.numDays}</small>}
                </div>
              )}

              {defPackageName && (
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
              )}




            </div>
          </div>

          
          {!defPackageName && (
            <div className="row" style={{margin:'50px 0 20px 0'}}>
              <PackageSelector onSelectPackage={setPackage} />
            </div>
          )}
          

          <div className="form-group" style={{ width: "100%", marginTop: "20px" }}>
            <textarea
              style={{
                width: "100%",
                padding: "20px",
                border: "1px #c2c1c1 solid",
                borderRadius: "8px",
              }}
              rows="6"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && <small className="error-text">{errors.message}</small>}
          </div>

          <div className="d-flex" style={{ gap: "20px", marginTop: "50px" }}>
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

export default BookingForm;
