// ch04-real-world/05-production-minimize/css-minimize/webpack.config.js
module.exports = [false, true].map((isProcessByPostCSS) => ({
  mode: 'none',
  output: {
    filename: `${isProcessByPostCSS}.js`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'].filter((loader) =>
          loader === 'postcss-loader' ? isProcessByPostCSS : true
        ),
      },
    ],
  },
}));
