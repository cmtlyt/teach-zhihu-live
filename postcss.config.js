/** @type {import('postcss').Config} */

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 10,
      mediaQuery: false,
      selectorBlackList: [':root'],
      propList: ['*'],
    },
    'postcss-preset-env': {},
    cssnano: {},
  },
}
