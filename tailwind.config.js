/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#c9cbcb',
          100: '#b7b9ba',
          200: '#a6a8a9',
          300: '#828587',
          400: '#5e6264',
          500: '#4c5053',
          600: '#2f3033',
          700: '#28292c',
          800: '#202124',
          900: '#1c1c1f',
        },
        page: {
          200: '#f5f5f5',
          500: '#e5e5e5',
        },
        beige: '#fbf8ef',
        brown: '#c4c0b1',

      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none"
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "-scrollbar-width": "none"
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

