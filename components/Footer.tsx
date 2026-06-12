import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-text-core)',
        color: 'rgba(246,245,242,0.7)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
      className="py-12"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Logo + address */}
          <div className="flex flex-col gap-3 items-start">
            <Image
              src="/logos/Logo_1.svg"
              alt="Eschen 11"
              width={140}
              height={46}
              className="h-12 w-auto object-contain brightness-0 invert opacity-70"
            />
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'rgba(246,245,242,0.5)', fontWeight: 300 }}
            >
              Rapperswilerstrasse 11 · 8733 Eschenbach<br />
              Ein Projekt von MO Architektur GmbH, Uznach
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <Link href="/angebot" className="nav-link transition-colors duration-200 hover:text-[var(--color-goldsand)]" style={{ color: 'rgba(246,245,242,0.6)' }}>
              Angebot
            </Link>
            <Link href="/lage" className="nav-link transition-colors duration-200 hover:text-[var(--color-goldsand)]" style={{ color: 'rgba(246,245,242,0.6)' }}>
              Lage
            </Link>
            <Link href="/#kontakt" className="nav-link transition-colors duration-200 hover:text-[var(--color-goldsand)]" style={{ color: 'rgba(246,245,242,0.6)' }}>
              Kontakt
            </Link>
            <Link href="/impressum" className="nav-link transition-colors duration-200 hover:text-[var(--color-goldsand)]" style={{ color: 'rgba(246,245,242,0.6)' }}>
              Impressum
            </Link>
            <Link href="/datenschutz" className="nav-link transition-colors duration-200 hover:text-[var(--color-goldsand)]" style={{ color: 'rgba(246,245,242,0.6)' }}>
              Datenschutz
            </Link>
          </nav>
        </div>

        <div
          className="mt-8 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            color: 'rgba(246,245,242,0.35)',
          }}
        >
          <span>© {new Date().getFullYear()} Eschen 11 | MO Architektur GmbH. Alle Rechte vorbehalten.</span>
          <span>Eschenbach SG</span>
        </div>
      </div>
    </footer>
  )
}
