// ch04-real-world/07-production-caching/update-caching/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  output: {
    filename: '[name].[fullhash].js',
  },
  plugins: [new HtmlWebpackPlugin()],
};
