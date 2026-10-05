import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, Zap, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import SpotlightCard from '../components/SpotlightCard'

const plans = [
  {
    name: 'Starter',
    badge: 'Essential Setup',
    desc: 'Ideal for small local businesses taking their first step into automation.',
    monthlyPrice: 297,
    oneTimePrice: 997,
    popular: false,
    features: [
      'Smart Google Reviews QR Card + Funnel',
      'Standard WhatsApp Auto-Responder',
      'Single-Service AI Booking Bot',
      'High-Speed 3-Page Website',
      'Standard Email & Ticket Support',
      'Monthly Performance Analytics',
    ],
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    desc: 'For ambitious businesses ready to automate bookings and capture every lead.',
    monthlyPrice: 597,
    oneTimePrice: 2497,
    popular: true,
    features: [
      'Everything in Starter',
      'AI Inbound & Outbound Calling Bot',
      'Multi-Service 24/7 Booking Engine',
      'Instagram DM & Facebook Lead Funnels',
      'Google Local & LLM SEO Optimisation',
      'Direct Private Slack Support Channel',
      'Bi-Weekly Strategy & Refinement Calls',
      'Automated Review Booster Campaigns',
    ],
  },
  {
    name: 'Enterprise Scale',
    badge: 'Complete Autonomous Suite',
    desc: 'End-to-end bespoke AI engineering and dedicated virtual assistant team.',
    monthlyPrice: 997,
    oneTimePrice: 4997,
    popular: false,
    features: [
      'Everything in Growth',
      'Dedicated Hybrid AI Virtual Assistant',
      'Unlimited Automations & Webhooks',
      'Custom CRM & POS Deep Integrations',
      'Omnichannel Marketing Engine',
      'Dedicated Account Manager in Bristol',
      '24/7 Priority SLA Response',
      'Custom LLM Fine-Tuning on Your Brand',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern-light opacity-30 pointer-events-none" />

      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Transparent Investment"
          title={
            <>
              Predictable Pricing.{' '}
              <span className="gradient-text-shimmer">Maximum ROI.</span>
            </>
          }
          subtitle="Simple monthly memberships or one-time implementations. No surprise fees, no vendor lock-in."
        />

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-bold tracking-tight transition-colors ${isMonthly ? 'text-dark' : 'text-gray-400'}`}>
            Monthly Retainer
          </span>
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className="relative w-16 h-8 rounded-full bg-dark p-1 cursor-pointer transition-colors shadow-inner"
            aria-label="Toggle pricing frequency"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 shadow-md ${
                isMonthly ? 'ml-0' : 'ml-8'
              }`}
            />
          </button>
          <span className={`text-sm font-bold tracking-tight flex items-center gap-1.5 transition-colors ${!isMonthly ? 'text-dark' : 'text-gray-400'}`}>
            One-Time Setup
            <span className="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-700 border border-emerald-200">
              SAVE 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className="flex"
            >
              {plan.popular ? (
                <SpotlightCard
                  dark
                  spotlightColor="rgba(236, 72, 153, 0.25)"
                  className="w-full p-8 lg:p-9 flex flex-col justify-between border-2 border-violet-500/50 shadow-2xl relative md:scale-105 z-10"
                >
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-extrabold shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                      <Zap className="w-5 h-5 text-violet-400" />
                    </div>
                    <p className="text-xs text-violet-200 leading-relaxed min-h-[36px]">
                      {plan.desc}
                    </p>

                    <div className="my-6 py-4 border-y border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                          £{isMonthly ? plan.monthlyPrice : plan.oneTimePrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-violet-300 font-medium">
                          {isMonthly ? '/month + VAT' : ' one-time + VAT'}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-violet-500/30 flex items-center justify-center mt-0.5 shrink-0">
                            <Check className="w-3 h-3 text-violet-300" />
                          </div>
                          <span className="text-xs text-violet-100 font-medium leading-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="violet"
                    size="lg"
                    href="/contact"
                    className="w-full"
                    glowing
                  >
                    Claim Growth Plan
                  </Button>
                </SpotlightCard>
              ) : (
                <SpotlightCard
                  spotlightColor="rgba(139, 92, 246, 0.15)"
                  className="w-full p-8 lg:p-9 flex flex-col justify-between border border-gray-200 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-dark">{plan.name}</h3>
                      <ShieldCheck className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed min-h-[36px]">
                      {plan.desc}
                    </p>

                    <div className="my-6 py-4 border-y border-gray-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-dark tracking-tight">
                          £{isMonthly ? plan.monthlyPrice : plan.oneTimePrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                          {isMonthly ? '/month + VAT' : ' one-time + VAT'}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center mt-0.5 shrink-0">
                            <Check className="w-3 h-3 text-violet-600" />
                          </div>
                          <span className="text-xs text-gray-600 leading-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="dark"
                    size="md"
                    href="/contact"
                    className="w-full"
                  >
                    Select {plan.name}
                  </Button>
                </SpotlightCard>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
