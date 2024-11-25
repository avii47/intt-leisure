import React, { useState } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import emailjs from "emailjs-com";
import Modal from "../BookNowPage/Modal";
import Modal2 from "./Modal2";
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
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [pack, setPackage] = useState(defPackageName);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [showBookingSummary, setShowBookingSummary] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email";
    if (!mobile || !/^\+?[0-9]{7,15}$/.test(mobile))
      newErrors.mobile = "Invalid mobile number";
    // if (!arrivalDate) newErrors.arrivalDate = "Arrival date is required";
    if (!nationality) newErrors.nationality = "Nationality is required";
    // if (!message) newErrors.message = "Message is required";
    if (!pack) newErrors.pack = "Package is required";
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
        DepartureDate: departureDate,
        Adults: adults,
        Kids: kids,
        Package: pack,
        Message: message,
      });
    } catch (error) {
      console.error("Error saving data to Firestore:", error);
    }
  };

  const handleBookingConfirm = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    await saveDataToFirestore();

    const bookingDetails = {
      name,
      email,
      mobile,
      nationality,
      arrivalDate,
      departureDate,
      adults,
      kids,
      pack,
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

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleProceedClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowBookingSummary(true);
    }
  };

  const handleAdultChange = (e) => {
    setAdults(e.target.value);
  };

  const handleKidsChange = (e) => {
    setKids(e.target.value);
  };

  return (
    <section
      id="bookingForm-container"
      className={`bookingForm-container d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="bookingForm-content">
        <h3 className="font-primary">Get In Touch With Us</h3>
        <p className="font-secondary">
          Thank you for choosing us for your transformative journey. Every
          leader is unique, so we begin by understanding you deeply to craft a
          mindfulness vacation that's perfectly tailored to your needs.
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
                />
                {errors.name && (
                  <small className="error-text">{errors.name}</small>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                {errors.mobile && (
                  <small className="error-text">{errors.mobile}</small>
                )}
              </div>
              <div
                className={`form-group ${errors.arrivalDate ? "err" : ""}`}
                style={{ position: "relative" }}
              >
                <label
                  htmlFor="arrivalDate"
                  className={`date-label ${arrivalDate ? "filled" : ""}`}
                >
                  Arrival Date
                </label>
                <input
                  id="arrivalDate"
                  type="date"
                  className="form-control"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
                {errors.arrivalDate && (
                  <small className="error-text">{errors.arrivalDate}</small>
                )}
              </div>

              <div className="form-group Dfeedback-ft">
                <input
                  type="text"
                  className="form-control in-f"
                  placeholder="Package Name"
                  value={pack}
                  readOnly
                />
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
                />
                {errors.email && (
                  <small className="error-text">{errors.email}</small>
                )}
              </div>

              <div className="form-group">
                <CountrySelector onSelectCountry={setNationality} />
                {errors.nationality && (
                  <small className="error-text">{errors.nationality}</small>
                )}
              </div>

              <div
                className={`form-group ${errors.departurelDate ? "err" : ""}`}
                style={{ position: "relative", paddingRight: "8px" }}
              >
                <label
                  htmlFor="departureDate"
                  className={`date-label ${departureDate ? "filled" : ""}`}
                >
                  Departure date
                </label>
                <input
                  id="departureDate"
                  type="date"
                  className="form-control"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
                {errors.departureDate && (
                  <small className="error-text">{errors.departurelDate}</small>
                )}
              </div>

              <div className="form-group">
                <div className="noOfPax-group">
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="adults" className="pax-label">
                      Adults
                    </label>
                    <select
                      id="adults"
                      className="pax-input"
                      value={adults}
                      onChange={handleAdultChange}
                    >
                      {[...Array(15).keys()].map((num) => (
                        <option key={num} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>

                    <span className="dropdown-icon">
                      <i class="fa-solid fa-angle-down"></i>
                    </span>
                  </div>

                  <div
                    style={{
                      width: "1px",
                      background: "#ccc",
                      height: "24px",
                      margin: "0 20px",
                    }}
                  ></div>

                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="kids" className="pax-label">
                      Kids
                    </label>
                    <select
                      id="kids"
                      className="pax-input"
                      value={kids}
                      onChange={handleKidsChange}
                    >
                      {[...Array(9).keys()].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <span className="dropdown-icon">
                      <i class="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </div>

                {(errors.adults || errors.kids) && (
                  <small className="error-text">
                    {errors.adults || errors.kids}
                  </small>
                )}
              </div>
            </div>
          </div>

          {!defPackageName && (
            <div className="row" style={{ margin: "50px -10px -80px -10px" }}>
              <PackageSelector
                onSelectPackage={setPackage}
                onTabChange={handleTabChange}
              />
              {errors.pack && (
                <small className="error-text package-error">
                  {errors.pack}
                </small>
              )}
            </div>
          )}

          <p className="font-secondary" style={{ fontSize: "15px", marginTop: "20px" }}>
            Note: 
            Should you have any specific preferences or requirements, please
            feel free to share them in the message box below. Our team of
            experts will promptly reach out to you to assist in customizing the
            tour to suit your needs.
          </p>
          <div
            className="form-group"
            style={{ width: "100%", marginTop: "20px" }}
          >
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
            ></textarea>
            {errors.message && (
              <small className="error-text">{errors.message}</small>
            )}
          </div>

          <div className="d-flex" style={{ gap: "20px", marginTop: "50px" }}>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleProceedClick}
            >
              Submit Inquiry
            </button>
            <a
              href="tel:+1(312)2421662"
              className="btn btn-outline-dark cl-btn"
            >
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

        <Modal2
          show={showBookingSummary}
          onClose={() => setShowBookingSummary(false)}
          onSubmit={handleBookingConfirm}
        >
          <h2>Booking Summary</h2>
          <br />
          <div className="booking-summary-content">
            <div className="col-md-6" style={{ paddingRight: "30px" }}>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={name}
                  readOnly
                />
                <label className="label-text">Name</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={mobile}
                  readOnly
                />
                <label className="label-text">Mobile</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={arrivalDate}
                  readOnly
                />
                <label className="label-text">Arrival Date</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={pack}
                  readOnly
                />
                <label className="label-text">Package Details</label>
              </div>
            </div>
            <div className="col-md-6" style={{ paddingleft: "30px" }}>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={email}
                  readOnly
                />
                <label className="label-text">Email</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={nationality}
                  readOnly
                />
                <label className="label-text">Nationality</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={departureDate}
                  readOnly
                />
                <label className="label-text">Departure Date</label>
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={adults + " Adults and " + kids + " Children"}
                  readOnly
                />
                <label className="label-text">Number of People</label>
              </div>
            </div>
          </div>
        </Modal2>

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
