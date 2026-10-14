/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#07080a',
          card: '#0f1117',
          surface: '#141720',
          border: '#222734',
          borderGold: 'rgba(212, 175, 55, 0.25)',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          metallic: '#e5b842',
          bright: '#ffd56b',
          dark: '#997316',
        },
        flame: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#e11d48',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          pure: '#e52e2e',
        },
        cream: {
          DEFAULT: '#fef7e6',
          light: '#ffffff',
          muted: '#e8dcbf',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ffd56b 0%, #e5b842 50%, #b3861b 100%)',
        'gold-shine': 'linear-gradient(90deg, #b45309 0%, #fbbf24 30%, #fff1c2 50%, #d97706 70%, #92400e 100%)',
        'dark-gradient': 'radial-gradient(ellipse at top, #1a1e28 0%, #0a0b0e 70%, #050607 100%)',
        'red-gradient': 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -4px rgba(229, 184, 66, 0.35)',
        'flame-glow': '0 0 25px -4px rgba(229, 46, 46, 0.4)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(229, 184, 66, 0.2)',
      }
    },
  },
  plugins: [],
}
