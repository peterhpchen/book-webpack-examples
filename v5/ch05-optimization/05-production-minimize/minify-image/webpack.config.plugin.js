// ch04-real-world/05-production-minimize/minify-image/webpack.config.plugin.js
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'none',
  output: {
    filename: 'plugin.js',
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 0,
          },
        },
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [['optipng']],
      },
    }),
  ],
};
