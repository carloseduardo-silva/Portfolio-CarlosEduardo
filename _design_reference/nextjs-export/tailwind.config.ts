import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#09101F',
          900: '#0D1829',
        },
        accent: {
          DEFAULT: '#4B7BE5',
          dark:    '#3B6BD5',
          light:   '#7CB8FF',
        },
        surface: {
          light: '#FAFBFF',
          muted: '#F2F4FB',
        },
        card: {
          border: '#DDE3EE',
          bg:     '#EEF2FB',
          'border-blue': '#DDE5F5',
        },
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.03em',
      },
    },
  },
  plugins: [],
}

export default config
