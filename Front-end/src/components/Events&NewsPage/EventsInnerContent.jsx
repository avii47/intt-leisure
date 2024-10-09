import React, { useState, useEffect, useRef, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../../contexts/MobileViewContext";
import emailjs from "emailjs-com";
import Modal from "../BookNowPage/Modal";
import "../../firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "../../components/CSS/FeedbackSection.css";

import "../../components/CSS/Home/Events&NewsSection.css";
import Slider from "react-slick";
import contentData from "../../data/Events&NewsSectionData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import left_arrow from "../../assets/icons/left-arrow.png";
import right_arrow from "../../assets/icons/right-arrow.png";

const ContentCard = lazy(() => import("../HomePage/ContentCard"));

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

const EventsNewsSection = ({exclue}) => {
  const containerRef3 = useRef(null);
  const cardRef3 = useRef(null);
  const [showLeftButton3, setShowLeftButton3] = useState(false);
  const [showRightButton3, setShowRightButton3] = useState(true);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const navigate = useNavigate();
  let sliderRef = useRef(null);

  const isMobileView = useMobileView();

  useEffect(() => {
    const section = document.getElementById("eventsNews-section");
    const cardSection = document.getElementById("eventsNews-cards");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardSection.classList.add("animate-cards");
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

  const handleOnClick = (path) => {
    navigate(path);
  };

  const updateButtonVisibility3 = (currentSlide3) => {
    setShowLeftButton3(currentSlide3 > 0);
    setShowRightButton3(currentSlide3 < contentData.length - 3);
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (current, next) => setCurrentSlide3(next),
    afterChange: (current) => updateButtonVisibility3(current),
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 669,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
      <div className="eventsNews-content2 justify-content-center">
        <div className="col-12 d-flex">
          <div className="col">
            <h3 className="font-primary">Other Events</h3>
          </div>
          <div className="col-1 nav-icon-col">
            <div className="service-card-nav-icons" style={{ marginTop: "0" }}>
              <img
                className={`nav-icon ${!showLeftButton3 ? "disabled" : ""}`}
                src={left_arrow}
                onClick={previous}
              ></img>
              <img
                className={`nav-icon ${!showRightButton3 ? "disabled" : ""}`}
                src={right_arrow}
                onClick={next}
              ></img>
            </div>
          </div>
        </div>
        <div className="eventsNews-wrapper2">
          <div
            id="eventsNews-cards"
            className="slider-container"
            style={{ paddingBottom: "0", textAlign: "center" }}
          >
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
            {contentData
              .filter(content => content.id !== exclue)  
              .map((content, index) => (
                <ContentCard
                  key={index}
                  content={content}
                  onClick={() => handleOnClick("/events&news")}
                />
              ))
            }
            </Slider>
          </div>
        </div>
      </div>
  );
};

function EventsInnerContent({ content }) {
  const isMobileView = useMobileView();
  const navigate = useNavigate();

  return (
    <section
      id="event-content-section"
      className={`section event-content-section d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="event-section-content">
        <h2 className="font-secondary event-inner-heading">
          {content.eventTitle}
        </h2>
        <img src={content.img} className="event-img" alt="" />
        <div className="d-flex meta-tags2">
          <div className="col-sm-3">
            <p className="Font-secondary event-date-place3">
              <i class="fa-regular fa-calendar-check events-meta-icons"></i>
              {content.tag}
            </p>
          </div>
          <div className="col-sm-3">
            <p className="Font-secondary event-date-place3">
              <i className="fa-solid fa-calendar-days events-meta-icons"></i>
              {content.date}
            </p>
          </div>
          <div className="col-sm-3">
            <p className="Font-secondary event-date-place3">
              <i className="fa-regular fa-clock events-meta-icons"></i>
              {content.time}
            </p>
          </div>
          <div className="col-sm-3">
            <p className="Font-secondary event-date-place3">
              <i className="fa-solid fa-location-dot events-meta-icons"></i>
              {content.venue}
            </p>
          </div>
        </div>
        <hr />

        {content.description && (
          <ul className="event-details-list">
            {content.description.map((desc, index) => (
              <li key={index} className="font-secondary event-des-list">
                {desc}
              </li>
            ))}
          </ul>
        )}

        <FeedbackForm />
        <EventsNewsSection exclue={content.id} />
      </div>
    </section>
  );
}

export default EventsInnerContent;
