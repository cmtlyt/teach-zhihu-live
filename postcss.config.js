/** @type {import('postcss').Config} */

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 10,
      mediaQuery: false,
      selectorBlackList: [],
      propList: ['*'],
    },
    'postcss-preset-env': {},
    cssnano: {},
  },
}
