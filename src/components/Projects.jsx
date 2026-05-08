import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiSocketdotio, SiMysql, SiJsonwebtokens
} from 'react-icons/si'
import { FaLock } from 'react-icons/fa'
import './Projects.css'

const techIcons = {
  'React.js': <SiReact />,
  'Node.js': <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  'Express.js': <SiExpress />,
  'Socket.IO': <SiSocketdotio />,
  MySQL: <SiMysql />,
  JWT: <SiJsonwebtokens />,
  bcrypt: <FaLock />,
}

const projects = [
  {
    title: 'Chat App - MERN',
    description:
      'A full-stack real-time chat application built with the MERN stack and Chakra UI. Features include real-time messaging via Socket.IO, JWT-based authentication, group chats, and password encryption with bcrypt.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.IO', 'JWT'],
    github: 'https://github.com/Satyamg111',
    live: '#',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    emoji: '💬',
    highlights: [
      'Real-time communication via WebSocket',
      'JWT-based secure authentication',
      'Password encryption with bcrypt',
    ],
  },
  {
    title: 'Store Management System',
    description:
      'A role-based store management system with separate admin and customer interfaces. Admins can manage inventory while customers can browse products, manage carts, and checkout. Built with MySQL for efficient data storage.',
    tech: ['React.js', 'Node.js', 'MySQL', 'Express.js'],
    github: 'https://github.com/Satyamg111',
    live: '#',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    emoji: '🏪',
    highlights: [
      'Role-based access control (Admin/Customer)',
      'MySQL database schema design',
      'Full CRUD inventory management',
    ],
  },
  {
    title: 'Portfolio Website',
    description:
      'This very portfolio! A modern, animated single-page application built with React and Framer Motion, featuring particle backgrounds, glassmorphism design, and smooth scroll animations.',
    tech: ['React.js', 'Node.js'],
    github: 'https://github.com/Satyamg111',
    live: '#',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    emoji: '🌟',
    highlights: [
      'Canvas particle system with mouse interaction',
      'Framer Motion scroll-triggered animations',
      'Glassmorphism design system',
    ],
  },
]

const filters = ['All', 'React.js', 'Node.js', 'MongoDB', 'MySQL']

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tech.includes(activeFilter))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A showcase of my recent work and experiments
        </motion.p>

        {/* Filters */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`projects__filter-btn ${
                activeFilter === filter ? 'projects__filter-btn--active' : ''
              }`}
              onClick={() => setActiveFilter(filter)}
              id={`filter-${filter.toLowerCase().replace('.', '')}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          layout
        >
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              className="project-card glass-card"
              variants={cardVariants}
              layout
              whileHover={{ y: -10 }}
            >
              <div
                className="project-card__thumbnail"
                style={{ background: project.gradient }}
              >
                <span className="project-card__emoji">{project.emoji}</span>
                <div className="project-card__overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub />
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {project.highlights && (
                  <ul className="project-card__highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tech-tag">
                      {techIcons[t]} {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
