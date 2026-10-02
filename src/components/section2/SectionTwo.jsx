import { services } from "./secTwoData";
import "./SectionTwo.css";

function SectionTwo() {
  return (
    <section className="section-two">
      <div className="sec2-section-intro">
        <div>
          <p className="sec2-small-title">WHAT WE DO</p>
          <h1>
            Six services. One
            <br />
            <span>accountable partner.</span>
          </h1>
        </div>
        <p className="sec2-description">
          One Afghanistan-based vendor for ERP, custom software,
          AI, staff augmentation, and cloud, so nothing falls
          between the seams.
        </p>
      </div>
      <div className="sec2-services">
        {services.map((service) => (
          <div
            className="sec2-service-card"
            key={service.number}
          >
            <div className="sec2-card-top">
              <small>{service.number}</small>
              <span>↗</span>
            </div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SectionTwo;