import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Unit = {
  id: number
  bezeichnung: string
  geschoss: string
  zimmer: number
  wohnflaeche: number
  sitzplatz_balkon: number
  preis: number | null
  status: 'frei' | 'reserviert' | 'verkauft'
  grundriss_pdf_url: string | null
}

export type ContactRequest = {
  id?: number
  name: string
  email: string
  telefon?: string
  nachricht: string
  interesse?: string
  created_at?: string
}
