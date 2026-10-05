import React from 'react'
import { motion } from 'framer-motion'
import {
  WhatsAppIcon,
  GmailIcon,
  InstagramIcon,
  FacebookIcon,
  GoogleIcon,
  OpenAIIcon,
} from '../components/BrandIcons'

const tools = [
  { name: 'WhatsApp', icon: WhatsAppIcon, color: '#25D366' },
  { name: 'Gmail', icon: GmailIcon, color: '#EA4335' },
  { name: 'Instagram', icon: InstagramIcon, color: '#E1306C' },
  { name: 'Facebook', icon: FacebookIcon, color: '#1877F2' },
  { name: 'Google', icon: GoogleIcon, color: '#4285F4' },
  { name: 'ChatGPT', icon: OpenAIIcon, color: '#10A37F' },
  { name: 'WhatsApp', icon: WhatsAppIcon, color: '#25D366' },
  { name: 'Gmail', icon: GmailIcon, color: '#EA4335' },
  { name: 'Instagram', icon: InstagramIcon, color: '#E1306C' },
  { name: 'Facebook', icon: FacebookIcon, color: '#1877F2' },
  { name: 'Google', icon: GoogleIcon, color: '#4285F4' },
  { name: 'ChatGPT', icon: OpenAIIcon, color: '#10A37F' },
]

export default function LogoMarquee() {
  return (
    <section className="bg-white py-10 overflow-hidden border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 uppercase tracking-widest font-semibold"
        >
          We automate the tools you already use
        </motion.p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee">
          {tools.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex items-center gap-3 mx-8 shrink-0"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${tool.color}15` }}
              >
                <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
              </div>
              <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
