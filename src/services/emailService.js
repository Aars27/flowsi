import emailjs from '@emailjs/browser'

/**
 * Sends quotation form data to the business email and triggers confirmation.
 * Uses EmailJS with graceful fallback when environment keys are pending setup.
 *
 * @param {Object} formData
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function sendQuoteEmail(formData) {
  // Honeypot spam check
  if (formData.website_bot_trap && formData.website_bot_trap.trim() !== '') {
    // Silently reject bots without raising alarm
    return { success: true, message: 'Quote submitted successfully' }
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const receiverEmail = import.meta.env.VITE_QUOTE_RECEIVER_EMAIL || 'hello@flowsi.co.uk'

  const formattedServices = Array.isArray(formData.services)
    ? formData.services.join(', ')
    : formData.services || 'Not specified'

  const templateParams = {
    to_email: receiverEmail,
    from_name: formData.name,
    business_name: formData.businessName || 'N/A',
    reply_to: formData.email,
    phone_number: formData.phone,
    services_requested: formattedServices,
    business_type: formData.businessType || 'Not specified',
    estimated_budget: formData.budget || 'Not specified',
    project_timeline: formData.timeline || 'Not specified',
    preferred_contact_method: formData.preferredContact || 'Email',
    project_description: formData.message || 'No description provided',
    submission_date: new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' }),
  }

  // If EmailJS credentials are configured, execute the real API call
  if (serviceId && templateId && publicKey) {
    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      if (response.status === 200 || response.text === 'OK') {
        return { success: true, message: 'Quote request sent successfully!' }
      }
      throw new Error(`EmailJS responded with status: ${response.status}`)
    } catch (error) {
      console.error('EmailJS Error:', error)
      throw new Error(error.text || error.message || 'Failed to send quotation request')
    }
  }

  // Graceful simulation when credentials are not yet entered in .env
  console.info(
    '%c[Flowsi Quote Email System] EmailJS credentials not detected in .env. Simulating email dispatch:',
    'color: #8B5CF6; font-weight: bold;',
    templateParams
  )

  await new Promise((resolve) => setTimeout(resolve, 800))
  return { success: true, message: 'Quote request sent successfully (simulated)' }
}
