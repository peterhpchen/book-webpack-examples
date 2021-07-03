// ch03-configuration/04-resolve/resolve-main-fields/webpack.config.js
const path = require('path');

module.exports = {
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
  stats: {
    orphanModules: true,
  },
};
