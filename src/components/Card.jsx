import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, glass = false, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        rounded-3xl p-6 transition-all duration-300
        ${glass
          ? 'glass glow-border'
          : 'bg-white border border-gray-100 shadow-lg shadow-gray-200/50 glow-border hover:shadow-xl'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}
