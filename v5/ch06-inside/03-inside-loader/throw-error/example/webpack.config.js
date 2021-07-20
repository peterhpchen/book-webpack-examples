const path = require('path');
const { PassThrough } = require('stream');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: path.resolve(__dirname, '..', 'src'),
      },
    ],
  },
};
