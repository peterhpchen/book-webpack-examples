// ch03-configuration/07-plugins/plugin-copy/webpack.config.js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
};
