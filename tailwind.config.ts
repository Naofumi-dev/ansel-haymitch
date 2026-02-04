import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Baby Driver inspired - cool blues and reds
        'driver': {
          'blue': '#1a365d',
          'red': '#dc2626',
          'chrome': '#e5e7eb',
          'asphalt': '#1f2937',
          'sky': '#38bdf8',
        },
        // Hunger Games inspired - earthy greens and oranges
        'games': {
          'forest': '#064e3b',
          'fire': '#ea580c',
          'gold': '#fbbf24',
          'coal': '#292524',
          'wheat': '#fef3c7',
        },
        // Combined palette
        'ansel': {
          'primary': '#1e3a5f',
          'secondary': '#b45309',
          'accent': '#dc2626',
          'muted': '#f5f5f4',
          'dark': '#171717',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'tire-track': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h60v2H0zM0 30h60v2H0zM0 50h60v2H0z' fill='%23374151' fill-opacity='0.1'/%3E%3C/svg%3E\")",
        'arrow-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5l5 10h-10z' fill='%23064e3b' fill-opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'drive': 'drive 8s linear infinite',
        'flame': 'flame 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        drive: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        flame: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
