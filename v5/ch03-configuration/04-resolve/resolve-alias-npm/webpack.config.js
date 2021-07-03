// ch03-configuration/04-resolve/resolve-alias-npm/webpack.config.js
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  stats: {
    orphanModules: true,
  },
};
