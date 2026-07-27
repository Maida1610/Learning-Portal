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
          bg: '#0a0e1a',
          card: '#131829',
          border: '#1f2740',
        },
        primary: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        accent: {
          500: '#6366f1',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, #ec4899, #8b5cf6, #6366f1)',
      },
    },
  },
  plugins: [],
}