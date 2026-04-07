/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
      extend: {
          colors: {
              navy: { 50: '#E8ECF4', 100: '#C5CEE0', 200: '#8B9DC3', 300: '#516CA6', 400: '#2B4576', 500: '#1B2A4A', 600: '#152240', 700: '#0F1A2E', 800: '#0A1220', 900: '#060B14' },
              cyan: { 50: '#E0F7FA', 100: '#B2EBF2', 200: '#80DEEA', 300: '#4DD0E1', 400: '#00D4FF', 500: '#00B4D8', 600: '#0097B2', 700: '#007A8C', 800: '#005D66', 900: '#004040' },
          },
          fontFamily: {
              display: ['Outfit', 'sans-serif'],
              body: ['DM Sans', 'sans-serif'],
          },
      },
  },
  plugins: [],
}
