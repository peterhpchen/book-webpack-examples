// examples/v5/ch03-configuration/06-module-use/use-func/webpack.config.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: (info) => console.log(info) || [path.resolve(__dirname, 'loader')],
      },
    ],
  },
};
