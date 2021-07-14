// ch04-real-world/04-config-setup/merge/config/webpack.base.conf.js
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
