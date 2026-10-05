import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  href,
  className = '',
  glowing = false,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap'

  const variants = {
    primary: 'bg-white text-dark hover:bg-violet-50 shadow-xl shadow-white/10 hover:shadow-violet-500/25',
    dark: 'bg-dark text-white hover:bg-dark-800 shadow-lg hover:shadow-violet-500/20 border border-white/10',
    ghost: 'border border-white/25 text-white hover:border-violet-400 hover:bg-white/10 backdrop-blur-md',
    'ghost-dark': 'border border-dark/20 text-dark hover:border-violet-500 hover:bg-violet-50',
    violet: 'bg-gradient-to-r from-violet-600 via-violet-500 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-xl shadow-violet-500/30',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const MotionComponent = href ? motion.a : motion.button

  if (glowing) {
    return (
      <div className="glowing-btn-wrapper">
        <MotionComponent
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
          onClick={onClick}
          href={href}
          {...props}
        >
          {children}
          {icon && <ArrowRight className="w-4 h-4" />}
        </MotionComponent>
      </div>
    )
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <MotionComponent
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
      href={href}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </MotionComponent>
  )
}
