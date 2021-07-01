// ch03-configuration/03-output/output-path/webpack.config.demo.js
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
  },
};
