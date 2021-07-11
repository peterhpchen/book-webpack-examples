// ch04-real-world/09-config-setup/merge/config/webpack.prod.conf.js
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
});
