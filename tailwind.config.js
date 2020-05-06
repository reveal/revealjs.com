module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
  ],
  theme: {
    extend: {
      inset: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
    }
  },
  variants: {},
  plugins: [],
}