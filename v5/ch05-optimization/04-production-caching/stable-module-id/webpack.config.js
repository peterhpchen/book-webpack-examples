// ch05-optimization/04-production-caching/stable-module-id/webpack.config.js
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
    moduleIds: 'deterministic',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlInlineScriptPlugin([/runtime~.+[.]js$/]),
  ],
  stats: {
    ids: true,
  },
};
