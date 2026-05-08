import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava,
  FaDatabase, FaPython
} from 'react-icons/fa'
import {
  SiJavascript, SiTypescript, SiMongodb, SiExpress,
  SiMysql, SiSocketdotio, SiCplusplus
} from 'react-icons/si'
import { GrOracle } from 'react-icons/gr'
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi'
import './Education.css'

const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    field: 'Computer Science',
    school: 'National Institute of Technology, Warangal',
    year: '2022 – 2025',
    grade: 'CGPA: 7.73/10.0',
    icon: '🎓',
  },
]

const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Blue Yonder',
    location: 'Hyderabad, Telangana',
    year: 'July 2025 – Present',
    points: [
      'Designed and developed REST APIs to integrate AI agents for dynamic task execution and real-time response handling.',
      'Implemented agent orchestration logic, enabling seamless communication between backend services and AI-driven workflows.',
      'Reduced API response time by 30% using query optimization and caching.',
      'Designed and implemented new features from requirements to deployment, enhancing user experience.',
    ],
    icon: '💼',
  },
  {
    role: 'SDE Intern',
    company: 'Blue Yonder',
    location: 'Hyderabad, Telangana',
    year: 'Jan 2025 – June 2025',
    points: [
      'Developed optimized React components, reducing re-renders and improving page load performance by 25%.',
      'Resolved critical defects in a web application, improving functionality and user experience.',
      'Utilized Jira to effectively manage and prioritize tasks, track project progress, and ensure timely delivery.',
      'Documented resolved issues and optimization strategies to ensure knowledge transfer and code maintainability.',
    ],
    icon: '🚀',
  },
]

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 78, color: '#3178C6' },
      { name: 'Python', icon: <FaPython />, level: 75, color: '#3776AB' },
      { name: 'Java', icon: <FaJava />, level: 80, color: '#ED8B00' },
      { name: 'C++', icon: <SiCplusplus />, level: 75, color: '#00599C' },
      { name: 'SQL', icon: <FaDatabase />, level: 82, color: '#00d4ff' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', icon: <FaReact />, level: 92, color: '#61DAFB' },
      { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, level: 85, color: '#ffffff' },
      { name: 'Socket.IO', icon: <SiSocketdotio />, level: 78, color: '#010101' },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 82, color: '#47A248' },
      { name: 'MySQL', icon: <SiMysql />, level: 80, color: '#4479A1' },
      { name: 'OracleDB', icon: <GrOracle />, level: 70, color: '#F80000' },
      { name: 'Git', icon: <FaGitAlt />, level: 88, color: '#F05032' },
    ],
  },
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
    <section className="education section" id="education" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education & Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My academic journey, professional experience, and technical expertise
        </motion.p>

        {/* Experience Section */}
        <motion.div
          className="education__experience-section"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h3 className="education__section-heading">
            <HiBriefcase /> Work Experience
          </h3>
          <div className="timeline">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="timeline__item"
                variants={itemVariants}
              >
                <div className="timeline__marker">
                  <span className="timeline__icon">{item.icon}</span>
                </div>
                <div className="timeline__content glass-card">
                  <span className="timeline__year">{item.year}</span>
                  <h4 className="timeline__degree">{item.role}</h4>
                  <p className="timeline__field">{item.company}</p>
                  <p className="timeline__school">{item.location}</p>
                  <ul className="timeline__points">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="education__layout">
          {/* Education Timeline */}
          <motion.div
            className="education__timeline"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="education__section-heading">
              <HiAcademicCap /> Education
            </h3>
            <div className="timeline">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline__item"
                  variants={itemVariants}
                >
                  <div className="timeline__marker">
                    <span className="timeline__icon">{item.icon}</span>
                  </div>
                  <div className="timeline__content glass-card">
                    <span className="timeline__year">{item.year}</span>
                    <h4 className="timeline__degree">{item.degree}</h4>
                    <p className="timeline__field">{item.field}</p>
                    <p className="timeline__school">{item.school}</p>
                    <span className="timeline__grade">{item.grade}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="education__skills"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="skills__category"
                variants={itemVariants}
              >
                <h3 className="education__section-heading">{category.title}</h3>
                <div className="skills__grid">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="skill-card glass-card"
                      whileHover={{ y: -6, scale: 1.04 }}
                      variants={itemVariants}
                    >
                      <div
                        className="skill-card__icon"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="skill-card__name">{skill.name}</span>
                      <div className="skill-card__bar">
                        <motion.div
                          className="skill-card__bar-fill"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                        />
                      </div>
                      <span className="skill-card__level">{skill.level}%</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
