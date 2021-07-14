// ch05-optimization/04-production-caching/extract-dependency/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  output: {
    filename: '[name].[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new HtmlWebpackPlugin()],
  stats: {
    ids: true,
  },
};
