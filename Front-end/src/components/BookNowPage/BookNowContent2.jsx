import React, { useState, useEffect } from "react";
import PackageCard from "../BookNowPage/PackageCard";
import DatePicker from "react-datepicker";
import { db } from "../../firebase"; // Import the initialized Firestore instance
import { addDoc, collection } from "firebase/firestore";
import { useMobileView } from "../../contexts/MobileViewContext";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
import Modal from "./Modal";
import Modal2 from "./Modal2";

import img1 from "../../assets/images/leadersPage-hero-img.jpg";
import img2 from "../../assets/images/educatorsPage-hero-img.jpg";
import img3 from "../../assets/images/coparatesPage-hero-img.jpg";
import img4 from "../../assets/images/seekersPage-hero-img.jpg";
import img5 from "../../assets/images/studentsPage-hero-img.jpg";

const BookNowContent2 = () => {
  const img6 = "https://img.freepik.com/free-photo/back-view-woman-doing-yoga-outdoors_23-2148769551.jpg?t=st=1726225399~exp=1726228999~hmac=ecaf4b00aa9acc543b0324daca432cd61131bc193e49bb3f774a2dca29807fcf&w=1380";
  
  // State for input fields
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());
  const [selectedCard, setSelectedCard] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [duration, setDuration] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pack, setPackage] = useState("");
  const isMobileView = useMobileView();
  
  const [showModal, setShowModal] = useState(false);
  const [showBookingSummary, setShowBookingSummary] = useState(false);

  // State for validation errors
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!name) newErrors.name = "Name is required";
    
    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    // Mobile validation
    if (!mobile) newErrors.mobile = "Mobile number is required";
    
    // Check-in and check-out date validation
    if (!checkinDate) newErrors.checkinDate = "Check-in date is required";
    if (!checkoutDate) newErrors.checkoutDate = "Check-out date is required";
    if (checkoutDate <= checkinDate) newErrors.checkoutDate = "Check-out date must be after check-in date";

    // Adults validation
    if (!adults || adults <= 0) newErrors.adults = "At least one adult is required";

    // Pax validation (maximum 20 guests)
    if (adults + children > 20) newErrors.guests = "Total number of guests cannot exceed 20";

    // Package selection validation
    if (!pack) newErrors.pack = "Please select a package";

    return newErrors;
  };

  const saveDataToFirestore = async () => {
    try {
      await addDoc(collection(db, "Inquiry_Collection"), {
        Name: name,
        Email: email,
        Mobile: mobile,
        Checkin_Date: checkinDate,
        Checkout_Date: checkoutDate,
        Duration: duration,
        Guests: `${adults} Adults and ${children} Children`,
        Package: pack,
        Message: document.querySelector('textarea[name="message"]').value,
        Status: "Pending"
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Calculate and set the duration when the user selects the checkout date
  const handleCheckoutChange = (date2) => {
    setCheckoutDate(date2);
    if (checkinDate && date2) {
      const timeDiff = date2.getTime() - checkinDate.getTime();
      const dayDiff = timeDiff / (1000 * 3600 * 24);
      setDuration(Math.ceil(dayDiff) + " days");
    }
  };

  const handleProceedClick = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Do not proceed if there are validation errors
    }

    setShowBookingSummary(true); // Show booking summary modal when validation passes
  };

  const handleBookingConfirm = () => {
    saveDataToFirestore();

    const bookingDetails = {
      name,
      email,
      mobile,
      duration,
      pack,
      message: document.querySelector('textarea[name="message"]').value,
    };

    emailjs
      .send(
        "service_6of844u",
        "template_rik8m2j",
        bookingDetails,
        "gdzYpqkDHcPcrpQOw"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setShowModal(true);
        setShowBookingSummary(false); 
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  const contentData = [
    {
      img: img1,
      title: "Leaders",
      sub: "Mindfulness for Leaders",
      text: "Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.",
    },
    {
      img: img2,
      title: "Educators",
      sub: "Mindfulness for Educators",
      text: "Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.",
    },
    {
      img: img3,
      title: "Corporates",
      sub: "Mindfulness for Corporates",
      text: "Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.",
    },
    {
      img: img4,
      title: "Seekers",
      sub: "Mindfulness for Seekers",
      text: "Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.",
    },
    {
      img: img5,
      title: "Students",
      sub: "Mindfulness for Students",
      text: "Connect with the Ultimate Luxury of Mindfulness in Sri Lanka.",
    }
  ];

  const handleCardClick = (index, title) => {
    setSelectedCard(index);
    setPackage(title);
  };

  return (
    <section
      id="bookNow-content-section"
      className={`section bookNow-content-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="bookNow-section-content d-flex">
        <div className="col-md-12 d-flex main-col">
          <div className="col-7 scrollable-content">
            <h2 className="font-primary">Book Your Journey Today!</h2>
            <br />
            <br />
            <form className="feedback-form">
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                />
                <label className="label-text">Name</label>
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                />
                <label className="label-text">Email</label>
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder=""
                />
                <label className="label-text">Mobile</label>
                {errors.mobile && <p className="error-text">{errors.mobile}</p>}
              </div>
            </form>
            <h3 className="font-primary">Your stay</h3>
            <div className="date-container d-flex col-12">
              <div className="col-6 d-flex check-in stay-input">
                <div
                  className="col-lg-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-calendar-days book-icons"></i>
                </div>
                <div className="col-lg-4">
                  <p className="book-text">Check in</p>
                </div>
                <div className="col-lg-5">
                  <DatePicker
                    className="date-input"
                    selected={checkinDate}
                    onChange={(date1) => setCheckinDate(date1)}
                  />
                  {errors.checkinDate && <p className="error-text">{errors.checkinDate}</p>}
                </div>
              </div>
              <div className="col-6 d-flex check-out stay-input">
                <div
                  className="col-lg-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-calendar-days book-icons"></i>
                </div>
                <div className="col-lg-4">
                  <p className="book-text">Check out</p>
                </div>
                <div className="col-lg-5">
                  <DatePicker
                    className="date-input"
                    selected={checkoutDate}
                    onChange={handleCheckoutChange}
                  />
                  
                </div>
                {errors.checkoutDate && <p className="error-text">{errors.checkoutDate}</p>}
              </div>
            </div>
            <h3 className="font-primary">Guests</h3>
            <div className="date-container d-flex">
              <div className="col-6 d-flex check-in stay-input">
                <div
                  className="col-lg-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-person book-icons"></i>
                </div>
                <div className="col-lg-4">
                  <p className="book-text">No of adults</p>
                </div>
                <div className="col-lg-5">
                  <input
                    className="count-input"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    type="number"
                  />
                </div>
                {errors.adults && <p className="error-text">{errors.adults}</p>}
              </div>
              <div className="col-6 d-flex check-out stay-input">
                <div
                  className="col-lg-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-child-reaching book-icons"></i>
                </div>
                <div className="col-lg-4">
                  <p className="book-text">No of children</p>
                </div>
                <div className="col-lg-5">
                  <input
                    className="count-input"
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    type="number"
                  />
                </div>
                {errors.guests && <p className="error-text">{errors.guests}</p>}
              </div>
            </div>
            <h3 className="font-primary">Select Your Experience</h3>
            <div className="package-card-container">
              {contentData.slice(0, 5).map((content, index) => (
                <PackageCard
                  key={index}
                  content={content}
                  onClick={() => handleCardClick(index, content.title)}
                  isSelected={selectedCard === index}
                />
              ))}
              {errors.pack && <p className="error-text">{errors.pack}</p>}
            </div>

            <textarea
              name="message"
              style={{ width: "100%", borderRadius: "10px", padding: "20px" }}
              rows={8}
              placeholder="Message..."
            ></textarea>

            <div className="col-4 d-flex bottom-btn-container">
              <button
                className="btn btn-dark btn-book-f"
                onClick={handleProceedClick}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>

        <Modal2 show={showBookingSummary} onClose={() => setShowBookingSummary(false)} onSubmit={handleBookingConfirm}>
          <h2>Booking Summary</h2>
          <br />
          <div className="booking-summary-content">
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                type="text"
                value={name}
                placeholder=""
                readOnly
              />
              <label className="label-text">Name</label>
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                type="text"
                value={email}
                placeholder=""
                readOnly
              />
              <label className="label-text">Email</label>
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                type="text"
                value={mobile}
                placeholder=""
                readOnly
              />
              <label className="label-text">Mobile</label>
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                type="text"
                value={duration}
                placeholder=""
                readOnly
              />
              <label className="label-text">
                Duration of your stay
              </label>
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                type="text"
                value={pack}
                placeholder=""
                readOnly
              />
              <label className="label-text">Package Details</label>
            </div>
          </div>
        </Modal2>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2>Booking Submitted Successfully</h2>
          <br></br>
          <p>
            Your booking has been successfully submitted. Thank you for choosing
            INTT Leisure. We look forward to welcoming you on your
            transformative mindfulness journey.
          </p>
        </Modal>
      </div>
    </section>
  );
};

export default BookNowContent2;
