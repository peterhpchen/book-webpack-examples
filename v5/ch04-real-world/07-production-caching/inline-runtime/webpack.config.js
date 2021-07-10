// ch04-real-world/07-production-caching/inline-runtime/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

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
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlInlineScriptPlugin([/runtime~.+[.]js$/]),
  ],
};
