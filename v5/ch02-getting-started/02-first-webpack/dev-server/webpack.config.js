// ch02-getting-started/02-first-webpack/dev-server/webpack.config.js
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public') }],
    }),
  ],
};
