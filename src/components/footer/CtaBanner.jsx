import "./CtaBanner.css";

// The big purple "Talk to a senior architect" banner.
function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        {/* faint wavy lines in the background */}
        

        <h2 className="cta-title">
          Talk to a senior architect
          <br />
          <em>this week.</em>
        </h2>

        <p className="cta-subtitle">
          30-minute call. Walk away with a phased plan and fixed-fee scoping in
          5 business days.
        </p>

        <button className="cta-button" type="button">
          Book a 30-min discovery call ↗
        </button>
      </div>
    </section>
  );
}

export default CtaBanner;
