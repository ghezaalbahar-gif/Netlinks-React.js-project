
import React from "react";
import industriesData from "./IndustriesData";
import "./Industries.css";

const Industries = () => {
  return (
    <section className="industries">
      <div className="industries-container">

        <div className="industries-label">
          INDUSTRIES
        </div>

        <div className="industries-header">
          <h1>
            Pattern recognition <span>across</span>
            <br />
            <span>verticals.</span>
          </h1>

          <p>
            Two decades of implementations means we've seen
            <br />
            your problem before. Industry templates, compliance
            <br />
            defaults, and playbooks included.
          </p>
        </div>

        <div className="industries-list">
          {industriesData.map((industry) => (
            <div className="industry-row" key={industry.number}>

              <span className="industry-number">
                {industry.number}
              </span>

              <h2 className="industry-title">
                {industry.title}
              </h2>

              <p className="industry-description">
                {industry.description}
              </p>

              <span className="industry-arrow">
                ↗
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;

