/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: '#F8F9F7',
        stone: '#F0F2F0',
        card: '#FFFFFF',
        ink: '#1A1C1A',
        slate: '#545856',
        forest: {
          DEFAULT: '#2A4D45',
          hover: '#223d37',
        },
        copper: {
          DEFAULT: '#C27A5B',
          hover: '#a8674b',
        },
        line: '#E2E5E2',
        surface: '#E9ECE9',
        'deep-slate': {
          DEFAULT: '#1E2623',
          text: '#F4F6F4',
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
