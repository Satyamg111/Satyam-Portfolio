import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChatAlt2, HiX, HiPaperAirplane, HiDotsHorizontal } from 'react-icons/hi'
import ReactMarkdown from 'react-markdown'
import config from '../config'
import './Chatbot.css'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! I am Satyam Vadami, your guide to Satyam's career. Ask me anything about his projects, skills, or experience!", sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowGreeting(true)
    }, 1000)
    
    const hideTimer = setTimeout(() => {
      setShowGreeting(false)
    }, 10000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) setShowGreeting(false)
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { id: Date.now(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    const botMsgId = Date.now() + 1
    const botMsg = { id: botMsgId, text: '', sender: 'bot' }
    setMessages(prev => [...prev, botMsg])

    try {
      const response = await fetch(`${config.chatbot.baseUrl}/chat/stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agent: config.chatbot.agent,
          message: input
        })
      })

      if (!response.ok) throw new Error('Network response was not ok')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulatedText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const text = line.replace(
              "data: ",
              ""
            );

            accumulatedText += text;
            // Update the specific bot message with accumulated text
            setMessages(prev => prev.map(msg =>
              msg.id === botMsgId ? { ...msg, text: accumulatedText } : msg
            ))
          }
        }

      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => prev.map(msg =>
        msg.id === botMsgId
          ? { ...msg, text: "Oops! I couldn't reach the server. Please make sure the chatbot backend is running." }
          : msg
      ))
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
                (msg.text || msg.sender === 'user') && (
                  <motion.div
                    key={msg.id}
                    className={`chatbot__message chatbot__message--${msg.sender}`}
                    initial={{ opacity: 0, x: msg.sender === 'user' ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="chatbot__message-bubble">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </motion.div>
                )
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

      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div 
            className="chatbot__greeting"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={toggleChat}
          >
            <div className="chatbot__greeting-avatar">🤖</div>
            <div className="chatbot__greeting-text">Hi! 👋<br/>How can I help you?</div>
            <button 
              className="chatbot__greeting-close" 
              onClick={(e) => {
                e.stopPropagation();
                setShowGreeting(false);
              }}
            >
              <HiX size={14} />
            </button>
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
