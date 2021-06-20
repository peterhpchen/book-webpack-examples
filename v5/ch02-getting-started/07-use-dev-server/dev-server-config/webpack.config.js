// ch02-getting-started/07-use-dev-server/dev-server-config/webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    watchContentBase: true,
  },
};
