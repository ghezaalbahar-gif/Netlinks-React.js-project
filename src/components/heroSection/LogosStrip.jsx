import { clientLogos } from './clientLogos.js'
import './styles.css'

export default function LogosStrip() {
  return (
    <section className="logos">
      <div className="logos__label">
        Trusted by global enterprises and institutions
      </div>

      {/* The track is rendered twice so the scroll loops smoothly */}
      <div className="logos__marquee">
        {[1, 2].map((copy) => (
          <div className="logos__track" key={copy}>
            {clientLogos.map((logo) => (
              <img
                className="logos__item"
                src={logo.image}
                alt={logo.name}
                key={logo.name}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
