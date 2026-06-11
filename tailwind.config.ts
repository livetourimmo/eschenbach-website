import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Farbkonzept Eschen 11
        'page':        '#f6f5f2',
        'card':        '#ffffff',
        'text-core':   '#2d2a27',
        'text-light':  '#4c4742',
        'secondary':   '#d9d5cc',
        'accent':      '#998f48',
        'accent-hover':'#81783c',
        'contrast':    '#989898',
        'border-soft': 'rgba(82,68,52,0.08)',
        // Used sparingly for subtle backgrounds only
        'goldsand':    '#CCBB95',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.8rem, 6vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'h1':      ['clamp(2.2rem, 5vw, 3.5rem)',  { lineHeight: '1.15' }],
        'h2':      ['clamp(1.8rem, 3.5vw, 2.5rem)',{ lineHeight: '1.2'  }],
        'h3':      ['clamp(1.3rem, 2vw, 1.8rem)',  { lineHeight: '1.3'  }],
      },
      letterSpacing: {
        'headline': '0.04em',
        'wide':     '0.12em',
        'widest':   '0.2em',
      },
      borderRadius: {
        DEFAULT: '8px',
        'sm': '4px',
        'lg': '12px',
      },
      boxShadow: {
        'soft':   '0 10px 30px rgba(35,29,25,0.04)',
        'medium': '0 20px 45px rgba(35,29,25,0.07)',
        'strong': '0 30px 60px rgba(35,29,25,0.10)',
      },
      spacing: {
        'section': '8rem',    // 128px — grosszügige Section-Abstände
        'section-sm': '5rem', // 80px
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
    },
  },
  plugins: [],
}

export default config
