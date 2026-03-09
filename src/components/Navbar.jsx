import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark">C</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-primary">Clarioon</span>
            <span className="navbar__logo-tagline">Communicate with Clarity</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav">
          <NavLink to="/" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <Link to="/contact" className="btn btn-primary navbar__cta">
          Book a Session
        </Link>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          <NavLink to="/" className="navbar__mobile-link" onClick={closeMenu} end>Home</NavLink>
          <NavLink to="/about" className="navbar__mobile-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" className="navbar__mobile-link" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" className="navbar__mobile-link" onClick={closeMenu}>Contact</NavLink>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '12px' }} onClick={closeMenu}>
            Book a Session
          </Link>
        </nav>
      </div>
    </header>
  )
}
