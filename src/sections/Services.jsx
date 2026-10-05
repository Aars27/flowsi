import React from 'react'
import { motion } from 'framer-motion'
import {
  Star,
  Bot,
  Wrench,
  Globe,
  UserCheck,
  CalendarCheck,
  Search,
  Mail,
  Clapperboard,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle,
  TrendingUp,
  Video,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import IconTile from '../components/IconTile'
import SpotlightCard from '../components/SpotlightCard'
import VideoWorkShowcase from '../components/VideoWorkShowcase'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Services({ onOpenQuote, preview = false }) {
  // If preview is true, limit to the first 6 cards
  const showCount = preview ? 6 : 9;
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern-light opacity-40 pointer-events-none" />

      {/* Subtle ambient light orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Bespoke Capabilities"
          title={
            <>
              Intelligent Services.{' '}
              <span className="gradient-text-shimmer">Engineered to Scale.</span>
            </>
          }
          subtitle="Explore our full ecosystem of AI automation, conversational booking agents, custom web engineering, video production, and search supremacy."
        />

        {/* Bento Grid layout with 9 services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: LARGE FEATURED (Spans 2 cols on lg) - AI Automation */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <SpotlightCard
              spotlightColor="rgba(124, 58, 237, 0.22)"
              className="p-8 lg:p-10 border border-violet-100 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <IconTile
                    icon={Bot}
                    gradient="from-violet-600 via-violet-500 to-indigo-600"
                    className="w-14 h-14"
                  />
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700 mb-1">
                      <Sparkles className="w-3 h-3 text-violet-600" />
                      Core Solution
                    </span>
                    <h3 className="text-2xl font-extrabold text-dark tracking-tight">
                      Autonomous AI Calling & Workflows
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                    99.9% Uptime
                  </span>
                </div>
              </div>

              <p className="text-base text-gray-600 leading-relaxed max-w-2xl mb-6">
                Deploy conversational AI calling bots that sound natural, answer enquiries instantly, sync customer details to your CRM, and execute multi-step WhatsApp and email workflows automatically.
              </p>

              {/* Interactive micro-preview chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-violet-50/80 rounded-2xl p-3.5 border border-violet-100 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-violet-600 shrink-0" />
                  <span className="text-xs font-bold text-dark">Zero Missed Inbound Calls</span>
                </div>
                <div className="bg-violet-50/80 rounded-2xl p-3.5 border border-violet-100 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-violet-600 shrink-0" />
                  <span className="text-xs font-bold text-dark">Instant CRM Data Sync</span>
                </div>
                <div className="bg-violet-50/80 rounded-2xl p-3.5 border border-violet-100 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-violet-600 shrink-0" />
                  <span className="text-xs font-bold text-dark">10x Output per Staff</span>
                </div>
              </div>

              <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                <span className="text-xs text-gray-400 font-medium">Includes WhatsApp API + Webhooks</span>
                <button
                  onClick={onOpenQuote}
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 group transition-colors cursor-pointer"
                >
                  Configure Workflow
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: 1 Col - Google Reviews via QR Code */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.2)"
              className="p-8 border border-amber-100 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <IconTile
                  icon={Star}
                  gradient="from-amber-400 via-orange-400 to-amber-500"
                />
                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span className="text-xs font-bold text-amber-700">4.9★ Average</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-dark mb-2">Google Reviews via QR</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Turn in-person customers into 5-star Google reviews with custom NFC/QR tap cards, smart routing, and automated SMS review funnels.
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">+300% Reviews in 30d</span>
                <button
                  onClick={onOpenQuote}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 group cursor-pointer"
                >
                  Get QR System
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: 1 Col - 24/7 Booking Agents */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <SpotlightCard
              spotlightColor="rgba(99, 102, 241, 0.22)"
              className="p-8 border border-indigo-100 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <IconTile
                  icon={CalendarCheck}
                  gradient="from-indigo-500 via-violet-500 to-purple-600"
                />
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  24/7 Live
                </span>
              </div>

              <h3 className="text-xl font-bold text-dark mb-2">AI Booking Agents</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Intelligent agents that converse on WhatsApp, Instagram, and web chat to take appointments, check calendars, and collect upfront deposits.
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">Syncs with Google/Calendly</span>
                <button
                  onClick={onOpenQuote}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 group cursor-pointer"
                >
                  View Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: 1 Col - SEO, SMO & LLM SEO */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <SpotlightCard
              spotlightColor="rgba(236, 72, 153, 0.2)"
              className="p-8 border border-pink-100 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <IconTile
                  icon={Search}
                  gradient="from-pink-500 via-rose-500 to-violet-500"
                />
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
                  AI Ready
                </span>
              </div>

              <h3 className="text-xl font-bold text-dark mb-2">SEO, SMO & LLM SEO</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Dominate Google local search and become the recommended answer in ChatGPT, Gemini, and Perplexity when customers search for your services.
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">ChatGPT + Google Ranking</span>
                <button
                  onClick={onOpenQuote}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 group cursor-pointer"
                >
                  Audit Ranking
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 5: 1 Col - Modern Website Engineering */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.2)"
              className="p-8 border border-emerald-100 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <IconTile
                  icon={Globe}
                  gradient="from-emerald-400 via-teal-500 to-cyan-500"
                />
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  High Speed
                </span>
              </div>

              <h3 className="text-xl font-bold text-dark mb-2">Website Engineering</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Ultra-fast, conversion-focused websites engineered with React, high-fidelity UI design, mobile responsiveness, and SEO architecture.
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">Lighthouse 98+ Score</span>
                <button
                  onClick={onOpenQuote}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 group cursor-pointer"
                >
                  Build Site
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 6: 1 Col - Marketing Automation */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <SpotlightCard
              spotlightColor="rgba(192, 38, 211, 0.2)"
              className="p-8 border border-fuchsia-100 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <IconTile
                  icon={Mail}
                  gradient="from-fuchsia-500 via-pink-500 to-violet-600"
                />
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200">
                  Automated
                </span>
              </div>

              <h3 className="text-xl font-bold text-dark mb-2">Marketing Automation</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Personalised email flows, Instagram direct-message lead capture funnels, video promo integrations, and AI copy generation that turns followers into paying clients.
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">Meta & Klaviyo Integrated</span>
                <button
                  onClick={onOpenQuote}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 group cursor-pointer"
                >
                  Start Campaign
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          </motion.div>

          {showCount > 6 && (
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <SpotlightCard
                spotlightColor="rgba(244, 63, 94, 0.25)"
                className="p-8 border border-rose-100 shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconTile
                    icon={Clapperboard}
                    gradient="from-rose-500 via-pink-500 to-violet-600"
                  />
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-rose-500" />
                    New Service
                  </span>
                </div>

                <h3 className="text-xl font-bold text-dark mb-2">Video Ads & Promo Videos</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  Short-form reels, social media ads, promo videos and product/service explainer videos for Instagram, Facebook, YouTube and TikTok, with scripting, editing, subtitles and AI-assisted production.
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Reels, TikTok & Shorts</span>
                  <button
                    onClick={onOpenQuote}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 group cursor-pointer"
                  >
                    Request Video Ad
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          )}

          {/* Card 8 & 9: LARGE WIDE FEATURE (Spans 2 cols on lg) - Continuous AI Upgrades & Virtual Assistance */}
          {showCount > 6 && (
            <motion.div variants={itemVariants} className="lg:col-span-2">
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.22)"
              className="p-8 lg:p-10 border border-blue-100 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <IconTile
                      icon={Wrench}
                      gradient="from-blue-500 to-indigo-600"
                    />
                    <div>
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Continuous Care</span>
                      <h3 className="text-xl font-bold text-dark">AI Maintenance & Upgrades</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    We constantly monitor your bots, patch API updates, train models on new data, and add feature enhancements each month.
                  </p>
                  <ul className="text-xs text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Proactive 24/7 uptime monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Prompt tuning and accuracy refinement
                    </li>
                  </ul>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-gray-100 md:pl-8 pt-6 md:pt-0">
                  <div className="flex items-center gap-3 mb-4">
                    <IconTile
                      icon={UserCheck}
                      gradient="from-pink-500 to-rose-500"
                    />
                    <div>
                      <span className="text-xs font-semibold text-pink-600 uppercase tracking-wide">Hybrid Intelligence</span>
                      <h3 className="text-xl font-bold text-dark">Personal & Virtual Assistance</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    Combines generative AI productivity agents with UK-based assistants for calendar coordination, inbox triage, and admin tasks.
                  </p>
                  <div className="mt-auto pt-2 flex items-center justify-between">
                    <button
                      onClick={onOpenQuote}
                      type="button"
                      className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 group transition-colors cursor-pointer"
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
          )}
        </motion.div>

        {preview && (
          <div className="mt-12 text-center">
            <Button variant="dark" size="lg" href="/services">
              View All Services
            </Button>
          </div>
        )}

        {/* NEW "Our Video Work" Showcase Strip */}
        <VideoWorkShowcase onOpenQuote={onOpenQuote} />
      </div>
    </section>
  )
}
