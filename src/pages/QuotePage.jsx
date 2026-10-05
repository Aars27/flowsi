import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  Star,
  ArrowLeft,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config/contact'

export default function QuotePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Get a Free Quote — Flowsi | AI Automation Agency Bristol"
  }, [])

  return (
    <div className="min-h-screen bg-violet-50/30 text-dark flex flex-col">
      {/* Header Bar */}
      <header className="bg-dark border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <svg width="30" height="30" viewBox="0 0 32 32" className="transition-transform group-hover:scale-110">
              <defs>
                <linearGradient id="quote-logo-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
              <path
                d="M4 12 Q12 4 20 12 Q16 18 12 14 Q8 10 4 16 Q8 22 12 18 Q16 14 24 22 Q28 26 28 20"
                stroke="url(#quote-logo-grad)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xl font-bold text-white tracking-tight">Flowsi</span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Dark gradient header banner */}
      <section className="bg-gradient-to-b from-dark via-dark-800 to-dark-700 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="mesh-gradient-container opacity-40 pointer-events-none">
          <div className="mesh-blob-1" />
          <div className="mesh-blob-2" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-violet-300 border border-white/15 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              Tailored UK Business Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Tell us what you need, get a <span className="gradient-text-shimmer">free quote</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              No pushy sales reps. Simply tell us about your business, and we'll engineer a clear pricing proposal within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area: 2 Columns on Desktop */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 -mt-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-violet-100/80">
            <div className="mb-8 pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-extrabold text-dark tracking-tight">
                Project Requirements Form
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Fill in the details below to receive an itemised quote and project scope.
              </p>
            </div>

            <QuoteForm />
          </div>

          {/* Right Column: Trust Badges & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Why choose Flowsi card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-6">
              <h3 className="text-xl font-bold text-dark flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-violet-600" />
                Why Partner With Flowsi?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark">24-Hour Proposal Turnaround</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      We analyse your workflow and respond with an exact architecture and budget within one business day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark">Bristol, UK Local Team</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Direct access to UK-based AI engineers and digital specialists who understand local markets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark">No Vendor Lock-In</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Transparent monthly memberships or one-time delivery with full system ownership.
                    </p>
                  </div>
                </div>
              </div>

              {/* Star rating social proof */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-gray-600 font-semibold">
                  4.9/5 from 100+ UK businesses
                </span>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-gradient-to-br from-dark to-violet-950 text-white rounded-3xl p-8 shadow-xl border border-white/10 space-y-5">
              <h3 className="text-lg font-bold text-white">Need an immediate answer?</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Connect directly with our team right now via WhatsApp or phone.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppUrl("Hi Flowsi, I would like to speak to an AI automation specialist.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-5 py-3 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1EBE5D] transition-colors shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Instant WhatsApp Chat
                </a>

                <a
                  href={`tel:${CONTACT_CONFIG.PHONE_RAW}`}
                  className="flex items-center gap-3 w-full px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-colors"
                >
                  <Phone className="w-5 h-5 text-violet-400" />
                  Call {CONTACT_CONFIG.PHONE}
                </a>

                <a
                  href={`mailto:${CONTACT_CONFIG.EMAIL}`}
                  className="flex items-center gap-3 w-full px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-sm transition-colors"
                >
                  <Mail className="w-5 h-5 text-violet-400" />
                  {CONTACT_CONFIG.EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-dark text-gray-400 py-8 border-t border-white/10 text-center text-xs mt-auto">
        <p>© {new Date().getFullYear()} Flowsi. All rights reserved. Bristol, UK.</p>
      </footer>
    </div>
  )
}
