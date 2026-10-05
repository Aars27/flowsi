import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2, Send, Sparkles, MessageCircle, PhoneCall } from 'lucide-react'
import { sendQuoteEmail } from '../services/emailService'
import { getWhatsAppUrl, CONTACT_CONFIG } from '../config/contact'
import Button from './Button'

export const AVAILABLE_SERVICES = [
  'Google Reviews via QR Code',
  'AI Automation (Calling Bot / WhatsApp / Email)',
  'AI Maintenance & New Features',
  'Website Development',
  'Personal Assistance',
  'Booking Agents',
  'SEO / SMO / LLM SEO',
  'Marketing Automation',
  'Video Ads & Promo Videos',
  'Other',
]

const BUSINESS_TYPES = [
  'Salon / Barbershop',
  'Restaurant / Café / Bar',
  'Dental Practice',
  'Health / Aesthetics Clinic',
  'Travel / Tourism Agency',
  'Party / Events Planning',
  'Retail / Local Shop',
  'Professional Services',
  'Other',
]

const BUDGET_OPTIONS = [
  'Under £500',
  '£500 to £1,000',
  '£1,000 to £3,000',
  '£3,000+',
  'Not sure yet',
]

const TIMELINE_OPTIONS = [
  'ASAP (Immediate start)',
  'Within 1 month',
  '1 to 3 months',
  'Just exploring options',
]

export default function QuoteForm({ isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    services: [],
    businessType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'Email',
    consent: false,
    website_bot_trap: '', // Honeypot field
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service)
      const updated = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
      return { ...prev, services: updated }
    })
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid UK/international phone number'
    }
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please briefly describe your requirement'
    }
    if (!formData.consent) {
      newErrors.consent = 'You must agree to our privacy policy to proceed'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setLoading(true)

    try {
      await sendQuoteEmail(formData)
      setSubmitted(true)
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong while submitting. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const inputClasses = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white/90 outline-none transition-all duration-200 focus:bg-white ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
        : 'border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200'
    }`

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-violet-100 shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner"
        >
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </motion.div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight mb-3">
          Quotation Request Received!
        </h3>
        <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
          Thanks for reaching out, <strong className="text-dark font-semibold">{formData.name}</strong>. Our Bristol team has received your details and will prepare a tailored proposal within 24 hours.
        </p>

        <div className="bg-violet-50 rounded-2xl p-5 max-w-md mx-auto mb-8 text-left border border-violet-100">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-700 mb-2">Request Summary</p>
          <p className="text-sm text-gray-700"><strong>Services:</strong> {formData.services.join(', ')}</p>
          <p className="text-sm text-gray-700"><strong>Preferred Contact:</strong> {formData.preferredContact}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(`Hi Flowsi, I just submitted a quote request for ${formData.services.join(', ')}. Looking forward to speaking!`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1EBE5D] transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Fast-Track on WhatsApp
          </a>

          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({
                name: '',
                businessName: '',
                email: '',
                phone: '',
                services: [],
                businessType: '',
                budget: '',
                timeline: '',
                message: '',
                preferredContact: 'Email',
                consent: false,
                website_bot_trap: '',
              })
              if (onClose) onClose()
            }}
            className="px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            {isModal ? 'Close Window' : 'Submit Another Request'}
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot hidden input */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website_bot_trap"
          tabIndex="-1"
          autoComplete="off"
          value={formData.website_bot_trap}
          onChange={handleChange('website_bot_trap')}
        />
      </div>

      {submitError && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
          <div className="flex-1">
            <p className="font-semibold">Submission failed</p>
            <p className="text-xs text-red-600 mt-0.5">{submitError}</p>
          </div>
          <button
            type="button"
            onClick={() => setSubmitError(null)}
            className="text-xs font-bold text-red-800 underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Row 1: Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-name" className="block text-sm font-semibold text-dark mb-1.5">
            Full Name <span className="text-violet-600">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Liam Taylor"
            value={formData.name}
            onChange={handleChange('name')}
            className={inputClasses('name')}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="quote-business" className="block text-sm font-semibold text-dark mb-1.5">
            Business Name
          </label>
          <input
            id="quote-business"
            type="text"
            autoComplete="organization"
            placeholder="e.g. Clifton Dental Studio"
            value={formData.businessName}
            onChange={handleChange('businessName')}
            className={inputClasses('businessName')}
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-email" className="block text-sm font-semibold text-dark mb-1.5">
            Email Address <span className="text-violet-600">*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            autoComplete="email"
            placeholder="liam@business.co.uk"
            value={formData.email}
            onChange={handleChange('email')}
            className={inputClasses('email')}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="quote-phone" className="block text-sm font-semibold text-dark mb-1.5">
            Phone Number <span className="text-violet-600">*</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+44 7700 900123"
            value={formData.phone}
            onChange={handleChange('phone')}
            className={inputClasses('phone')}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
        </div>
      </div>

      {/* Services Multi-Select Chips */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-semibold text-dark">
            Services Needed <span className="text-violet-600">*</span>
          </label>
          <span className="text-xs text-gray-500">Select all that apply</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {AVAILABLE_SERVICES.map((service) => {
            const isSelected = formData.services.includes(service)
            return (
              <button
                type="button"
                key={service}
                onClick={() => toggleService(service)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer text-left border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-500/20'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-violet-300 hover:bg-violet-50/50'
                }`}
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border text-[9px] ${
                    isSelected ? 'bg-white text-violet-700 border-white' : 'border-gray-400'
                  }`}
                >
                  {isSelected ? '✓' : ''}
                </span>
                {service}
              </button>
            )
          })}
        </div>
        {errors.services && (
          <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.services}</p>
        )}
      </div>

      {/* Row 3: Business Type & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-bus-type" className="block text-sm font-semibold text-dark mb-1.5">
            Business Type
          </label>
          <select
            id="quote-bus-type"
            value={formData.businessType}
            onChange={handleChange('businessType')}
            className={`${inputClasses('businessType')} text-gray-700`}
          >
            <option value="">Select industry / type...</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quote-budget" className="block text-sm font-semibold text-dark mb-1.5">
            Approximate Budget (GBP)
          </label>
          <select
            id="quote-budget"
            value={formData.budget}
            onChange={handleChange('budget')}
            className={`${inputClasses('budget')} text-gray-700`}
          >
            <option value="">Select budget range...</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Timeline & Preferred Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-timeline" className="block text-sm font-semibold text-dark mb-1.5">
            Desired Timeline
          </label>
          <select
            id="quote-timeline"
            value={formData.timeline}
            onChange={handleChange('timeline')}
            className={`${inputClasses('timeline')} text-gray-700`}
          >
            <option value="">Select timeline...</option>
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">
            Preferred Contact Method
          </label>
          <div className="grid grid-cols-3 gap-2">
            {['Email', 'Phone call', 'WhatsApp'].map((method) => {
              const isSelected = formData.preferredContact === method
              return (
                <button
                  type="button"
                  key={method}
                  onClick={() => setFormData({ ...formData, preferredContact: method })}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                    isSelected
                      ? 'bg-dark text-white border-dark shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {method}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Requirement Description */}
      <div>
        <label htmlFor="quote-message" className="block text-sm font-semibold text-dark mb-1.5">
          Describe Your Requirement <span className="text-violet-600">*</span>
        </label>
        <textarea
          id="quote-message"
          rows={isModal ? 3 : 4}
          placeholder="Tell us what you'd like to achieve (e.g., 'We need an automated WhatsApp booking bot for our hair salon and a new promo video')..."
          value={formData.message}
          onChange={handleChange('message')}
          className={`${inputClasses('message')} resize-none`}
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 pt-1">
        <input
          id="quote-consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange('consent')}
          className="w-4 h-4 mt-1 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer"
        />
        <label htmlFor="quote-consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
          I consent to Flowsi contacting me regarding this quotation request in accordance with the UK GDPR privacy policy.
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-500 -mt-3 font-medium">{errors.consent}</p>
      )}

      {/* Submit Button with Loading State */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <Button
          variant="violet"
          size="lg"
          className="w-full sm:w-auto min-w-[220px]"
          disabled={loading}
          glowing
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing Quote...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Request Free Quote
            </>
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center sm:text-right">
          🔒 No commitment • 100% Free Consultation
        </p>
      </div>
    </form>
  )
}
