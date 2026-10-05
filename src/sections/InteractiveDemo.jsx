import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const conversation = [
  { from: 'bot', text: 'Hi there! 👋 Welcome to Bella\'s Hair Studio. I\'m your AI booking assistant. How can I help you today?', delay: 500 },
  { from: 'user', text: 'Hi! I\'d like to book a haircut for Saturday please', delay: 2000 },
  { from: 'bot', text: 'Of course! I have availability this Saturday. Which time works best for you?', delay: 1500 },
  { from: 'bot', text: '🕐 10:00 AM\n🕐 11:30 AM\n🕐 2:00 PM\n🕐 3:30 PM', delay: 800 },
  { from: 'user', text: '2:00 PM please', delay: 2000 },
  { from: 'bot', text: 'Great choice! ✅ Your haircut is booked for Saturday at 2:00 PM with Bella. You\'ll receive a confirmation text shortly. See you then! 💇‍♀️', delay: 1500 },
]

export default function InteractiveDemo() {
  const [messages, setMessages] = useState([])
  const [typing, setTyping] = useState(false)
  const [started, setStarted] = useState(false)
  const chatRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    let timeout
    let index = 0

    const showNext = () => {
      if (index >= conversation.length) return

      const currentMsg = conversation[index]
      setTyping(true)

      timeout = setTimeout(() => {
        setMessages(prev => [...prev, currentMsg])
        setTyping(false)
        index++

        if (index < conversation.length) {
          timeout = setTimeout(showNext, currentMsg.delay || 1000)
        }
      }, currentMsg.from === 'bot' ? 1200 : 600)
    }

    showNext()

    return () => clearTimeout(timeout)
  }, [started])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages, typing])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-violet-50/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Live Demo"
          title={
            <>
              See Our <span className="gradient-text">Booking Bot</span> in Action
            </>
          }
          subtitle="This is what your customers experience — a seamless WhatsApp booking conversation powered by AI, available 24/7."
        />

        <div className="max-w-md mx-auto">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Bella's Hair Studio</p>
                <p className="text-emerald-100 text-xs">AI Booking Agent • Online</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            </div>

            {/* Chat messages */}
            <div
              ref={chatRef}
              className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === 'user'
                        ? 'bg-emerald-500 text-white rounded-br-md'
                        : 'bg-white text-gray-800 shadow-sm rounded-bl-md border border-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input bar */}
            <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 text-sm text-gray-500 bg-gray-50 rounded-full px-4 py-2.5 outline-none border border-gray-200"
                readOnly
              />
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
