// ch05-optimization/04-production-caching/extract-runtime/webpack.config.js
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
    runtimeChunk: true,
  },
  plugins: [new HtmlWebpackPlugin()],
  stats: {
    ids: true,
  },
};
