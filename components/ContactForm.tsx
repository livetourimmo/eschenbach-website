'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { messeKontaktanfrage } from '@/lib/analytics'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const DEFAULT_ERROR =
  'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR)
  const [form, setForm] = useState({
    name: '',
    email: '',
    telefon: '',
    nachricht: '',
    interesse: '',
    datenschutz: false,
    honeypot: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.datenschutz) return

    setState('sending')
    setErrorMessage(DEFAULT_ERROR)

    try {
      // Versand ausschliesslich per E-Mail über /api/contact (Resend)
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:        form.name,
          email:       form.email,
          telefon:     form.telefon,
          nachricht:   form.nachricht,
          interesse:   form.interesse,
          datenschutz: form.datenschutz,
          honeypot:    form.honeypot,
        }),
      })

      const data = await res.json().catch(() => null) as { ok?: boolean; error?: string } | null

      if (!res.ok || !data?.ok) {
        if (data?.error) setErrorMessage(data.error)
        setState('error')
        return
      }

      setState('success')
      if (!form.honeypot) {
        // Ein Messfehler darf eine erfolgreiche Anfrage nie als Fehler anzeigen.
        try { messeKontaktanfrage(window.location.pathname); } catch { /* Messung ist optional. */ }
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle size={40} style={{ color: 'var(--color-accent)' }} />
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-text-core)' }}>
          Vielen Dank für Ihre Nachricht.
        </h3>
        <p style={{ color: 'var(--color-text-light)', maxWidth: '36rem' }}>
          Wir werden uns in Kürze mit Ihnen in Verbindung setzen.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={form.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Ihr vollständiger Name"
            className="w-full px-4 py-3 text-sm border rounded outline-none transition-all duration-200 bg-white"
            style={{
              borderColor: 'rgba(82,68,52,0.15)',
              color: 'var(--color-text-core)',
              fontFamily: 'var(--font-sans)',
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="ihre@email.ch"
            className="w-full px-4 py-3 text-sm border rounded outline-none transition-all duration-200 bg-white"
            style={{
              borderColor: 'rgba(82,68,52,0.15)',
              color: 'var(--color-text-core)',
              fontFamily: 'var(--font-sans)',
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="telefon" className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            value={form.telefon}
            onChange={handleChange}
            placeholder="+41 79 000 00 00"
            className="w-full px-4 py-3 text-sm border rounded outline-none transition-all duration-200 bg-white"
            style={{
              borderColor: 'rgba(82,68,52,0.15)',
              color: 'var(--color-text-core)',
              fontFamily: 'var(--font-sans)',
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="interesse" className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
            Ich interessiere mich für
          </label>
          <select
            id="interesse"
            name="interesse"
            value={form.interesse}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border rounded outline-none transition-all duration-200 bg-white appearance-none"
            style={{
              borderColor: 'rgba(82,68,52,0.15)',
              color: form.interesse ? 'var(--color-text-core)' : 'var(--color-contrast)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <option value="">Allgemeine Anfrage</option>
            <option value="Whg A">Wohnung A, EG, 127 m²</option>
            <option value="Whg B">Wohnung B, EG, 126 m²</option>
            <option value="Whg C">Wohnung C, 1. OG, 128 m²</option>
            <option value="Whg D">Wohnung D, 1. OG, 126.5 m²</option>
            <option value="Whg E">Wohnung E, 2. OG, 128 m²</option>
            <option value="Whg F">Wohnung F, 2. OG, 126.5 m²</option>
            <option value="Whg G">Wohnung G, DG, 126.5 m²</option>
            <option value="Whg H">Wohnung H, DG, 125.5 m²</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="nachricht" className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
          Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={5}
          value={form.nachricht}
          onChange={handleChange}
          placeholder="Ihre Fragen oder Anmerkungen…"
          className="w-full px-4 py-3 text-sm border rounded outline-none transition-all duration-200 bg-white resize-none"
          style={{
            borderColor: 'rgba(82,68,52,0.15)',
            color: 'var(--color-text-core)',
            fontFamily: 'var(--font-sans)',
          }}
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="datenschutz"
          checked={form.datenschutz}
          onChange={handleChange}
          required
          className="mt-1 shrink-0"
          style={{ accentColor: 'var(--color-accent)' }}
        />
        <span className="text-sm" style={{ color: 'var(--color-text-light)', fontWeight: 300 }}>
          Ich habe die{' '}
          <a href="/datenschutz" className="underline hover:text-[var(--color-accent)] transition-colors" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung
          </a>{' '}
          gelesen und stimme der Verarbeitung meiner Daten zu. *
        </span>
      </label>

      {state === 'error' && (
        <div role="alert" className="flex items-center gap-2 p-4 rounded text-sm" style={{ background: '#fef2f2', color: '#991b1b' }}>
          <AlertCircle size={16} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={state === 'sending' || !form.datenschutz}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {state === 'sending' ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Wird gesendet…
            </>
          ) : (
            <>
              <Send size={16} />
              Nachricht senden
            </>
          )}
        </button>
        <span className="text-xs" style={{ color: 'var(--color-contrast)' }}>* Pflichtfelder</span>
      </div>
    </form>
  )
}
