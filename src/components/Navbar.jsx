import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX, HiSun, HiMoon, HiColorSwatch } from 'react-icons/hi'
import './Navbar.css'

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'education', label: 'Education' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

const themes = [
  { id: 'dark', name: 'Dark', color: '#0a0a1a' },
  { id: 'light', name: 'Light', color: '#f4f6fa' },
  { id: 'dracula', name: 'Dracula', color: '#282a36' },
  { id: 'ocean', name: 'Ocean', color: '#0f172a' },
  { id: 'sunset', name: 'Sunset', color: '#2d1b2e' }
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const themeRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeRef.current && !themeRef.current.contains(event.target)) {
        setThemeDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

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

        <div className="navbar__actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div ref={themeRef} style={{ position: 'relative' }}>
            <button 
              className="navbar__theme-toggle" 
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              style={{ background: 'transparent', color: 'var(--text-primary)', border: 'none', display: 'flex', cursor: 'pointer' }}
              aria-label="Toggle theme"
            >
              <HiColorSwatch size={24} />
            </button>
            {themeDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                background: 'var(--bg-glass)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: 'var(--glass-shadow)',
                zIndex: 100,
                minWidth: '120px'
              }}>
                {themes.map(t => (
                  <button
                    key={t.id}
                    onClick={() => { setTheme(t.id); setThemeDropdownOpen(false); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      padding: '8px',
                      borderRadius: '4px',
                      width: '100%',
                      textAlign: 'left',
                      transition: 'var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-glass-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{
                      width: '16px', height: '16px', borderRadius: '50%', background: t.color, border: '1px solid var(--glass-border)'
                    }}></span>
                    <span style={{ fontSize: '14px', fontWeight: theme === t.id ? '600' : '400' }}>{t.name}</span>
                  </button>
                ))}
              </div>
            )}
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
      </div>
    </nav>
  )
}

export default Navbar
