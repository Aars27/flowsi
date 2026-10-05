import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  FileText,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config/contact'
import { sendQuoteEmail } from '../services/emailService'

const serviceOptions = [
  'Google Reviews QR',
  'AI Automation & Calling Bots',
  'Booking Agents (24/7)',
  'Video Ads & Promo Videos',
  'Website Development',
  'SEO & LLM SEO',
  'Marketing Automation',
  'Personal Assistance',
  'Other Custom Project',
]

export default function Contact({ onOpenQuote }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    service: '',
    message: '',
    website_bot_trap: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formState.name.trim()) newErrors.name = 'Name is required'
    if (!formState.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Enter a valid email'
    if (!formState.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setIsSubmitting(true)

    try {
      await sendQuoteEmail({
        ...formState,
        services: [formState.service || 'General Enquiry'],
        consent: true,
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field) => (e) => {
    setFormState({ ...formState, [field]: e.target.value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  const inputClasses = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white outline-none transition-colors ${
      errors[field]
        ? 'border-red-300 focus:border-red-400'
        : 'border-gray-200 focus:border-violet-400'
    }`

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="absolute inset-0 dot-pattern-light opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title={
            <>
              Let's <span className="gradient-text">Talk Business</span>
            </>
          }
          subtitle="Ready to get started? Fill out the quick message form below or request a complete quotation."
        />

        {/* Quick Quote banner strip */}
        <div className="mb-10 bg-gradient-to-r from-violet-50 via-pink-50 to-violet-50 rounded-2xl p-4 sm:p-5 border border-violet-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-dark">Need a formal quotation or multi-service proposal?</p>
              <p className="text-xs text-gray-500">Select multiple services, timelines, and budgets in our full quote builder.</p>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 text-white font-bold text-xs hover:bg-violet-700 transition-colors shadow-md shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            Open Full Quote Builder
          </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-3xl p-10 text-center border border-violet-100"
              >
                <CheckCircle2 className="w-16 h-16 text-violet-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-dark mb-2">Message Sent!</h3>
                <p className="text-gray-500">
                  Thanks for reaching out. Our Bristol team will get back to you within 2 hours.
                  In the meantime, feel free to WhatsApp us for a faster reply!
                </p>
                <Button
                  variant="violet"
                  size="md"
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(false)
                    setFormState({ name: '', email: '', phone: '', businessType: '', service: '', message: '', website_bot_trap: '' })
                  }}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-dark mb-1.5">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      value={formState.name}
                      onChange={handleChange('name')}
                      placeholder="John Smith"
                      className={inputClasses('name')}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-dark mb-1.5">Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      value={formState.email}
                      onChange={handleChange('email')}
                      placeholder="john@business.co.uk"
                      className={inputClasses('email')}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-dark mb-1.5">Phone</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      value={formState.phone}
                      onChange={handleChange('phone')}
                      placeholder="+44 7700 900000"
                      className={inputClasses('phone')}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-business" className="block text-sm font-semibold text-dark mb-1.5">Business Type</label>
                    <input
                      id="contact-business"
                      type="text"
                      autoComplete="organization"
                      value={formState.businessType}
                      onChange={handleChange('businessType')}
                      placeholder="e.g. Salon, Restaurant, Dentist"
                      className={inputClasses('businessType')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-sm font-semibold text-dark mb-1.5">Service Interested In</label>
                  <select
                    id="contact-service"
                    value={formState.service}
                    onChange={handleChange('service')}
                    className={`${inputClasses('service')} text-gray-600`}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-dark mb-1.5">Message *</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange('message')}
                    placeholder="Tell us about your business and what you're looking for..."
                    className={`${inputClasses('message')} resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <Button variant="violet" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-3xl p-6 space-y-5 border border-violet-100">
              <h3 className="font-bold text-dark text-lg">Contact Details</h3>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">Location</p>
                  <p className="text-sm text-gray-500">{CONTACT_CONFIG.ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">Email</p>
                  <a href={`mailto:${CONTACT_CONFIG.EMAIL}`} className="text-sm text-gray-500 hover:text-violet-600 transition-colors">
                    {CONTACT_CONFIG.EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">Phone</p>
                  <a href={`tel:${CONTACT_CONFIG.PHONE_RAW}`} className="text-sm text-gray-500 hover:text-violet-600 transition-colors">
                    {CONTACT_CONFIG.PHONE}
                  </a>
                </div>
              </div>

              <a
                href={getWhatsAppUrl("Hi Flowsi, I would like to chat about AI automation and digital services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1EBE5D] transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-3xl overflow-hidden h-48 relative border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-600">{CONTACT_CONFIG.ADDRESS}</p>
                  <p className="text-xs text-gray-400">{CONTACT_CONFIG.POSTCODE} • Serving Bristol & UK Nationwide</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-blue-100/50 opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
