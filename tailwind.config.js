/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores para tema oscuro
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'accent-blue': '#3b82f6',
        'accent-purple': '#8b5cf6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}