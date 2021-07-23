// ch05-optimization/02-production-minimize/minify-image/webpack.config.js
module.exports = [false, true].map((isCompress) => ({
  mode: 'none',
  output: {
    filename: `${isCompress}.js`,
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        use: ['image-webpack-loader'].filter((entry) =>
          entry === 'image-webpack-loader' ? isCompress : true
        ),
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 0,
          },
        },
      },
    ],
  },
  stats: {
    modules: false,
  },
}));
