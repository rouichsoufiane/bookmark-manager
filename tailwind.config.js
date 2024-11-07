/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      'display': ['Rubik', 'sans-serif']
    },
    extend: {
      colors:{
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
        veryLightGray: 'hsl(0, 0%, 97%)',
        lightGray: 'hsl(240, 16%, 90%)'
      }
    },
  },
  plugins: [],
}
