import { Link } from 'react-scroll'
import { FaGithub, FaLinkedinIn, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              SG
              <span className="footer__logo-bracket"> /&gt;</span>
            </span>
            <p className="footer__tagline">
              Building digital experiences with passion & precision.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <div className="footer__nav">
              {['home', 'about', 'education', 'projects', 'contact'].map((link) => (
                <Link
                  key={link}
                  to={link}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="footer__link"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__social-col">
            <h4 className="footer__heading">Connect</h4>
            <div className="footer__socials">
              <a href="https://github.com/Satyamg111" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/satyam-gupta-4a513720b" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/satyam_g._/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Satyam Gupta. Made with <FaHeart className="footer__heart" /> and React
          </p>

          <Link
            to="home"
            smooth={true}
            duration={800}
            className="footer__back-to-top"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
