/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
      },
      boxShadow: {
        'goal': '0px 0px 10px 1px #000000'
      },
      backgroundColor: {
        'nav': '#180236',
        'main': '#D0D0D0'
      },
      margin: {
        '41': '10.25rem',
        '42': '10.5rem',
        '43': '10.75rem'
      },
      colors: {
        'main-h': '#180236',
        'nav': '#f3f3ab'
      }
    },
    plugins: [],
  }
}