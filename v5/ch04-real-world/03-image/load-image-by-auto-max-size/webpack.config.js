// ch04-real-world/03-image/load-image-by-auto-max-size/webpack.config.js
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 36 * 1024, // 36kb
          },
        },
      },
    ],
  },
};
