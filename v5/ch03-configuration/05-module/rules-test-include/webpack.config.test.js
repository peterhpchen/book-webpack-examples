// ch03-configuration/05-module/rules-test-include/webpack.config.test.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'test' },
          },
        ],
      },
    ],
  },
};
