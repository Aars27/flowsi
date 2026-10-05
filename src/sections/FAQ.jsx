import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const faqs = [
  {
    q: 'What types of businesses does Flowsi work with?',
    a: 'We specialise in local and UK-based businesses — salons, restaurants, dentists, clinics, travel agents, party planners, and local shops. However, our AI solutions work for any service-based business looking to automate and grow.',
  },
  {
    q: 'How quickly can you set up my automations?',
    a: 'Most projects are up and running within 1–2 weeks. Simpler setups like Google Reviews QR funnels can be ready in as little as 48 hours. We move fast without cutting corners.',
  },
  {
    q: 'Do I need any technical knowledge?',
    a: 'Not at all! We handle everything from setup to ongoing maintenance. You\'ll get a simple dashboard to see results, and our team is always available if you need help.',
  },
  {
    q: 'What\'s the difference between monthly and one-time pricing?',
    a: 'Monthly plans include ongoing support, maintenance, and continuous optimisation. One-time pricing covers the initial build and setup, with optional add-on support packages. Most clients prefer monthly for the peace of mind.',
  },
  {
    q: 'Can I cancel my plan at any time?',
    a: 'Yes — there are no long-term contracts. We believe in earning your trust every month. You can cancel or adjust your plan with 30 days\' notice.',
  },
  {
    q: 'What is LLM SEO?',
    a: 'LLM SEO is optimisation for AI search engines like ChatGPT, Gemini, and Perplexity. As more people use AI to find businesses, we ensure your brand appears in these AI-generated answers alongside traditional Google results.',
  },
  {
    q: 'Do you offer a free consultation?',
    a: 'Absolutely! We offer a free 30-minute discovery call where we learn about your business and suggest the best solutions. No hard sell, no obligation — just helpful advice.',
  },
]

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-violet-200"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-dark text-sm sm:text-base pr-4">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-violet-500 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title={
            <>
              Got <span className="gradient-text">Questions?</span>
            </>
          }
          subtitle="Here are the most common questions we get from businesses just like yours."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
