import React from 'react'
import { motion } from 'framer-motion'
import {
  Scissors,
  UtensilsCrossed,
  Stethoscope,
  Plane,
  PartyPopper,
  Store,
  Heart,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const industries = [
  { icon: Scissors, label: 'Salons & Barbers', color: 'bg-pink-100 text-pink-600' },
  { icon: UtensilsCrossed, label: 'Restaurants & Cafés', color: 'bg-orange-100 text-orange-600' },
  { icon: Stethoscope, label: 'Dentists & Clinics', color: 'bg-blue-100 text-blue-600' },
  { icon: Heart, label: 'Health & Wellness', color: 'bg-red-100 text-red-600' },
  { icon: Plane, label: 'Travel Agents', color: 'bg-cyan-100 text-cyan-600' },
  { icon: PartyPopper, label: 'Party Planners', color: 'bg-violet-100 text-violet-600' },
  { icon: Store, label: 'Local Shops', color: 'bg-emerald-100 text-emerald-600' },
]

export default function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Industries We Serve"
          title={
            <>
              Built for <span className="gradient-text">Local Businesses</span> Like Yours
            </>
          }
          subtitle="Whether you run a salon, restaurant, dental practice, or travel agency — Flowsi's solutions are tailored to your industry."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-default`}
            >
              <div className={`w-10 h-10 rounded-xl ${ind.color} flex items-center justify-center`}>
                <ind.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-dark whitespace-nowrap">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
