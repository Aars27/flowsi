import React from 'react'
import { ArrowUp, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../components/BrandIcons'
import { CONTACT_CONFIG } from '../config/contact'
import { servicesData } from '../data/servicesData'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Get a Quote', href: '/quote' },
  { label: 'Contact', href: '/contact' },
]

const socials = [
  { icon: InstagramIcon, href: 'https://instagram.com/flowsi', label: 'Instagram' },
  { icon: FacebookIcon, href: 'https://facebook.com/flowsi', label: 'Facebook' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/company/flowsi', label: 'LinkedIn' },
  { icon: TwitterIcon, href: 'https://twitter.com/flowsi', label: 'Twitter' },
]

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-dark pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32">
                <defs>
                  <linearGradient id="footer-logo" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7C3AED"/>
                    <stop offset="100%" stopColor="#A78BFA"/>
                  </linearGradient>
                </defs>
                <path d="M4 12 Q12 4 20 12 Q16 18 12 14 Q8 10 4 16 Q8 22 12 18 Q16 14 24 22 Q28 26 28 20" stroke="url(#footer-logo)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </svg>
              <span className="text-lg font-bold text-white">Flowsi</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-xs">
              AI Automation & Digital Services Agency based in Bristol, UK.
              Helping local businesses simplify, automate, and scale.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-400/30 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.label === 'Get a Quote' ? (
                    <button
                      onClick={onOpenQuote}
                      type="button"
                      className="text-sm text-violet-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                    >
                      <FileText className="w-3.5 h-3.5 text-violet-400" />
                      Get a Free Quote
                    </button>
                  ) : (
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-violet-400 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-violet-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-violet-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-400 hover:text-violet-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-sm text-gray-400 hover:text-violet-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Flowsi. All rights reserved. {CONTACT_CONFIG.ADDRESS}.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-400/30 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
