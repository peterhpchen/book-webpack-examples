// ch04-real-world/04-config-setup/chain/config/webpack.base.conf.js
const WebpackConfig = require('webpack-chain');

const webpackConfig = new WebpackConfig();

webpackConfig.module
  .rule('js')
  .test(/\.js$/)
  .use('babel')
  .loader('babel-loader');

module.exports = webpackConfig;
