// ch02-getting-started/04-use-webpack/config-file/webpack.config.dev.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index2.js'),
  output: {
    path: path.resolve(__dirname, 'dev'),
  },
};
