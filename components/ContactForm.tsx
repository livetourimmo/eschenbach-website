'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
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
    if (form.honeypot) return // spam
    if (!form.datenschutz) return

    setState('sending')

    const { error } = await supabase.from('contact_requests').insert({
      name:      form.name,
      email:     form.email,
      telefon:   form.telefon || null,
      nachricht: form.nachricht,
      interesse: form.interesse || null,
    })

    setState(error ? 'error' : 'success')
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle size={40} style={{ color: 'var(--color-accent)' }} />
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-text-core)' }}>
          Vielen Dank für Ihre Nachricht.
        </h3>
        <p style={{ color: 'var(--color-text-light)', maxWidth: '36rem' }}>
          Herr Wiedmer meldet sich in Kürze bei Ihnen. Wir freuen uns auf das Gespräch.
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
            <option value="Whg A">Wohnung A — EG, 119 m²</option>
            <option value="Whg B">Wohnung B — EG, 118 m²</option>
            <option value="Whg C">Wohnung C — 1. OG, 119 m²</option>
            <option value="Whg D">Wohnung D — 1. OG, 118 m²</option>
            <option value="Whg E">Wohnung E — 2. OG, 119 m²</option>
            <option value="Whg F">Wohnung F — 2. OG, 118 m²</option>
            <option value="Whg G">Wohnung G — DG, 119 m²</option>
            <option value="Whg H">Wohnung H — DG, 117 m²</option>
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
        <div className="flex items-center gap-2 p-4 rounded text-sm" style={{ background: '#fef2f2', color: '#991b1b' }}>
          <AlertCircle size={16} />
          <span>Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.</span>
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
