/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif']
      },
      margin: {
        'auto': 'auto',
      },
      colors: {
        'primary-color': '#1B2028',
        'blue-color': '#495BFF',
        'primary-text-color': '#EEEBFE',
        'secondary-text-color': '#8F8D98',
        'golden-color': '#F3B164',
        'green-color': '#7AD1B3',
      }
    },
  },
  plugins: [],
}

