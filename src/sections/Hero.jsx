import React from 'react'
import { motion } from 'framer-motion'
import { Play, Star, Bot, Zap, BarChart3, Sparkles, CheckCircle2, FileText } from 'lucide-react'
import Button from '../components/Button'
import NeuralCanvas from '../components/NeuralCanvas'
import TiltCard from '../components/TiltCard'

const floatingCards = [
  {
    icon: Bot,
    label: 'AI Agents',
    subtext: '24/7 autonomous booking & support',
    gradient: 'from-violet-500 to-indigo-600',
    top: '8%',
    right: '12%',
    badge: 'Active 24/7',
  },
  {
    icon: Zap,
    label: 'Workflows',
    subtext: 'WhatsApp & CRM automations',
    gradient: 'from-pink-500 to-rose-600',
    top: '40%',
    right: '2%',
    badge: '10x Faster',
  },
  {
    icon: BarChart3,
    label: 'Growth Engine',
    subtext: 'Smart review funnels & SEO',
    gradient: 'from-blue-500 to-violet-600',
    top: '70%',
    right: '18%',
    badge: '+240% ROI',
  },
]

const avatars = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=2',
  'https://i.pravatar.cc/40?img=3',
  'https://i.pravatar.cc/40?img=4',
]

export default function Hero({ onOpenQuote }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark pt-24 pb-20">
      {/* Animated Mesh Gradient Background (violet, indigo, magenta) */}
      <div className="mesh-gradient-container">
        <div className="mesh-blob-1" />
        <div className="mesh-blob-2" />
        <div className="mesh-blob-3" />
      </div>

      {/* Neural Network interactive particle canvas */}
      <NeuralCanvas />

      {/* Futuristic Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/5 text-violet-300 border border-violet-500/30 backdrop-blur-xl mb-6 shadow-lg shadow-violet-500/10">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                Next-Gen AI Automation Agency
              </span>
            </motion.div>

            {/* Headline with shimmer gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Simplify.{' '}
              <span className="gradient-text-shimmer">Automate.</span>
              <br />
              Scale Your{' '}
              <span className="gradient-text-pink-shimmer">Business.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              We engineer bespoke AI automation systems, conversational booking bots, and review growth engines for Bristol and UK enterprises — cutting manual tasks and scaling revenue 24/7.
            </motion.p>

            {/* CTAs with glowing border on primary CTA + Get a Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" href="/contact" glowing>
                Book a Free Call
              </Button>

              <button
                onClick={onOpenQuote}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-xl shadow-violet-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-violet-200" />
                Get a Free Quote
              </button>

              <Button variant="ghost" size="lg" href="/services">
                <Play className="w-4 h-4 fill-current text-violet-400" />
                Explore Services
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2.5">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy client"
                    width="40"
                    height="40"
                    className="w-10 h-10 rounded-full border-2 border-dark object-cover shadow-md"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1.5">5.0</span>
                </div>
                <span className="text-xs text-gray-400 mt-0.5">
                  Trusted by <strong className="text-white font-semibold">100+</strong> UK businesses
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right 3D Tilt floating cards (5 cols) */}
          <div className="lg:col-span-5 hidden lg:block relative h-[520px]">
            {floatingCards.map((card, i) => (
              <div
                key={card.label}
                className="absolute w-[290px]"
                style={{
                  top: card.top,
                  right: card.right,
                  zIndex: 3 - i,
                }}
              >
                <TiltCard maxTilt={18}>
                  <div className="glass-card-dark rounded-2xl p-5 border border-white/10 hover:border-violet-400/40 transition-all duration-300 shadow-2xl">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}>
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-violet-300 border border-white/10">
                        {card.badge}
                      </span>
                    </div>
                    <p className="text-white font-bold text-base">{card.label}</p>
                    <p className="text-gray-400 text-xs mt-1">{card.subtext}</p>
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Online & Automated
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/90 via-white/30 to-transparent pointer-events-none" />
    </section>
  )
}
