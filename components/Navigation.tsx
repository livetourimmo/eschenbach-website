'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/',        label: 'Start'   },
  { href: '/angebot', label: 'Angebot' },
  { href: '/lage',    label: 'Lage'    },
  { href: '/#kontakt',label: 'Kontakt' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logos/Logo_1.svg"
            alt="Eschen 11"
            width={160}
            height={54}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium tracking-wide text-[var(--color-text-core)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#kontakt" className="btn-primary text-sm py-2.5 px-5">
            Kontakt aufnehmen
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--color-text-core)]"
          onClick={() => setOpen(!open)}
          aria-label="Menu öffnen"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-[rgba(82,68,52,0.08)]"
          style={{ background: 'rgba(246,245,242,0.97)', backdropFilter: 'blur(16px)' }}
        >
          <nav className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[var(--color-text-core)] hover:text-[var(--color-accent)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="btn-primary self-start mt-2"
            >
              Kontakt aufnehmen
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
