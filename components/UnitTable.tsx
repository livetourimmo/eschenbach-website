'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase, type Unit } from '@/lib/supabase'
import { FileText, SlidersHorizontal } from 'lucide-react'

const staticUnits: Unit[] = [
  { id: 1, bezeichnung: 'Whg A', geschoss: 'EG',    zimmer: 4.5, wohnflaeche: 119, sitzplatz_balkon: 25, preis: null, status: 'frei', grundriss_pdf_url: '/downloads/Wohnung_A.pdf' },
  { id: 2, bezeichnung: 'Whg B', geschoss: 'EG',    zimmer: 4.5, wohnflaeche: 118, sitzplatz_balkon: 25, preis: null, status: 'frei', grundriss_pdf_url: '/downloads/Wohnung_B.pdf' },
  { id: 3, bezeichnung: 'Whg C', geschoss: '1. OG', zimmer: 4.5, wohnflaeche: 119, sitzplatz_balkon: 23, preis: null, status: 'frei', grundriss_pdf_url: '/downloads/Wohnung_C.pdf' },
  { id: 4, bezeichnung: 'Whg D', geschoss: '1. OG', zimmer: 4.5, wohnflaeche: 118, sitzplatz_balkon: 24, preis: null, status: 'frei', grundriss_pdf_url: '/downloads/Wohnung_D.pdf' },
  { id: 5, bezeichnung: 'Whg E', geschoss: '2. OG', zimmer: 4.5, wohnflaeche: 119, sitzplatz_balkon: 24, preis: null, status: 'frei', grundriss_pdf_url: '/downloads/Wohnung_E.pdf' },
  { id: 6, bezeichnung: 'Whg F', geschoss: '2. OG', zimmer: 4.5, wohnflaeche: 118, sitzplatz_balkon: 23, preis: null, status: 'frei', grundriss_pdf_url: '/downloads/Wohnung_F.pdf' },
  { id: 7, bezeichnung: 'Whg G', geschoss: 'DG',    zimmer: 4.5, wohnflaeche: 119, sitzplatz_balkon: 24, preis: null, status: 'frei', grundriss_pdf_url: '/downloads/Wohnung_G.pdf' },
  { id: 8, bezeichnung: 'Whg H', geschoss: 'DG',    zimmer: 4.5, wohnflaeche: 117, sitzplatz_balkon: 24, preis: null, status: 'frei', grundriss_pdf_url: '/downloads/Wohnung_H.pdf' },
]

const geschossOrder: Record<string, number> = { 'EG': 0, '1. OG': 1, '2. OG': 2, 'DG': 3 }

export default function UnitTable() {
  const [units, setUnits]         = useState<Unit[]>(staticUnits)
  const [filterGeschoss, setGF]   = useState<string>('alle')
  const [loading, setLoading]     = useState(true)

  useEffect(() => {
    supabase
      .from('units')
      .select('*')
      .order('id')
      .then(({ data }) => {
        if (data && data.length > 0) setUnits(data as Unit[])
        setLoading(false)
      }, () => {
        setLoading(false)
      })
  }, [])

  const filtered = units
    .filter(u => filterGeschoss === 'alle' || u.geschoss === filterGeschoss)
    .sort((a, b) => (geschossOrder[a.geschoss] ?? 9) - (geschossOrder[b.geschoss] ?? 9))

  const statusLabel: Record<string, string> = {
    frei:       'Verfügbar',
    reserviert: 'Reserviert',
    verkauft:   'Verkauft',
  }

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
          <SlidersHorizontal size={14} />
          Geschoss
        </div>
        {['alle', 'EG', '1. OG', '2. OG', 'DG'].map(g => (
          <button
            key={g}
            onClick={() => setGF(g)}
            className="px-4 py-2 text-sm rounded transition-all duration-200"
            style={{
              background:   filterGeschoss === g ? 'var(--color-accent)'     : '#ffffff',
              color:        filterGeschoss === g ? '#ffffff'                  : 'var(--color-text-core)',
              border:       filterGeschoss === g ? 'none'                    : '1px solid rgba(82,68,52,0.15)',
              fontWeight:   filterGeschoss === g ? 500 : 300,
            }}
          >
            {g === 'alle' ? 'Alle' : g}
          </button>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(82,68,52,0.10)' }}>
              {['Wohnung', 'Geschoss', 'Zimmer', 'Wohnfläche', 'Sitzplatz / Balkon', 'Kaufpreis', 'Status', 'Grundriss'].map(h => (
                <th
                  key={h}
                  className="pb-4 text-left text-xs font-semibold uppercase tracking-widest pr-6"
                  style={{ color: 'var(--color-accent)', whiteSpace: 'nowrap' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((u, i) => (
              <tr
                key={u.id}
                style={{
                  borderBottom: '1px solid rgba(82,68,52,0.07)',
                  background: i % 2 === 1 ? 'rgba(82,68,52,0.015)' : 'transparent',
                }}
              >
                <td className="py-4 pr-6 font-medium text-sm" style={{ color: 'var(--color-text-core)' }}>
                  {u.bezeichnung}
                </td>
                <td className="py-4 pr-6 text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  {u.geschoss}
                </td>
                <td className="py-4 pr-6 text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  {u.zimmer}
                </td>
                <td className="py-4 pr-6 text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  {u.wohnflaeche} m²
                </td>
                <td className="py-4 pr-6 text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  {u.sitzplatz_balkon} m²
                </td>
                <td className="py-4 pr-6 text-sm font-light" style={{ color: 'var(--color-text-light)' }}>
                  {u.preis ? `CHF ${u.preis.toLocaleString('de-CH')}` : 'Auf Anfrage'}
                </td>
                <td className="py-4 pr-6">
                  <span className={`status-${u.status}`}>
                    {statusLabel[u.status]}
                  </span>
                </td>
                <td className="py-4">
                  {u.grundriss_pdf_url ? (
                    <a
                      href={u.grundriss_pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--color-accent-hover)]"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      <FileText size={13} />
                      PDF
                    </a>
                  ) : (
                    <span className="text-xs" style={{ color: 'var(--color-contrast)' }}>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: cards */}
      <div className="md:hidden flex flex-col gap-4">
        {filtered.map(u => (
          <div
            key={u.id}
            className="p-5 rounded-lg"
            style={{
              background: '#ffffff',
              border: '1px solid rgba(82,68,52,0.10)',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.1rem',
                  color: 'var(--color-text-core)',
                }}
              >
                {u.bezeichnung}
              </span>
              <span className={`status-${u.status}`}>{statusLabel[u.status]}</span>
            </div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm mb-4">
              {[
                ['Geschoss',           u.geschoss],
                ['Zimmer',             u.zimmer],
                ['Wohnfläche',         `${u.wohnflaeche} m²`],
                ['Sitzplatz / Balkon', `${u.sitzplatz_balkon} m²`],
                ['Kaufpreis',          u.preis ? `CHF ${u.preis.toLocaleString('de-CH')}` : 'Auf Anfrage'],
              ].map(([k, v]) => (
                <div key={String(k)}>
                  <div className="text-xs uppercase tracking-widest font-semibold mb-0.5" style={{ color: 'var(--color-accent)' }}>{k}</div>
                  <div className="font-light" style={{ color: 'var(--color-text-core)' }}>{v}</div>
                </div>
              ))}
            </div>
            {u.grundriss_pdf_url && (
              <a
                href={u.grundriss_pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-4 w-full justify-center"
              >
                <FileText size={14} />
                Grundriss herunterladen
              </a>
            )}
          </div>
        ))}
      </div>

      {loading && (
        <p className="text-xs text-center mt-4" style={{ color: 'var(--color-contrast)' }}>
          Verfügbarkeiten werden geladen…
        </p>
      )}
    </div>
  )
}
