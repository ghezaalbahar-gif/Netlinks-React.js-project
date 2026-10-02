import { heroStats } from './heroData.js'
import './styles.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        {/* Badge */}
        <div className="hero__eyebrow">
          <span className="hero__dot" aria-hidden="true" />
          <span className="hero__eyebrow-text">
            20 years delivering from Kabul - Afghanistan's enterprise technology
            partner
          </span>
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          Enterprise Odoo, custom software, and AI,
          <br />
          <em>engineered in Afghanistan.</em>
        </h1>

        <div className="hero__sub">
          {/* Paragraph */}
          <p className="hero__text">
            Afghanistan-based since 2005. We built the 500,000-employee Odoo HR
            and payroll system for the national government, and{' '}
            <a href="https://www.jobs.af" target="_blank" rel="noreferrer">
              Jobs.af
            </a>
            , the country's largest job-hunting platform. Senior teams in Kabul
            delivering for clients across Afghanistan, the GCC, India, and the
            US.
          </p>

          {/* Buttons */}
          <div className="hero__cta">
            <a className="btn btn--primary" href="#">
              Book a 30-min discovery call
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M2 8L8 2M8 2H3M8 2v5" />
              </svg>
            </a>
            <a className="btn btn--ghost" href="#">
              Explore services
            </a>
          </div>

          {/* Stats */}
          <div className="hero__proof">
            {heroStats.map((stat) => (
              <div className="hero__stat" key={stat.value}>
                <div className="hero__stat-value">
                  {stat.value}
                  {stat.accent !== '' && <em> {stat.accent}</em>}
                </div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="hero__visual">
        <img
          className="hero__image"
          src="https://netlinks.af/illustrations/home-hero-1280.webp"
          alt="Hero composition, unified enterprise systems on Odoo"
          width="1280"
          height="960"
        />
      </div>
    </section>
  )
}
