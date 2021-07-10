// ch04-real-world/04-image/load-image-by-url/webpack.config.js
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/inline',
      },
    ],
  },
};
