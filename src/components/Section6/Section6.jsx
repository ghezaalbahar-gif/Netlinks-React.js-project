import React, { useState } from "react";
import "./Section6.css";
import faqData from "./Section6Data";

function Section6() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section6">
      <div className="section6-container">
        <p className="section6-label">· QUESTIONS</p>

        <h2 className="section6-title">Answers to what CIOs actually ask.</h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? "faq-active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => handleToggle(index)}
              >
                <span>{item.question}</span>

                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section6;
