// ch04-real-world/03-style/postcss-webpack-loader/webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
};
