/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    clean: false,
    path: path.resolve(__dirname, '../public'),
    filename: 'mock-system.js',
    library: 'mockSystem',
    libraryTarget: 'umd',
    globalObject: 'self',
  },
}
