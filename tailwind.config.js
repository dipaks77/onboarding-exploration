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
        'royal-blue': '#664de5',
        'white-lilac': '#f8f9fc'
      },
      screens: {
        xxsm: '320px',
        'xxsm-358': '358px',
        xsm: '375px',
        'xsm-386px': '386px',
        sm: '410px', // mobile
        m: '480px', // tablet
        xm: '544px',
        'xm-590px': '590px',
        xxm: '632px',
        'xxm-700px': '700px',
        'xxm-760px': '760px',
        'xxm-860px': '860px',
        xxxm: '940px',
        lg: '1098px',
        xlg: '1240px',
        'xlg-1275': '1275px',
        xxlg: '1320px',
        'xxlg-1340': '1340px',
        'xxlg-1400px': '1400px',
        xxxlg: '1468px',
        g: '1660px',
        xg: '1725px',
        xxg: '1850px',
        xxxg: '2000px',
      }
    },
  },
  plugins: [],
}
