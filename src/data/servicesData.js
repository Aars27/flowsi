import {
  Bot,
  Star,
  CalendarCheck,
  Search,
  Globe,
  Mail,
  Clapperboard,
  Wrench,
  UserCheck
} from 'lucide-react'

export const servicesData = [
  {
    slug: 'ai-automation',
    title: 'Autonomous AI Calling & Workflows',
    icon: Bot,
    gradient: 'from-violet-600 via-violet-500 to-indigo-600',
    description: 'Deploy conversational AI calling bots that sound natural, answer enquiries instantly, sync customer details to your CRM, and execute multi-step WhatsApp and email workflows automatically.',
    highlights: ['Zero Missed Inbound Calls', 'Instant CRM Data Sync', '10x Output per Staff'],
    features: [
      'Natural sounding voice AI',
      'Instant enquiry resolution',
      'CRM integration',
      'Multi-step WhatsApp and email workflows'
    ],
    whoIsItFor: 'Any service-based business looking to automate customer interactions and scale their support without hiring more staff.',
    howItWorks: 'We build a custom conversational bot tailored to your business, integrate it with your CRM and WhatsApp, and set up automated workflows to handle common queries and tasks.'
  },
  {
    slug: 'google-reviews-qr',
    title: 'Google Reviews via QR',
    icon: Star,
    gradient: 'from-amber-400 via-orange-400 to-amber-500',
    description: 'Turn in-person customers into 5-star Google reviews with custom NFC/QR tap cards, smart routing, and automated SMS review funnels.',
    highlights: ['+300% Reviews in 30d', 'Smart Routing', 'Custom NFC Cards'],
    features: [
      'Custom NFC/QR tap cards',
      'Smart review routing',
      'Automated SMS review funnels',
      'Reputation management'
    ],
    whoIsItFor: 'Local businesses (salons, restaurants, clinics) aiming to boost their Google rating and attract more local footfall.',
    howItWorks: 'We provide you with custom-branded NFC tap cards. Customers tap to leave a review. Our smart routing system ensures positive feedback goes to Google, while negative feedback is routed privately to you.'
  },
  {
    slug: 'booking-agents',
    title: 'AI Booking Agents',
    icon: CalendarCheck,
    gradient: 'from-indigo-500 via-violet-500 to-purple-600',
    description: 'Intelligent agents that converse on WhatsApp, Instagram, and web chat to take appointments, check calendars, and collect upfront deposits.',
    highlights: ['24/7 Live', 'Syncs with Google/Calendly', 'Collects Deposits'],
    features: [
      'Conversational booking on WhatsApp & IG',
      'Real-time calendar syncing',
      'Upfront deposit collection',
      'Automated reminders'
    ],
    whoIsItFor: 'Appointment-based businesses that want to accept bookings 24/7 without manual intervention.',
    howItWorks: 'Our AI agent integrates directly with your existing calendar software. When a customer messages you, the bot handles the conversation, finds an available slot, and secures the booking.'
  },
  {
    slug: 'seo-smo-llm-seo',
    title: 'SEO, SMO & LLM SEO',
    icon: Search,
    gradient: 'from-pink-500 via-rose-500 to-violet-500',
    description: 'Dominate Google local search and become the recommended answer in ChatGPT, Gemini, and Perplexity when customers search for your services.',
    highlights: ['AI Ready', 'ChatGPT + Google Ranking', 'Local Dominance'],
    features: [
      'Local SEO optimisation',
      'LLM readiness (ChatGPT, Gemini)',
      'Social media optimisation',
      'Content strategy'
    ],
    whoIsItFor: 'Businesses wanting to secure top positions on both traditional search engines and emerging AI platforms.',
    howItWorks: 'We optimise your website structure, content, and local listings for Google, while ensuring your brand is properly cited and understood by leading Large Language Models.'
  },
  {
    slug: 'website-development',
    title: 'Website Engineering',
    icon: Globe,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    description: 'Ultra-fast, conversion-focused websites engineered with React, high-fidelity UI design, mobile responsiveness, and SEO architecture.',
    highlights: ['High Speed', 'Lighthouse 98+ Score', 'Conversion Focused'],
    features: [
      'Custom React development',
      'High-fidelity UI/UX design',
      'Mobile-first responsiveness',
      'Technical SEO architecture'
    ],
    whoIsItFor: 'Companies that need a premium, lightning-fast digital storefront that converts visitors into paying clients.',
    howItWorks: 'We design and build a modern, scalable website using the latest web technologies, ensuring top-tier performance, accessibility, and SEO.'
  },
  {
    slug: 'marketing-automation',
    title: 'Marketing Automation',
    icon: Mail,
    gradient: 'from-fuchsia-500 via-pink-500 to-violet-600',
    description: 'Personalised email flows, Instagram direct-message lead capture funnels, video promo integrations, and AI copy generation that turns followers into paying clients.',
    highlights: ['Automated', 'Meta & Klaviyo Integrated', 'AI Copy Generation'],
    features: [
      'Personalised email flows',
      'IG DM lead capture funnels',
      'Video promo integration',
      'AI-driven copywriting'
    ],
    whoIsItFor: 'E-commerce and service brands looking to nurture leads and automate their sales funnels efficiently.',
    howItWorks: 'We map out your customer journey and set up automated triggers in platforms like Klaviyo and Meta to deliver the right message at the exact right time.'
  },
  {
    slug: 'video-ads',
    title: 'Video Ads & Promo Videos',
    icon: Clapperboard,
    gradient: 'from-rose-500 via-pink-500 to-violet-600',
    description: 'Short-form reels, social media ads, promo videos and product/service explainer videos for Instagram, Facebook, YouTube and TikTok, with scripting, editing, subtitles and AI-assisted production.',
    highlights: ['Reels, TikTok & Shorts', 'Scripted & Edited', 'High Conversion'],
    features: [
      'Short-form vertical video production',
      'Scripting & storyboarding',
      'Professional editing & subtitles',
      'Platform-specific optimisation'
    ],
    whoIsItFor: 'Brands that want to capture attention and drive conversions on TikTok, Instagram Reels, and YouTube Shorts.',
    howItWorks: 'Our team handles everything from conceptualisation and scripting to editing and final delivery, ensuring your videos are optimised for maximum engagement.'
  },
  {
    slug: 'ai-maintenance',
    title: 'AI Maintenance & Upgrades',
    icon: Wrench,
    gradient: 'from-blue-500 to-indigo-600',
    description: 'We constantly monitor your bots, patch API updates, train models on new data, and add feature enhancements each month.',
    highlights: ['Continuous Care', 'Proactive Monitoring', 'Prompt Tuning'],
    features: [
      '24/7 uptime monitoring',
      'API patch management',
      'Continuous model training',
      'Monthly feature enhancements'
    ],
    whoIsItFor: 'Existing AI automation clients who want to ensure their systems remain cutting-edge and fully operational.',
    howItWorks: 'We provide ongoing technical support, monitoring system health, updating integrations, and refining AI prompts to improve performance over time.'
  },
  {
    slug: 'personal-assistance',
    title: 'Personal & Virtual Assistance',
    icon: UserCheck,
    gradient: 'from-pink-500 to-rose-500',
    description: 'Combines generative AI productivity agents with UK-based assistants for calendar coordination, inbox triage, and admin tasks.',
    highlights: ['Hybrid Intelligence', 'UK-Based Assistants', 'Admin Relief'],
    features: [
      'Hybrid AI + human assistance',
      'Calendar & inbox management',
      'Admin task execution',
      'Dedicated UK support'
    ],
    whoIsItFor: 'Busy founders and executives who need reliable support to manage their daily operations and communications.',
    howItWorks: 'We pair you with a UK-based virtual assistant empowered by AI tools to handle your scheduling, emails, and administrative workload efficiently.'
  }
]
