import React from 'react'
import { MessageCircle, Phone, FileText } from 'lucide-react'
import { CONTACT_CONFIG, getWhatsAppUrl } from '../config/contact'

export default function MobileActionBar({ onOpenQuote }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-dark/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 flex items-center justify-around gap-2 shadow-2xl safe-bottom">
      {/* Call Button */}
      <a
        href={`tel:${CONTACT_CONFIG.PHONE_RAW}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 text-xs font-semibold min-h-[44px] transition-colors"
      >
        <Phone className="w-4 h-4 text-violet-400 mb-0.5" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppUrl("Hi Flowsi, I would like to get a quote for AI automation services.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#25D366] text-white text-xs font-bold min-h-[44px] shadow-lg shadow-green-900/30 transition-colors"
      >
        <MessageCircle className="w-4 h-4 mb-0.5" />
        <span>WhatsApp</span>
      </a>

      {/* Quote Button */}
      <button
        onClick={onOpenQuote}
        type="button"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold min-h-[44px] shadow-lg shadow-violet-900/30 cursor-pointer"
      >
        <FileText className="w-4 h-4 mb-0.5" />
        <span>Get a Quote</span>
      </button>
    </div>
  )
}
