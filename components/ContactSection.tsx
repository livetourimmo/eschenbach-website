import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      style={{ background: 'var(--color-page)', borderTop: '1px solid rgba(82,68,52,0.08)' }}
      className="py-32 relative overflow-hidden"
    >
      {/* Watermark */}
      <svg
        viewBox="0 0 219 196"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-4rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '38rem',
          opacity: 0.045,
          pointerEvents: 'none',
        }}
      >
        <path
          fill="#998f48"
          d="M111.22,122.43l-.38,24.7c-.02,1-3.56.68-3.56-.57l.04-23.72c0-1.13-.79-2.2-1.47-2.64-.71-.46-1.39-.2-2.61.19-21.63,7.05-40.63-4.13-48.47-25.36,21.51-7.45,43.65-.83,51.51,20.63,2.32-11.02,2.03-25.21-3.66-24.67-25.8,2.42-44.91-16.05-47.78-42.34,27.57-2.28,46.64,11.12,51.37,39.66,1.35-5.68,1.76-11.84.72-18.47-19.96-21.42-17.98-48.24,2.68-69.01,20.32,22.27,21.56,47.51,1.59,69.91-.41,6.32-.24,12.17.82,17.56,2.09-7.43,3.46-14.13,7.21-20.02,9.63-15.12,26.82-21.86,44.32-19.6-1.64,24.52-20.44,43.86-44.15,42.13-4.16-.3-8.43.96-8.27,6.13l.59,18.63c3.74-6.07,7.14-12.23,12.99-16.53,10.76-7.93,26.15-8.86,39.17-3.98-4.01,12.16-13.71,22.05-25.65,25.94-15.01,4.9-26.93-4.8-27.03,1.43ZM110.85,29.9l.83,33.73c14.65-17.72,12.98-39.12-2.24-56.55-15.56,16.81-17.21,37.89-2.79,56.63l.61-29.9c.03-1.42-.27-3.02.64-4.06.46-.53,2.94-.57,2.95.15ZM120.26,86.84c11.39,1.22,19.92-4.25,27.3-10.02,6.15-7.42,10.76-15.25,11.62-24.86l-10.22.98c-15.08,2.54-28.45,13.44-30.91,29.73l27.49-21.8c1.02-.71,2.35-.59,2.57.07.32.96.36,2.22-.49,2.93l-27.37,22.96ZM69.96,62.35c.71-1.26,2.09-2.18,2.46-1.93l28.53,22.87c-3.39-19.82-21.91-32.66-41.56-30.63,3.64,19.69,18.18,35.13,38.81,34.56-8.5-9.59-20.24-15.63-28.24-24.87ZM73.24,102.71c.26-.41,1.31-.62,2.18-.25l25.71,10.94c-7.81-15.72-25.72-21.1-41.4-15.94,9.15,16.95,21.94,24.27,39.57,19.87-9.68-5.38-28.54-10.7-26.07-14.62ZM119.9,117.15c11.77,3.8,23.28-.11,31.24-8.78,2.92-3.19,6.24-5.84,7.21-10.96-15.47-5.17-32.8.76-40.38,15.6l25.7-10.85c1.43-.6,2.15,1.4,1.77,2.22s-.5.98-1.59,1.49l-23.95,11.27Z"
        />
      </svg>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
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
              Wir beantworten Ihre Fragen persönlich und begleiten Sie durch den gesamten Kaufprozess.
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
