// ch02-getting-started/07-use-dev-server/dev-server-config/webpack.config.js
const CopyPlugin = require('copy-webpack-plugin');
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
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public') }],
    }),
  ],
  devServer: {
    port: 9000,
    hot: true,
    watchContentBase: true,
  },
};
