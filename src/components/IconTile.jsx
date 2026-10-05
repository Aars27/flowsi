import React from 'react'

export default function IconTile({ icon: Icon, gradient = 'from-violet-500 to-violet-600', className = '' }) {
  return (
    <div className={`icon-tile bg-gradient-to-br ${gradient} shadow-lg ${className}`}>
      <Icon className="w-6 h-6 text-white relative z-10" />
    </div>
  )
}
