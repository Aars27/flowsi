import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Lightbulb, Rocket, HeartHandshake, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SpotlightCard from '../components/SpotlightCard'

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Discovery Call',
    desc: 'We unpack your current bottlenecks, tools, and growth targets during a 30-minute consultation. No technical jargon.',
    gradient: 'from-violet-600 to-indigo-600',
    highlight: 'Free & Zero Obligation',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Architecture & Strategy',
    desc: 'We map out the exact AI workflow, conversational scripts, integrations, and ROI roadmap for your business.',
    gradient: 'from-blue-500 to-violet-600',
    highlight: 'Tailored Blueprint',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Rapid Build & Deploy',
    desc: 'Our engineering team configures bots, connects APIs, tests edge cases, and launches your system in days.',
    gradient: 'from-pink-500 to-rose-600',
    highlight: 'Live in 7–14 Days',
  },
  {
    icon: HeartHandshake,
    step: '04',
    title: 'Continuous Optimisation',
    desc: 'We monitor response quality, upgrade LLM prompts, add features, and scale your automations as you expand.',
    gradient: 'from-emerald-400 to-teal-600',
    highlight: 'Dedicated UK Support',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-violet-50/40 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Seamless Process"
          title={
            <>
              From Concept to <span className="gradient-text-shimmer">Autonomous Scale</span>
            </>
          }
          subtitle="Our battle-tested 4-step framework ensures fast deployment with zero disruption to your daily operations."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, i) => (
            <motion.div key={step.step} variants={itemVariants} className="relative">
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-violet-400/40 via-pink-400/30 to-transparent z-0 pointer-events-none" />
              )}

              <SpotlightCard
                spotlightColor="rgba(139, 92, 246, 0.2)"
                className="p-6 h-full flex flex-col border border-violet-100/80 shadow-lg"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg relative`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-extrabold text-xs flex items-center justify-center border border-violet-200">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{step.desc}</p>

                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-violet-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-500" />
                  {step.highlight}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
