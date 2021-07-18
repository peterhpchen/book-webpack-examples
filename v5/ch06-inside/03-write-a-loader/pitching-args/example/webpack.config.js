// ch06-inside/03-write-a-loader/pitching-args/example/webpack.config.js
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
          {
            loader: path.resolve(__dirname, '..', 'src'),
            options: { name: 'a' },
          },
          {
            loader: path.resolve(__dirname, '..', 'src'),
            options: { name: ' b', log: true },
          },
          {
            loader: path.resolve(__dirname, '..', 'src'),
            options: { name: '  c' },
          },
        ],
      },
    ],
  },
};
