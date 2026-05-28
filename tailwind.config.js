/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F4EE',
        stone: '#EFE9DF',
        card: '#FBF9F5',
        primary: '#1E1E1A',
        secondary: '#5E5A54',
        gold: {
          DEFAULT: '#9B7B45',
          hover: '#7C6135',
        },
        border: '#D9D1C4',
        muted: '#ECE7DE',
        charcoal: {
          DEFAULT: '#151515',
          text: '#F5F3EE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
