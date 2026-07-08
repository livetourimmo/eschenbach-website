import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  const { name, email, telefon, nachricht, interesse } = await request.json()

  // Supabase speichern
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  await supabase.from('contact_requests').insert({
    name,
    email,
    telefon:   telefon   || null,
    nachricht,
    interesse: interesse || null,
  })

  // E-Mail via Resend
  const html = `
    <div style="font-family: sans-serif; max-width: 600px;">
      <h2 style="color: #615243;">Neue Anfrage – Eschen 11</h2>
      <table style="width:100%; border-collapse:collapse;">
        <tr><td style="padding:8px 0; color:#666; width:120px;">Name</td><td style="padding:8px 0;"><strong>${name}</strong></td></tr>
        <tr><td style="padding:8px 0; color:#666;">E-Mail</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        ${telefon ? `<tr><td style="padding:8px 0; color:#666;">Telefon</td><td style="padding:8px 0;">${telefon}</td></tr>` : ''}
        ${interesse ? `<tr><td style="padding:8px 0; color:#666;">Interesse</td><td style="padding:8px 0;">${interesse}</td></tr>` : ''}
      </table>
      <hr style="border:none; border-top:1px solid #e5e5e5; margin:16px 0;">
      <p style="color:#666; margin:0 0 4px;">Nachricht</p>
      <p style="color:#2d2a27; white-space:pre-wrap;">${nachricht}</p>
    </div>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from:     'Eschen 11 <noreply@livetour.ch>',
      to:       'info@livetour.ch',
      reply_to: email,
      subject:  `Neue Anfrage von ${name}`,
      html,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend Fehler:', err)
  }

  return NextResponse.json({ success: true })
}
