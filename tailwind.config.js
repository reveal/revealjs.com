module.exports = {
  purge: [
    './site/**/*.html',
    './site/**/*.njk',
    './site/**/*.md',
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