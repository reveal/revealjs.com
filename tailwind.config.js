module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
  ],
  theme: {
    extend: {
      inset: {
        '4': '1rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '5vw': '5vw'
      }
    }
  },
  variants: {},
  plugins: [],
}