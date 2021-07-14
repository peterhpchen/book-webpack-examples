// ch05-optimization/05-production-analyze/performance/webpack.config.js
module.exports = {
  mode: 'none',
  performance: {
    hints: 'warning',
    maxEntrypointSize: 100,
    maxAssetSize: 100,
  },
};
