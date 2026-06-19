/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: '#0F172A',
        stone: '#1E293B',
        card: '#111827',
        ink: '#F8FAFC',
        slate: '#CBD5E1',
        forest: {
          DEFAULT: '#F59E0B',
          hover: '#FBBF24',
        },
        copper: {
          DEFAULT: '#FCD34D',
          hover: '#F59E0B',
        },
        line: '#B45309',
        surface: '#1E293B',
        'deep-slate': {
          DEFAULT: '#020617',
          text: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}
