/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // color name source => https://chir.ag/projects/name-that-color/#6195ED
        'catskill-white': '#E9EDF5',
        'royal-blue': '#664de5'
      },
    },
  },
  plugins: [],
}
