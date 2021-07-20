// ch06-inside/03-inside-loader/multiple/example/webpack.config.js
const path = require('path');

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
        use: [
          path.resolve(__dirname, '..', 'src'),
          path.resolve(__dirname, '..', 'src'),
        ],
      },
    ],
  },
};
