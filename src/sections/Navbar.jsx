import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, Sparkles } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Button from '../components/Button'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/' + href)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'nav-blur shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <svg width="32" height="32" viewBox="0 0 32 32" className="transition-transform group-hover:scale-110">
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7C3AED"/>
                  <stop offset="100%" stopColor="#A78BFA"/>
                </linearGradient>
              </defs>
              <path d="M4 12 Q12 4 20 12 Q16 18 12 14 Q8 10 4 16 Q8 22 12 18 Q16 14 24 22 Q28 26 28 20" stroke="url(#logo-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="text-xl font-bold text-white tracking-tight">Flowsi</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs: Get a Quote + Get Started */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-violet-400" />
              Get a Quote
            </button>

            <Button variant="violet" size="sm" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2.5 rounded-xl bg-white/5 border border-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-blur border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href)
                    setMobileOpen(false)
                  }}
                  className="block text-gray-200 hover:text-white font-medium text-base py-2 min-h-[44px] flex items-center transition-colors border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    onOpenQuote()
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm min-h-[44px] shadow-lg shadow-violet-900/30 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  Get a Free Quote
                </button>

                <Button
                  variant="primary"
                  size="sm"
                  href="#contact"
                  className="w-full min-h-[44px]"
                  onClick={(e) => {
                    handleNavClick(e, '#contact')
                    setMobileOpen(false)
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
