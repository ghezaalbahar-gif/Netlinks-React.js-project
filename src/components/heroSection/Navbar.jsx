import { navLinks } from './navLinks.js'
import './styles.css'

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <img
          className="navbar__logo-img"
          src="https://netlinks.af/_astro/logo.DUySRYvR_2j5iRN.avif"
          alt="Netlinks"
        />
      </div>

      {/* Menu */}
      <nav className="navbar__menu">
        {navLinks.map((link) => (
          <a className="navbar__link" href="#" key={link.label}>
            {link.label}
            {link.hasDropdown && (
              <svg
                className="navbar__caret"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}
          </a>
        ))}
      </nav>

      {/* Button */}
      <a className="navbar__button" href="#">
        Get started
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    </header>
  )
}
