// ch04-real-world/03-image/load-image-by-auto/webpack.config.js
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset',
      },
    ],
  },
};
