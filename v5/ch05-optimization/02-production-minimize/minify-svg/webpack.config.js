// ch05-optimization/02-production-minimize/minify-svg/webpack.config.js
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = [false, true].map((isCompress) => ({
  mode: 'none',
  output: {
    filename: `${isCompress}.js`,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['image-webpack-loader'],
        type: 'asset',
        generator: {
          dataUrl: isCompress
            ? (content) => {
                content = content.toString();
                return svgToMiniDataURI(content);
              }
            : {},
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
}));
