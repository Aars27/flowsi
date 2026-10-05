import React, { useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '', maxTilt = 15, ...props }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Spring physics for buttery smooth 60fps tilt
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt])
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.04, z: 20 }}
      transition={{ duration: 0.2 }}
      className={`relative cursor-pointer transition-shadow duration-300 ${className}`}
      {...props}
    >
      <div style={{ transform: 'translateZ(25px)' }} className="relative z-10">
        {children}
      </div>

      {/* Dynamic glossy specular reflection */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)',
          }}
        />
      )}
    </motion.div>
  )
}
