import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = true,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} mb-12 lg:mb-16 ${className}`}
    >
      {badge && (
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-5 ${
          light
            ? 'bg-violet-100 text-violet-700'
            : 'bg-white/10 text-violet-300 border border-white/10'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight ${
        light ? 'text-dark' : 'text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${
          light ? 'text-gray-500' : 'text-gray-400'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
