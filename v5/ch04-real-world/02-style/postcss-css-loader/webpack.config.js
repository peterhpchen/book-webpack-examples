// ch04-real-world/02-style/postcss-css-loader/webpack.config.js
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
};
