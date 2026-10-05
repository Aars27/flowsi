import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../config/contact'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl("Hi Flowsi, I would like to enquire about your AI automation services.")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:flex fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] items-center justify-center shadow-lg shadow-green-500/30 whatsapp-pulse cursor-pointer text-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
    </motion.a>
  )
}
