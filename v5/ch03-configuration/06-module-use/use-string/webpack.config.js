// ch03-configuration/06-module-use/use-string/webpack.config.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      {
        test: /\.js$/,
        use: path.resolve(__dirname, 'loader'),
      },
    ],
  },
};
