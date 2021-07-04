// ch03-configuration/11-optimization/module-ids/webpack.config.js
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  output: {
    filename: 'false.js',
  },
  optimization: {
    moduleIds: false,
  },
  plugins: [
    new webpack.ids.DeterministicModuleIdsPlugin({
      maxLength: 5,
    }),
  ],
  stats: {
    ids: true,
  },
};
