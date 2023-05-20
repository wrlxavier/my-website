/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "FiraCode": ['Fira Code', 'monospace'],
      },
      colors: {
        "_white": "#FEFEFE",
        "_white-smoke": "#E0E8F0",
        "_blue": "#00BFFF",
        "_black": "#0B101B",
        "_black2": "#151A24",
        "_graphite": "#21252F",
        "_safira": "#0F52BA"
      }
    },
  },
  plugins: [],
}

