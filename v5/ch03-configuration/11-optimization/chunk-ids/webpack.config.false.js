// ch03-configuration/11-optimization/chunk-ids/webpack.config.js
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  plugins: [
    new webpack.ids.DeterministicChunkIdsPlugin({
      maxLength: 5,
    }),
  ],
  stats: {
    ids: true,
    modules: false,
  },
};
