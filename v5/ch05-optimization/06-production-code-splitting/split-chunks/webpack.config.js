// ch04-real-world/06-production-code-splitting/split-chunks/webpack.config.js
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
