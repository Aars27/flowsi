import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Users, Lightbulb, Shield } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const reasons = [
  { icon: Lightbulb, title: 'Smart AI Solutions', desc: 'Tailored automation that fits your unique workflow.' },
  { icon: Users, title: 'Bristol-Based Team', desc: 'Local experts who understand UK business needs.' },
  { icon: Shield, title: 'Ongoing Support', desc: 'We don\'t just build — we maintain and improve.' },
  { icon: CheckCircle2, title: 'Proven Results', desc: 'Over 100 businesses already trust Flowsi.' },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="absolute inset-0 dot-pattern-light opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <SectionHeading
              badge="About Flowsi"
              title={
                <>
                  Smart Solutions Designed to{' '}
                  <span className="gradient-text">Drive Your Success</span>
                </>
              }
              subtitle="Flowsi is a Bristol-based AI automation agency. We partner with local and UK businesses to streamline operations, boost revenue, and free up your time — so you can focus on what matters most."
              centered={false}
            />

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                    <r.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{r.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right "Why Flowsi?" block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-200/50 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://i.pravatar.cc/60?img=12"
                    alt="Flowsi team member"
                    className="w-14 h-14 rounded-full border-2 border-white shadow-lg object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-dark">Why Flowsi?</p>
                    <p className="text-sm text-gray-500">Your Growth Partner in Bristol</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "We built Flowsi because we saw local businesses struggling with outdated
                  processes. Our mission is simple: give every business access to the same
                  powerful AI tools that big companies use — but at a price that makes sense.
                  From automated bookings to smart review funnels, we handle the tech so you
                  can focus on your customers."
                </p>
                <div className="mt-6 flex items-center gap-6">
                  <div>
                    <p className="text-2xl font-bold gradient-text">100+</p>
                    <p className="text-xs text-gray-500">Businesses Served</p>
                  </div>
                  <div className="w-px h-10 bg-violet-200" />
                  <div>
                    <p className="text-2xl font-bold gradient-text">98%</p>
                    <p className="text-xs text-gray-500">Client Retention</p>
                  </div>
                  <div className="w-px h-10 bg-violet-200" />
                  <div>
                    <p className="text-2xl font-bold gradient-text">4.9★</p>
                    <p className="text-xs text-gray-500">Avg Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
