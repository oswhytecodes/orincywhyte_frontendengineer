module.exports = {
 
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    container: {
      center:true,
      padding: '1rem',
    }, 
    colors: {
'accentgreen': '#66da42',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1124px',
      xl: '1124px',
      '2xl': '1124px',
    },
    fontFamily: {
      cursive: ['Sacramento','cursive'],
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
  ],
}