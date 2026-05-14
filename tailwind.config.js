/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'confidence-high': '#10b981',
        'confidence-medium': '#f59e0b',
        'confidence-low': '#ef4444',
      }
    },
  },
  plugins: [],
}
