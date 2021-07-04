// ch03-configuration/11-optimization/flag-included-chunks/webpack.config.js
const path = require('path');

module.exports = [false, true].map((flagIncludedChunks) => ({
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist', `${flagIncludedChunks}`),
  },
  optimization: {
    chunkIds: 'named',
    flagIncludedChunks,
  },
  stats: {
    ids: true,
    modules: false,
  },
}));
