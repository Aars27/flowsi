import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { INITIAL_LOADER_MS } from '../config/animation'

export default function InitialLoader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('flowsi_initial_loaded')
    
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!hasLoadedBefore && !prefersReducedMotion) {
      setIsVisible(true)
      
      const timer = setTimeout(() => {
        setIsVisible(false)
        try {
          sessionStorage.setItem('flowsi_initial_loaded', 'true')
        } catch (e) {
          // Ignore sessionStorage errors
        }
      }, INITIAL_LOADER_MS)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8 relative z-10"
            >
              <svg width="48" height="48" viewBox="0 0 32 32">
                <defs>
                  <linearGradient id="loader-logo-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                </defs>
                <path d="M4 12 Q12 4 20 12 Q16 18 12 14 Q8 10 4 16 Q8 22 12 18 Q16 14 24 22 Q28 26 28 20" stroke="url(#loader-logo-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
              <span className="text-3xl font-bold text-white tracking-tight">Flowsi</span>
            </motion.div>

            {/* Subtle glow behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-violet-600/30 rounded-full blur-3xl" />

            {/* Progress line */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative z-10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: INITIAL_LOADER_MS / 1000 - 0.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-violet-600 to-pink-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
