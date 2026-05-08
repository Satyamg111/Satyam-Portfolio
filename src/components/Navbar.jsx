import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'education', label: 'Education' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container container">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="navbar__logo"
          onClick={closeMenu}
        >
          <span className="navbar__logo-bracket">&lt;</span>
          SG
          <span className="navbar__logo-bracket"> /&gt;</span>
        </Link>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="navbar__link"
              activeClass="navbar__link--active"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1Qnv14abFxGnrpZd5kWwXn6uqRxOjiEZI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary navbar__resume-btn"
          >
            Resume
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          id="nav-toggle"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
