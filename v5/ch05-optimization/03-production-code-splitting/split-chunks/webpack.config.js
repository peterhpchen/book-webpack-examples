// ch05-optimization/03-production-code-splitting/split-chunks/webpack.config.js
module.exports = {
  mode: 'none',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: {
    ids: true,
  },
};
