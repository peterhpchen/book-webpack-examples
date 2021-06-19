// ch02-getting-started/04-use-webpack/cli-plus-file/webpack.config.prod.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index2.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
};
