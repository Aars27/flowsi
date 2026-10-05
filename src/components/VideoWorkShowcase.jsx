import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Clapperboard, Sparkles, Volume2 } from 'lucide-react'

const videoSamples = [
  {
    id: 1,
    title: 'High-Converting TikTok Ad',
    category: 'E-Commerce / Retail',
    duration: '0:30',
    aspectRatio: '9/16',
    gradient: 'from-purple-900 via-indigo-950 to-dark',
    accentColor: '#EC4899',
    tag: 'TikTok & Reels',
  },
  {
    id: 2,
    title: 'Salon Transformation Reel',
    category: 'Bristol Hair Studio',
    duration: '0:45',
    aspectRatio: '9/16',
    gradient: 'from-violet-900 via-purple-950 to-dark',
    accentColor: '#8B5CF6',
    tag: 'Instagram Promo',
  },
  {
    id: 3,
    title: 'Dental Clinic Explainer',
    category: 'Healthcare & Aesthetics',
    duration: '0:60',
    aspectRatio: '9/16',
    gradient: 'from-blue-950 via-indigo-900 to-dark',
    accentColor: '#3B82F6',
    tag: 'Service Explainer',
  },
  {
    id: 4,
    title: 'Restaurant Experience Ad',
    category: 'Bristol Harbourside',
    duration: '0:35',
    aspectRatio: '9/16',
    gradient: 'from-rose-950 via-pink-900 to-dark',
    accentColor: '#F43F5E',
    tag: 'Viral Short-Form',
  },
]

export default function VideoWorkShowcase({ onOpenQuote }) {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <div className="mt-12 pt-12 border-t border-gray-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700 mb-2">
            <Sparkles className="w-3 h-3 text-pink-600" />
            Showcase Strip
          </span>
          <h4 className="text-2xl font-extrabold text-dark tracking-tight">
            Our Video Work & Short-Form Ads
          </h4>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Dynamic vertical video samples produced for UK brands across TikTok, Reels, and YouTube Shorts.
          </p>
        </div>

        <button
          onClick={onOpenQuote}
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark text-white text-xs font-bold hover:bg-violet-900 transition-colors shadow-md cursor-pointer"
        >
          <Clapperboard className="w-4 h-4 text-pink-400" />
          Request Video Production
        </button>
      </div>

      {/* 4 Vertical Video Thumbnails Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {videoSamples.map((sample) => (
          <motion.div
            key={sample.id}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-dark cursor-pointer aspect-[9/16]"
            onClick={onOpenQuote}
          >
            {/* Background Gradient & Graphic Simulation */}
            <div className={`absolute inset-0 bg-gradient-to-b ${sample.gradient} opacity-90 transition-transform duration-500 group-hover:scale-105`} />

            {/* Futuristic Grid / Scanline layer */}
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

            {/* Glowing Accent Ring */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
              style={{ backgroundColor: sample.accentColor }}
            />

            {/* Top Tag & Duration */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/10">
                {sample.tag}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-gray-300">
                {sample.duration}
              </span>
            </div>

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-dark">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
            </div>

            {/* Bottom Details */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark via-dark/80 to-transparent z-10">
              <p className="text-white font-bold text-sm leading-tight drop-shadow-sm group-hover:text-violet-300 transition-colors">
                {sample.title}
              </p>
              <p className="text-[11px] text-gray-400 mt-1">{sample.category}</p>

              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-300">
                <span className="flex items-center gap-1 text-pink-400 font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Scripted & Edited
                </span>
                <span className="text-gray-400">Click to enquire</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
