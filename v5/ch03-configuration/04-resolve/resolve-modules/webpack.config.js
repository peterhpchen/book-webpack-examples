// ch03-configuration/04-resolve/resolve-modules/webpack.config.js
const path = require('path');

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  stats: {
    orphanModules: true,
  },
};
