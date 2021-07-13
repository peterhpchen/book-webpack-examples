// ch04-real-world/01-development/auto-create-html/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin()],
};
