// ch05-optimization/01-development/hmr/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin()],
};
