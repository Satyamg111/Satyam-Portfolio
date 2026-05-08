import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import './Hero.css'

const roles = [
  'Full Stack Developer',
  'Associate SDE @ Blue Yonder',
  'React.js Specialist',
  'Problem Solver (950+ DSA)',
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        )
      }, isDeleting ? 40 : 80)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Satyamg111', label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/satyam-gupta-4a513720b', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/satyam_g._/', label: 'Instagram' },
  ]

  return (
    <section className="hero section" id="home">
      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__container container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="hero__wave">👋</span> Hey there, I'm
          </motion.p>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Satyam Gupta
          </motion.h1>

          <motion.div
            className="hero__role-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="hero__role-prefix">I'm a </span>
            <span className="hero__role-text">{text}</span>
            <span className="hero__cursor">|</span>
          </motion.div>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Full-stack developer building secure, real-time, and scalable web applications.
            Skilled in React.js, Node.js, and AI-driven workflows at Blue Yonder.
          </motion.p>

          <motion.div
            className="hero__buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link to="projects" smooth={true} offset={-80} duration={500}>
              <button className="btn-primary" id="view-work-btn">
                View My Work
              </button>
            </Link>
            <Link to="contact" smooth={true} offset={-80} duration={500}>
              <button className="btn-outline" id="contact-btn">
                Get In Touch
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label={social.label}
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />
            <div className="hero__avatar">
              <span className="hero__avatar-emoji">👨‍💻</span>
            </div>
          </div>
          {/* Floating tech badges */}
          <motion.div
            className="hero__badge hero__badge--react"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ⚛️ React
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--node"
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            🟢 Node.js
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--js"
            animate={{ y: [-6, 10, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✨ JavaScript
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <Link to="about" smooth={true} offset={-80} duration={500}>
          <HiArrowDown size={24} />
        </Link>
      </div>
    </section>
  )
}

export default Hero
