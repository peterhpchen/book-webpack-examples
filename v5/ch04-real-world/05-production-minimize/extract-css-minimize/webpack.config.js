// ch04-real-world/05-production-minimize/extract-css-minimize/webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [false, true].map((isProcessByPostCSS) => ({
  mode: 'none',
  output: {
    filename: `${isProcessByPostCSS}.js`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ].filter((loader) =>
          loader === 'postcss-loader' ? isProcessByPostCSS : true
        ),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${isProcessByPostCSS}.css`,
    }),
  ],
}));
