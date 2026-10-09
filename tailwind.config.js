/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F4ECE1',
          300: '#EBDDCC',
          DEFAULT: '#FAF6F0',
        },
        blush: {
          50: '#FDF7F8',
          100: '#F9ECEE',
          200: '#F4D8DC',
          300: '#EABEC5',
          400: '#DD9DA7',
          500: '#C97785',
          DEFAULT: '#F9ECEE',
        },
        gold: {
          50: '#FAF7EE',
          100: '#F3ECD2',
          200: '#E6D7A4',
          300: '#D5BE73',
          400: '#C5A059',
          500: '#B2883F',
          600: '#926A2D',
          DEFAULT: '#C5A059',
        },
        rosewood: {
          500: '#9E2A2B',
          600: '#871D2F',
          700: '#731627',
          800: '#5C0F1E',
          900: '#470A15',
          DEFAULT: '#871D2F',
        },
        charcoal: {
          700: '#3D3A3A',
          800: '#2A2727',
          900: '#1C1A1A',
          DEFAULT: '#2A2727',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(135, 29, 47, 0.08)',
        'card': '0 14px 34px -10px rgba(42, 39, 39, 0.06), 0 2px 8px -2px rgba(197, 160, 89, 0.08)',
        'hover': '0 20px 40px -12px rgba(135, 29, 47, 0.15)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
      }
    },
  },
  plugins: [],
}
