// ch03-configuration/06-module-use/use-short/webpack.config.short.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: path.resolve(__dirname, 'loader'),
        options: {
          name: 'a',
        },
      },
    ],
  },
};
