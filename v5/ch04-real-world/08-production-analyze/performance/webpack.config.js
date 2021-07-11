// ch04-real-world/08-production-analyze/performance/webpack.config.js
module.exports = {
  mode: 'none',
  performance: {
    hints: 'warning',
    maxEntrypointSize: 100,
    maxAssetSize: 100,
  },
};
