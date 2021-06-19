// ch02-getting-started/04-use-webpack/config-file/webpack.config.js
console.log(__filename);

const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index2.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
};
