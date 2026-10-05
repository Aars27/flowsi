import React from 'react'

/**
 * Reusable layout container used by every section, navbar and footer.
 * Provides consistent max-width, horizontal padding, and auto centering.
 */
export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
