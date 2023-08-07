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
        'bg-primary': '#212121',
      }
    },
  },
  plugins: [],
}

