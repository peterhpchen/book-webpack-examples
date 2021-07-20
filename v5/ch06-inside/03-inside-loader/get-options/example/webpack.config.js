// ch06-inside/03-inside-loader/get-options/example/webpack.config.js
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
        use: {
          loader: path.resolve(__dirname, '..', 'src'),
          options: {
            comment: 'Hello, loader!',
          },
        },
      },
    ],
  },
};
