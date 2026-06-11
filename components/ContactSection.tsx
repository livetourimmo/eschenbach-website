import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      style={{ background: 'var(--color-page)', borderTop: '1px solid rgba(82,68,52,0.08)' }}
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="label-tag">Kontakt</span>
              <div className="accent-line" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  color: 'var(--color-text-core)',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                }}
              >
                Sprechen wir miteinander.
              </h2>
            </div>

            <p style={{ color: 'var(--color-text-light)', maxWidth: '34rem', lineHeight: 1.75 }}>
              Wir beantworten Ihre Fragen persönlich und begleiten Sie durch den gesamten Kaufprozess — von der Besichtigung bis zur Beurkundung.
            </p>

            {/* Contact card */}
            <div
              className="flex items-start gap-6 p-6 rounded-lg"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(82,68,52,0.08)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <div className="relative shrink-0">
                <Image
                  src="/images/wiedemer-phillip.webp"
                  alt="Phillip Wiedmer, MO Architektur GmbH"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  style={{ width: 80, height: 80 }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-text-core)' }}
                >
                  Herr Phillip Wiedmer
                </span>
                <span className="text-sm" style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
                  MO Architektur GmbH
                </span>
                <div className="flex flex-col gap-2 mt-3">
                  <a
                    href="tel:+41555111100"
                    className="flex items-center gap-2.5 text-sm transition-colors hover:text-[var(--color-accent)]"
                    style={{ color: 'var(--color-text-light)' }}
                  >
                    <Phone size={14} style={{ color: 'var(--color-accent)' }} />
                    055 511 11 00
                  </a>
                  <a
                    href="mailto:pw@mo-architektur.ch"
                    className="flex items-center gap-2.5 text-sm transition-colors hover:text-[var(--color-accent)]"
                    style={{ color: 'var(--color-text-light)' }}
                  >
                    <Mail size={14} style={{ color: 'var(--color-accent)' }} />
                    pw@mo-architektur.ch
                  </a>
                  <div className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--color-text-light)' }}>
                    <MapPin size={14} style={{ color: 'var(--color-accent)', marginTop: 2 }} />
                    <span>
                      Bahnhofstrasse 2<br />
                      8730 Uznach
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
