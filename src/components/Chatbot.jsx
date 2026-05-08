import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChatAlt2, HiX, HiPaperAirplane, HiDotsHorizontal } from 'react-icons/hi'
import './Chatbot.css'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! I am Satyam Vadami, your guide to Satyam's career. Ask me anything about his projects, skills, or experience!", sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { id: Date.now(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agent: 'resume',
          message: input
        })
      })

      const data = await response.json()
      
      // Assuming response structure contains a message field
      const botMsg = { 
        id: Date.now() + 1, 
        text: data.response || data.message || "I'm sorry, I'm having trouble connecting to my brain right now.", 
        sender: 'bot' 
      }
      setMessages(prev => [...prev, botMsg])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMsg = { 
        id: Date.now() + 1, 
        text: "Oops! I couldn't reach the server. Please make sure the chatbot backend is running.", 
        sender: 'bot' 
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="chatbot">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot__window glass-card"
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="chatbot__header">
              <div className="chatbot__header-info">
                <div className="chatbot__avatar">🤖</div>
                <div>
                  <h4 className="chatbot__title">Satyam Vadami</h4>
                  <span className="chatbot__status">Online</span>
                </div>
              </div>
              <button className="chatbot__close" onClick={toggleChat}>
                <HiX />
              </button>
            </div>

            <div className="chatbot__messages" ref={scrollRef}>
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id} 
                  className={`chatbot__message chatbot__message--${msg.sender}`}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="chatbot__message-bubble">
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="chatbot__message chatbot__message--bot">
                  <div className="chatbot__message-bubble chatbot__message-bubble--typing">
                    <HiDotsHorizontal />
                  </div>
                </div>
              )}
            </div>

            <form className="chatbot__input-area" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Ask something..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chatbot__input"
              />
              <button type="submit" className="chatbot__send-btn" disabled={!input.trim() || isTyping}>
                <HiPaperAirplane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        className={`chatbot__toggle ${isOpen ? 'chatbot__toggle--active' : ''}`}
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="chatbot-toggle"
      >
        {isOpen ? <HiX size={24} /> : <HiChatAlt2 size={24} />}
      </motion.button>
    </div>
  )
}

export default Chatbot
