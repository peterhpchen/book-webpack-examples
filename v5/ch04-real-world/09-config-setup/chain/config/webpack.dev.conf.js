// ch04-real-world/09-config-setup/chain/config/webpack.dev.conf.js
const webpackConfig = require('./webpack.base.conf');

webpackConfig.module
  .rule('js')
  .use('babel')
  .loader('babel-loader')
  .tap((options) => options);

webpackConfig.mode('development');

module.exports = webpackConfig.toConfig();
