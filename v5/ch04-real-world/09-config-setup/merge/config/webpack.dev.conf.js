// ch04-real-world/09-config-setup/merge/config/webpack.dev.conf.js
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
});
