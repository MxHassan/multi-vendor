import withMT from '@material-tailwind/react/utils/withMT'
export default withMT({
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      screens: {
        '400px': '400px',
        '800px': '800px',
        '1000px': '1050px',
        '1100px': '1110px',
        '1300px': '1300px'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            // transform: 'translateY(-20px)',
            opacity: 0
          },
          '100%': {
            // transform: 'translateY(5px)',
            opacity: 1
          }
        },
        'fade-out': {
          '0%': {
            // transform: 'translateY(-20px)',
            opacity: 1
          },
          '100%': {
            // transform: 'translateY(5px)',
            opacity: 0
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-in-out forwards',
        'fade-out': 'fade-out 0.2s ease-in-out forwards'
      }
    }
  },
  plugins: []
})
