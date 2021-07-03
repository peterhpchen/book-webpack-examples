// ch03-configuration/05-module/rules-test-include/webpack.config.include.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        include: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'include' },
          },
        ],
      },
    ],
  },
};
