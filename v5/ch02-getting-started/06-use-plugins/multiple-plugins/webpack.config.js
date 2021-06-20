// ch02-getting-started/06-use-plugins/multiple-plugins/webpack.config.js
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CompressionWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
};
