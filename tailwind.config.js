/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        terracotta: {
          50: '#fdf7f4',
          100: '#fbece5',
          200: '#f6d6c8',
          300: '#efb8a1',
          400: '#e4906e',
          500: '#d76d44',
          600: '#c35329',
          700: '#a3411e',
          800: '#86381d',
          900: '#6e311c',
        }
      }
    }
  },
  plugins: [],
}
