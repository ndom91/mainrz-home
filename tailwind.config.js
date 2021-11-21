module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        mono:
          'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      animation: {
        fadeIn: 'fadeIn 450ms ease-in-out forwards',
        fade: 'fade 250ms ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fade: {
          '0%': { opacity: 0, visibility: 'hidden' },
          '100%': { opacity: 1, visibility: 'visible' },
        },
      },
      boxShadow: {
        'lg-green': '0 10px 15px -2px rgba(103, 178, 70, 0.1)',
      },
      colors: {
        newtelcoTwo: {
          100: '#f2fbbf',
          200: '#deed8e',
          300: '#c1d476',
          400: '#9cb55a',
          500: '#67b246',
          600: '#397322',
          700: '#0c502a',
          800: '#002f23',
          900: '#00141',
        },
        newtelco: {
          900: '#164b16',
          800: '#1c571a',
          700: '#2b7024',
          600: '#3c852d',
          500: '#519d39',
          400: '#67b347',
          300: '#7dc766',
          200: '#99d88d',
          100: '#b7e6b2',
          50: '#dcf5dc',
        },
        gray: {
          100: '#f6f6f6',
          200: '#e4e4e4',
          300: '#cbcbcb',
          400: '#ababab',
          500: '#898989',
          600: '#666666',
          700: '#454545',
          800: '#292929',
          900: '#0d0d0d',
        },
      },
      height: {
        120: '38rem',
        140: '62rem',
      },
      width: {
        130: '130vw',
        120: '120%',
      },
      rotate: {
        z60: 'rotate3d(0, 1, 0, 60deg)',
        y30: 'rotateY(-30deg)',
      },
    },
  },
  variants: {
    animation: ['motion-safe'],
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
