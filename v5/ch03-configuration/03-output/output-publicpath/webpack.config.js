// ch03-configuration/03-output/output-publicpath/webpack.config.js
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build/js'),
    publicPath: '/js/',
  },
};
