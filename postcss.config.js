const purgecss = require('@fullhuman/postcss-purgecss')({

  content: [
    './site/**/*.html',
    './site/**/*.njk',
    './site/**/*.md'
  ],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ]
}