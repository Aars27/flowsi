import React from 'react'
import { motion } from 'framer-motion'

export default function PageHeader({ title, description, breadcrumbs }) {
  return (
    <section className="pt-32 pb-16 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {breadcrumbs && (
            <p className="text-violet-400 text-sm font-semibold tracking-wide uppercase mb-4">
              {breadcrumbs}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
