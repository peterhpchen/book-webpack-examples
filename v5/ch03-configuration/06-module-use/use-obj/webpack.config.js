// ch03-configuration/06-module-use/use-obj/webpack.config.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, 'loader'),
          options: {
            name: 'a',
          },
        },
      },
    ],
  },
};
