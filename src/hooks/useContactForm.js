import { useRef, useState } from 'react'

// TODO: replace FORMSPREE_ENDPOINT with your actual
// endpoint from formspree.io/forms — it looks like:
// https://formspree.io/f/xxxxxxxx
//
// Leave it as-is and the form still works: it hands the message to the
// visitor's email app with everything filled in. Paste a real endpoint and it
// switches to sending in the background, without the visitor leaving the page.
const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT_HERE'

const CONTACT_EMAIL = 'sultannoboni@gmail.com'
const RESET_DELAY = 5000
const IDLE_LABEL = 'Send Message'

const isConfigured =
  FORMSPREE_ENDPOINT.startsWith('https://') &&
  !FORMSPREE_ENDPOINT.includes('YOUR_FORMSPREE_ENDPOINT_HERE')

/**
 * Submits the contact form and tracks the button label and status message.
 * Status is one of: idle | sending | sent | handoff | error.
 */
export default function useContactForm() {
  const [status, setStatus] = useState('idle')
  const resetTimer = useRef(null)

  const scheduleReset = () => {
    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setStatus('idle'), RESET_DELAY)
  }

  const submit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return false

    const form = event.target
    const data = new FormData(form)
    const name = (data.get('name') || '').trim()
    const email = (data.get('email') || '').trim()
    const message = (data.get('message') || '').trim()

    // No endpoint configured: hand off to the visitor's mail client with the
    // message already written, rather than failing at them.
    if (!isConfigured) {
      const subject = `Portfolio enquiry from ${name || 'your site'}`
      const body = `${message}\n\n—\n${name}\n${email}`
      const mailto =
        `mailto:${CONTACT_EMAIL}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`

      setStatus('handoff')
      window.location.assign(mailto)
      scheduleReset()
      return true
    }

    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)

      form.reset()
      setStatus('sent')
      scheduleReset()
      return true
    } catch {
      setStatus('error')
      scheduleReset()
      return false
    }
  }

  const buttonLabel =
    status === 'sending'
      ? 'Sending...'
      : status === 'sent'
        ? 'Sent ✓'
        : status === 'handoff'
          ? 'Opening your email…'
          : IDLE_LABEL

  // Announced through an aria-live region.
  const liveMessage =
    status === 'sending'
      ? 'Sending message...'
      : status === 'sent'
        ? 'Message sent successfully'
        : status === 'handoff'
          ? 'Opening your email app with the message ready to send'
          : status === 'error'
            ? 'Failed to send message'
            : ''

  return { status, submit, buttonLabel, liveMessage, contactEmail: CONTACT_EMAIL }
}
