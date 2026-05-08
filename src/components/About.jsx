import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaServer, FaPalette, FaRocket } from 'react-icons/fa'
import './About.css'

const stats = [
  { value: '500+', label: 'LeetCode Problems' },
  { value: '450+', label: 'GFG Problems' },
  { value: 'NIT', label: 'Warangal (MCA)' },
  { value: '30%', label: 'API Perf. Boost' },
]

const highlights = [
  {
    icon: <FaCode />,
    title: 'Frontend Dev',
    desc: 'Building responsive UIs with React, modern CSS, and animations.',
  },
  {
    icon: <FaServer />,
    title: 'Backend Dev',
    desc: 'Designing scalable APIs with Node.js, Express, and MongoDB.',
  },
  {
    icon: <FaPalette />,
    title: 'UI/UX Design',
    desc: 'Creating intuitive, beautiful interfaces that users love.',
  },
  {
    icon: <FaRocket />,
    title: 'Performance',
    desc: 'Optimizing for speed, accessibility, and best practices.',
  },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get to know who I am and what drives me
        </motion.p>

        <div className="about__grid">
          <motion.div
            className="about__text-block"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about__visual-card glass-card">
              <div className="about__code-block">
                <div className="about__code-header">
                  <span className="about__dot about__dot--red" />
                  <span className="about__dot about__dot--yellow" />
                  <span className="about__dot about__dot--green" />
                  <span className="about__code-filename">about.js</span>
                </div>
                <pre className="about__code-content">
{`const developer = {
  name: "Satyam Gupta",
  role: "Associate SDE",
  company: "Blue Yonder",
  education: "MCA @ NIT Warangal",
  skills: [
    "React.js",
    "Node.js",
    "AI Agent APIs",
    "DSA (950+ solved)"
  ],
  motto: "Code. Create. Inspire."
};`}
                </pre>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__info"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="about__description">
              I'm a <span className="gradient-text">Full Stack Developer</span> at Blue Yonder
              with experience in building secure, real-time, and scalable web applications
              using React.js, Node.js, and MongoDB. I've contributed to production systems
              by developing new features, optimizing React components, and improving backend performance.
            </p>
            <p className="about__description">
              With an MCA from NIT Warangal and a strong foundation in data structures,
              algorithms, and software engineering, I'm passionate about performance
              engineering and delivering user-centric solutions. I've solved 500+ problems
              on LeetCode and 450+ on GeeksforGeeks.
            </p>

            <motion.div
              className="about__stats"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="about__stat glass-card"
                  variants={itemVariants}
                >
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="about__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://drive.google.com/file/d/1Qnv14abFxGnrpZd5kWwXn6uqRxOjiEZI/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="about-resume-btn"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="about__highlights"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              className="about__highlight glass-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="about__highlight-icon">{item.icon}</div>
              <h3 className="about__highlight-title">{item.title}</h3>
              <p className="about__highlight-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
