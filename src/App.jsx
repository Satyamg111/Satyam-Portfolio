import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'app--loaded' : ''}`}>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
