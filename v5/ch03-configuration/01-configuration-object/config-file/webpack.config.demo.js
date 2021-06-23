// ch03-configuration/01-configuration-object/config-file/webpack.config.demo.js
const path = require('path');

module.exports = {
  // Configuration Object
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index2.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
};
