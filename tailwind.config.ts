import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        driver: {
          blue: '#0ea5e9',
          red: '#ef4444',
          chrome: '#e5e7eb',
          dark: '#0f172a',
        },
        games: {
          forest: '#059669',
          fire: '#f97316',
          gold: '#fbbf24',
          coal: '#1c1917',
        },
        brand: {
          primary: '#1e40af',
          secondary: '#c2410c',
          accent: '#dc2626',
          dark: '#030712',
          light: '#f8fafc',
        }
      },
      fontFamily: {
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(239,68,68,0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(249,115,22,0.8)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        'fire-gradient': 'linear-gradient(135deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)',
        'forest-gradient': 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #34d399 100%)',
        'speed-gradient': 'linear-gradient(90deg, #0ea5e9 0%, #3b82f6 50%, #ef4444 100%)',
      },
    },
  },
  plugins: [],
}

export default config
