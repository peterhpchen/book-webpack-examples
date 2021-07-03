// ch03-configuration/05-module/rules-exclude/webpack.config.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'exclude: /.js$/' },
          },
        ],
      },
    ],
  },
};
