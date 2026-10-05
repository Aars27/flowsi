import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PAGE_TRANSITION_MS } from '../config/animation'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
  const location = useLocation()
  
  // Calculate transition duration in seconds
  const durationSec = PAGE_TRANSITION_MS / 1000

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
      
      {/* Curtain Transition Effect */}
      <motion.div
        key={`curtain-${location.pathname}`}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: durationSec, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[9998] bg-gradient-to-br from-violet-900 via-indigo-900 to-dark origin-left pointer-events-none flex flex-col items-center justify-center"
      >
         <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: durationSec * 0.5, delay: durationSec * 0.2 }}
         >
           <svg width="48" height="48" viewBox="0 0 32 32" className="animate-pulse">
              <defs>
                <linearGradient id="trans-logo" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#C4B5FD" />
                </linearGradient>
              </defs>
              <path d="M4 12 Q12 4 20 12 Q16 18 12 14 Q8 10 4 16 Q8 22 12 18 Q16 14 24 22 Q28 26 28 20" stroke="url(#trans-logo)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
         </motion.div>
      </motion.div>

      {/* Navigation Progress Bar */}
      <motion.div
        key={`progress-${location.pathname}`}
        initial={{ width: 0, opacity: 1 }}
        animate={{ width: "100%", opacity: 0 }}
        transition={{ duration: durationSec * 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-violet-600 to-pink-500 z-[10000] origin-left pointer-events-none"
      />
    </AnimatePresence>
  )
}
