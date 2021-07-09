// ch04-real-world/01-development/dev-server/webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};
