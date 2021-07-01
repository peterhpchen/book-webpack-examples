// ch03-configuration/03-output/output-default/webpack.config.demo.js
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
