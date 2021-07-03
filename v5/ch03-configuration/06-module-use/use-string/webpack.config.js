// ch03-configuration/06-module-use/use-string/webpack.config.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.png$/,
        use: 'file-loader',
      },
      {
        test: /\.js$/,
        use: path.resolve(__dirname, 'loader'),
      },
    ],
  },
};
