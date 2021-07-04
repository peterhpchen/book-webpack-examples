// ch03-configuration/11-optimization/module-ids/webpack.config.js
module.exports = [
  // 'natural',
  // 'named',
  // 'deterministic',
  'size',
].map((moduleIds) => ({
  mode: 'none',
  output: {
    filename: `${moduleIds}.js`,
  },
  optimization: {
    moduleIds,
  },
  stats: {
    ids: true,
  },
}));
