// ch04-real-world/02-style/postcss-style-loader/webpack.config.js
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
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
