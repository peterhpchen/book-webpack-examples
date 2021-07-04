// ch03-configuration/11-optimization/module-ids/webpack.config.js
module.exports = {
  mode: 'none',
  output: {
    filename: 'default.js',
  },
  stats: {
    ids: true,
  },
};
