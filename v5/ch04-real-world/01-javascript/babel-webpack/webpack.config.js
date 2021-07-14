// ch04-real-world/01-javascript/babel-webpack/webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
