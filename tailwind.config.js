module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        rotator_first: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        rotator_second: {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fade_in: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        rotator_first: 'rotator_first 1s forwards',
        rotator_second: 'rotator_second 1s forwards',
        fade_in: 'fade_in ease forwards'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
