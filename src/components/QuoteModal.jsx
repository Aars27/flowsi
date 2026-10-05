import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, MessageCircle } from 'lucide-react'
import QuoteForm from './QuoteForm'
import { getWhatsAppUrl } from '../config/contact'

export default function QuoteModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card / Drawer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-quote-title"
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-violet-100 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
          >
            {/* Header band with dark gradient */}
            <div className="bg-gradient-to-r from-dark via-violet-950 to-dark p-6 sm:p-8 text-white relative shrink-0">
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-violet-300 border border-white/10 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                Instant Proposal
              </div>
              <h2 id="modal-quote-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Tell us what you need, get a <span className="gradient-text-shimmer">free quote</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-lg">
                Fill in your details below and our Bristol automation team will prepare a custom proposal and transparent pricing breakdown.
              </p>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              <QuoteForm isModal onClose={onClose} />
            </div>

            {/* Quick WhatsApp bar at footer */}
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 shrink-0">
              <span>Prefer an instant chat?</span>
              <a
                href={getWhatsAppUrl("Hi Flowsi, I would like to get a quick quote over WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#25D366] hover:underline flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat with an engineer
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
