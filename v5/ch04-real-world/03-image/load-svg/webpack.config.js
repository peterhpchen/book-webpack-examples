// ch04-real-world/03-image/load-svg/webpack.config.js
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/source',
      },
    ],
  },
};
