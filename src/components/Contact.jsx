import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaGithub, FaLinkedinIn, FaInstagram
} from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Hyderabad, India' },
  { icon: <FaEnvelope />, label: 'Email', value: 'satyam97102@gmail.com' },
  { icon: <FaPhone />, label: 'Phone', value: '+91-7610397102' },
]

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/Satyamg111', label: 'GitHub' },
  { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/satyam-gupta-4a513720b', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/satyam_g._/', label: 'Instagram' },
]

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [sending, setSending] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSending(true)
    // Simulate sending
    setTimeout(() => {
      setSending(false)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    }, 1500)
  }

  return (
    <section className="contact section" id="contact" ref={ref}>
      {/* Background gradient */}
      <div className="contact__bg-orb contact__bg-orb--1" />
      <div className="contact__bg-orb contact__bg-orb--2" />

      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have a project in mind or just want to say hi? Let's connect!
        </motion.p>

        <div className="contact__grid">
          {/* Info Side */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="contact__info-title">Let's talk about everything!</h3>
            <p className="contact__info-desc">
              Feel free to reach out for collaborations, opportunities, or
              just a friendly conversation. I'd love to hear from you!
            </p>

            <div className="contact__info-list">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact__info-item">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            id="contact-form"
          >
            <div className={`contact__field ${errors.name ? 'contact__field--error' : ''}`}>
              <label htmlFor="contact-name" className="contact__label">
                Your Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="contact__input"
              />
              {errors.name && (
                <motion.span
                  className="contact__error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.name}
                </motion.span>
              )}
            </div>

            <div className={`contact__field ${errors.email ? 'contact__field--error' : ''}`}>
              <label htmlFor="contact-email" className="contact__label">
                Your Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="contact__input"
              />
              {errors.email && (
                <motion.span
                  className="contact__error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.email}
                </motion.span>
              )}
            </div>

            <div className={`contact__field ${errors.message ? 'contact__field--error' : ''}`}>
              <label htmlFor="contact-message" className="contact__label">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="contact__textarea"
                rows="5"
              />
              {errors.message && (
                <motion.span
                  className="contact__error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.message}
                </motion.span>
              )}
            </div>

            <motion.button
              type="submit"
              className="btn-primary contact__submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id="submit-btn"
            >
              {sending ? (
                <span className="contact__spinner" />
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.div
                className="contact__toast contact__toast--success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
