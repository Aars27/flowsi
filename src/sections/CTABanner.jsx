import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, FileText } from 'lucide-react'
import Button from '../components/Button'

export default function CTABanner({ onOpenQuote }) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-dark via-violet-900 to-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-violet-300 text-xs font-semibold uppercase tracking-wide mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Limited Offer & Free Consultation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ready to{' '}
            <span className="gradient-text-pink-shimmer">Automate</span>
            <br />
            Your Business?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join 100+ Bristol and UK businesses already saving time and growing revenue with Flowsi.
            Request a bespoke quote today or book your discovery call.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-full bg-white text-dark hover:bg-violet-100 shadow-2xl shadow-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-violet-600" />
              Get a Free Quote
            </button>

            <Button variant="violet" size="lg" href="#contact">
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button variant="ghost" size="lg" href="#pricing">
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
