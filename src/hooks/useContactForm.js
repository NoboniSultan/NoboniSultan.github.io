import { useRef, useState } from 'react'

// TODO: replace FORMSPREE_ENDPOINT with your actual
// endpoint from formspree.io/forms — it looks like:
// https://formspree.io/f/xxxxxxxx
//
// Until this is a real endpoint the form reports a failure and tells the
// visitor to email directly, rather than silently swallowing the message.
const FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT_HERE'

const RESET_DELAY = 4000
const IDLE_LABEL = 'Send Message'

/**
 * Submits the contact form to Formspree and tracks the button label and
 * status message. Status is one of: idle | sending | sent | error.
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
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    }

    setStatus('sending')

    try {
      if (FORMSPREE_ENDPOINT === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
        throw new Error('Formspree endpoint not configured')
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
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
    status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : IDLE_LABEL

  // Announced through an aria-live region.
  const liveMessage =
    status === 'sending'
      ? 'Sending message...'
      : status === 'sent'
        ? 'Message sent successfully'
        : status === 'error'
          ? 'Failed to send message'
          : ''

  return { status, submit, buttonLabel, liveMessage }
}
