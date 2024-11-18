import React, { useEffect, lazy } from "react";
import { useNavigate } from 'react-router-dom';
import { useMobileView } from "../../contexts/MobileViewContext";
import contentData from "../../data/MindfulnessPageData";

const ContentBlock = lazy(() => import("./MindfulnessCard"));

const MindfulnessContent = () => {
  const isMobileView = useMobileView();
  const navigate = useNavigate();

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

  useEffect(() => {
    const section = document.getElementById("rw2");
    const textSection = document.getElementById("text2");

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

  useEffect(() => {
    const section = document.getElementById("rw3");
    const textSection = document.getElementById("text3");

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

  const handleMindfulnessCardClick = (id) => {
    navigate(`/mindfulness/${id}`);
  };

  return (
    <section
      id="mindfulness-content-section"
      className={`mindfulness-content-section justify-content-center d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="mindfulness-section-content page-section">
        <h3 className="font-primary">What is Mindfulness Tourism?</h3>
        <p className="font-secondary">
        Although mindfulness is best known as an introspective journey, this experience can be well paired with the immersion of external surroundings. Mindfulness Tourism is a distinct approach that allows individuals to uncover the truth about inner peace amidst the tranquil landscapes of Sri Lanka that are also home to the profound teachings of authentic mindfulness. When you partner with INTT Leisure for Mindfulness Tourism, each moment of your journey is meticulously designed to deepen your understanding of mindfulness and allow you to reach personal transcendence. Our experts guide you through techniques that aren’t just theoretical - they are supported by extensive action research conducted by Dr. GB Hewawasam, which has been tested and proven to be effective for both leaders and seekers.
        </p>
        <div
          id="mindfulness-content-cards-container"
          className="mindfulness-content-cards-container" 
        >
          {contentData.map((content, index) => (
            <ContentBlock
              image={content.img}
              title={content.title}
              text={content.sub}
              buttonText={content.buttonText}
              imagePosition={content.imagePosition}
              onClick={() => handleMindfulnessCardClick(content.id)}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MindfulnessContent;
