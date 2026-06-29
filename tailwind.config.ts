import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon:      '#5C1A1A',
        gold:        '#B8922A',
        parchment:   '#F2EBD9',
        'bay-blue':  '#2C4A6E',
        'stone-white':'#FAF7F2',
        charcoal:    '#2A2420',
        sand:        '#D4B896',
        vestment:    '#8C7B6E',
        success:     '#2D6A4F',
        warning:     '#92560A',
        error:       '#9B1C1C',
      },
      fontFamily: {
        display:       ['var(--font-garamond)', 'Georgia', 'serif'],
        body:          ['var(--font-inter)', 'system-ui', 'sans-serif'],
        institutional: ['var(--font-cinzel)', 'serif'],
      },
      fontSize: {
        'display': ['80px', { lineHeight: '1.0',  letterSpacing: '-0.02em'  }],
        'h1':      ['60px', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'h2':      ['44px', { lineHeight: '1.15', letterSpacing: '-0.01em'  }],
        'h3':      ['32px', { lineHeight: '1.25', letterSpacing: '0'        }],
        'h4':      ['20px', { lineHeight: '1.35', letterSpacing: '0.01em'   }],
        'h5':      ['17px', { lineHeight: '1.4',  letterSpacing: '0.01em'   }],
        'pull':    ['26px', { lineHeight: '1.6',  letterSpacing: '0.01em'   }],
        'body-lg': ['17px', { lineHeight: '1.75', letterSpacing: '0'        }],
        'body':    ['15px', { lineHeight: '1.7',  letterSpacing: '0'        }],
        'caption': ['13px', { lineHeight: '1.6',  letterSpacing: '0.02em'   }],
        'label':   ['11px', { lineHeight: '1.5',  letterSpacing: '0.12em'   }],
      },
    },
  },
  plugins: [],
}

export default config