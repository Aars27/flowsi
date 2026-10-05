import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Bloom Hair Studio',
    location: 'Clifton, Bristol',
    avatar: 'https://i.pravatar.cc/60?img=5',
    text: 'Flowsi completely transformed how we handle bookings. Our AI agent books 80% of our appointments automatically — and our clients love the WhatsApp experience. We\'ve saved over 15 hours a week!',
    stars: 5,
  },
  {
    name: 'James Patel',
    role: 'Manager, Spice Kitchen',
    location: 'Harbourside, Bristol',
    avatar: 'https://i.pravatar.cc/60?img=8',
    text: 'The Google Reviews QR system was a game-changer. We went from 45 reviews to over 280 in just four months. Our bookings have doubled since our rating jumped to 4.8 stars.',
    stars: 5,
  },
  {
    name: 'Emma Clarke',
    role: 'Director, Bright Smile Dental',
    location: 'Redland, Bristol',
    avatar: 'https://i.pravatar.cc/60?img=9',
    text: 'We were sceptical about AI at first, but Flowsi made everything so easy. Our booking bot handles after-hours enquiries, and the marketing automation has brought in 30% more new patients.',
    stars: 5,
  },
  {
    name: 'Tom Richardson',
    role: 'Founder, Wander Travel Co.',
    location: 'Stokes Croft, Bristol',
    avatar: 'https://i.pravatar.cc/60?img=11',
    text: 'Working with Flowsi feels like having a full tech team. They built our website, set up our booking system, and now manage our SEO. Revenue is up 40% year on year.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="py-20 lg:py-28 bg-violet-50/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title={
            <>
              Loved by <span className="gradient-text">Bristol Businesses</span>
            </>
          }
          subtitle="Don't just take our word for it — hear from the businesses we've helped grow."
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100 relative"
            >
              <Quote className="w-10 h-10 text-violet-200 absolute top-6 right-8" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-violet-100"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-dark">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                  <p className="text-xs text-violet-500 font-medium">{t.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-base">"{t.text}"</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-violet-300 hover:bg-violet-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-violet-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-violet-300 hover:bg-violet-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
