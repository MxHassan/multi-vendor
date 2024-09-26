import lightTheme from './src/themes/lightTheme'
import darkTheme from './src/themes/darkTheme'
import withMT from '@material-tailwind/react/utils/withMT'
import daisyui from 'daisyui'
import tailwindScrollbar from 'tailwind-scrollbar'
export default withMT({
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        light: lightTheme,
        dark: darkTheme
      },
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
        'fade-in-img': {
          '0%': {
            // transform: 'translateY(-20px)',
            opacity: 0.7
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
        },
        'spin-out': {
          '0%': {
            transform: 'rotate(2turn) scale(1)',
            opacity: 1
          },
          '95%': {
            transform: 'rotate(0deg) scale(0)',
            opacity: 0
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-in-out forwards',
        'fade-in-img': 'fade-in 0.5s ease-in-out forwards',
        'fade-out': 'fade-out 0.3s ease-in-out forwards',
        'spin-out': 'spin-out 0.3s ease-out forwards'
      }
    }
  },
  plugins: []
})
