// ch03-configuration/11-optimization/chunk-ids/webpack.config.js
const path = require('path');

module.exports = [
  'natural',
  'named',
  'deterministic',
  'size',
  'total-size',
].map((chunkIds) => ({
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist', chunkIds),
  },
  optimization: {
    chunkIds,
  },
  stats: {
    ids: true,
    modules: false,
  },
}));
