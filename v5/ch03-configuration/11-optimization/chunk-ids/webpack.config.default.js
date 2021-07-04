// ch03-configuration/11-optimization/chunk-ids/webpack.config.js
module.exports = {
  mode: 'none',
  stats: {
    ids: true,
    modules: false,
  },
};
