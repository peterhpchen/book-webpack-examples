// ch02-getting-started/06-use-plugins/use-config/webpack.config.js
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [
    // config plugin
    new CompressionPlugin(), // new plugin
  ],
};
