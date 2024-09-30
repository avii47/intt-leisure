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
  const [checkinDate, setCheckinDate] = useState(new Date().toISOString().split('T')[0]);
  const [checkoutDate, setCheckoutDate] = useState(new Date().toISOString().split('T')[0]);
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

  useEffect(() => {
    const section = document.getElementById("bookNow-content-section");
    const textSection = document.getElementById("text1");

    if (!textSection) {
      console.warn("Element with ID 'text1' not found.");
      return;
    }

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
    const docRef = await addDoc(collection(db, "Inquiry_Collection"), {
      Name: name,
      Email: email,
      Mobile: mobile,
      Checkin_Date: checkinDate,
      Checkout_Date: checkoutDate,
      Duration: duration,
      Guests: adults + " Addults and " + children + " Children",
      Package: pack,
      Message: document.querySelector('textarea[name="message"]').value,
      Status: 'Pending'
    });
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
    setShowBookingSummary(true); // Show booking summary modal when clicking "Proceed"
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
            <h2 className="font-primary">Book your journey with us!</h2>
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
                    onChange={(e) => setAdults(e.target.value)}
                    type="number"
                  />
                </div>
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
                    onChange={(e) => setChildren(e.target.value)}
                    type="number"
                  />
                </div>
              </div>
            </div>
            <h3 className="font-primary">Select the Experience</h3>
            <div className="package-card-container">
              {contentData.slice(0, 5).map((content, index) => (
                <PackageCard
                  key={index}
                  content={content}
                  onClick={() => handleCardClick(index, content.title)}
                  isSelected={selectedCard === index}
                />
              ))}
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
                    Click to Go
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
