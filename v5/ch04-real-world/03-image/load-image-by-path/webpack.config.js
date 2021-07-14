// ch04-real-world/03-image/load-image-by-path/webpack.config.js
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
    ],
  },
};
