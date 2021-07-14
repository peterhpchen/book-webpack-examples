// ch05-optimization/02-production-minimize/css-minimize/webpack.config.js
// Not work, details in https://github.com/webpack-contrib/css-minimizer-webpack-plugin/issues/80
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'none',
  output: {
    filename: 'plugin.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
