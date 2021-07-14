// ch05-optimization/04-production-caching/extract-dependency/webpack.config.fullhash.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  output: {
    filename: '[name].[fullhash].js', // Modify index.js, the hash of vendor also changed
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new HtmlWebpackPlugin()],
};
