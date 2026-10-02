import React from "react";
import "./Third.css" ;
import thirdData from "./ThirdData";

function Third() {
  return (
    <section className="main-third-section">

      {thirdData.map((item, index) => (
        <div
          className={`third-container-third-section ${ index === 1 ? "reverse-third-section" : ""}`}key={item.id}>

          {/* TEXT */}
          <div className="third-content-third-section">

            <p className="third-label-third-section">{item.number}, {item.label}</p>
            <h2 className="third-title-third-section">{item.title}<span>{item.highlight}</span>{item.titleEnd && <>{item.titleEnd}</>}</h2>
            <p className="third-description-third-section">{item.description}</p>

            <ul className="third-list-third-section">{item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <button className="third-button-third-section">{item.button}<span>↗</span></button></div>

          {/* IMAGE */}
          <div className="third-image-container-third-section">
            <img
              src={item.image}
              alt={item.label}
              className="third-image-third-section"/>
          </div>

        </div>
      ))}

    </section>
  );
}

export default Third;