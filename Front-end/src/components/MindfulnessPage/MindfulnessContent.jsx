import React, { useState, useEffect, lazy } from "react";
import { useMobileView } from "../../contexts/MobileViewContext";
import contentData from "../../data/MindfulnessPageData";

const ContentBlock = lazy(() => import("./MindfulnessCard"));

const MindfulnessContent = () => {
  const isMobileView = useMobileView();

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

  return (
    <section
      id="mindfulness-content-section"
      className={`section mindfulness-content-section justify-content-center d-flex ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      <div className="mindfulness-section-content">
        <h3 className="font-primary">What is Mindfulness Tourism?</h3>
        <p className="font-secondary">
          What exactly is Mindful Tourism? We often hear about mindfulness, but
          how often do we participate in Mindful Tourism? It’s a distinct
          approach rooted in Sri Lanka's authentic mindfulness teachings and
          bolstered by solid research. Partnering with INTT Leisure for a
          mindful tour offers a transformative experience tailored for leaders
          and professionals. Each moment of your journey is meticulously
          designed to deepen your mindfulness practice. Our experts guide you
          through techniques that aren’t just theoretical—they’re backed by
          action research conducted by Dr. Gamini Hewawasam, specifically tested
          and proven to be effective for leaders.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MindfulnessContent;
