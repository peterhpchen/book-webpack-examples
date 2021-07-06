// ch03-configuration/12-configuration-types/parallelism/webpack.config.js
const path = require('path');

module.exports = [
  {
    name: 'dev',
    mode: 'development',
    entry: './src/index2.js',
  },
  {
    name: 'prod',
    mode: 'production',
    entry: './src/index2.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
  },
];
module.exports.parallelism = 1;
