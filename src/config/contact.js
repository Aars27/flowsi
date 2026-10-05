/**
 * Central contact configuration for Flowsi.
 * Replace WHATSAPP_NUMBER with your actual WhatsApp business number (without + or spaces, e.g. "447123456789").
 */
export const CONTACT_CONFIG = {
  WHATSAPP_NUMBER: "44XXXXXXXXXX", // Replace with your UK WhatsApp business number
  EMAIL: "hello@flowsi.co.uk",
  PHONE: "+44 117 123 4567",
  PHONE_RAW: "+441171234567",
  ADDRESS: "Bristol, United Kingdom",
  POSTCODE: "BS1",
  MAP_LOCATION: "Bristol, UK",
}

/**
 * Generates a WhatsApp chat link with an optional prefilled encoded message.
 * @param {string} message - The message text
 * @returns {string} wa.me URL
 */
export function getWhatsAppUrl(message = "Hi Flowsi, I would like to get a quote and learn more about your AI automation services.") {
  const cleanNumber = CONTACT_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, "")
  const encodedText = encodeURIComponent(message)
  return `https://wa.me/${cleanNumber}?text=${encodedText}`
}
