const SHADES = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const colorVar =
  (cssVariable) =>
  ({ opacityValue } = {}) =>
    opacityValue === undefined
      ? `rgb(var(${cssVariable}) / 1)`
      : `rgb(var(${cssVariable}) / ${opacityValue})`;

const colorScale = (name) =>
  Object.fromEntries(
    SHADES.map((shade) => [shade, colorVar(`--site-color-${name}-${shade}`)])
  );

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      inset: {
        4: '1rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        '5vw': '5vw',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: colorScale('gray'),
      red: colorScale('red'),
      orange: colorScale('orange'),
      yellow: colorScale('yellow'),
      green: colorScale('green'),
      teal: colorScale('teal'),
      blue: colorScale('blue'),
      indigo: colorScale('indigo'),
      purple: colorScale('purple'),
      pink: colorScale('pink'),
    },
  },
  variants: {},
  plugins: [],
};
