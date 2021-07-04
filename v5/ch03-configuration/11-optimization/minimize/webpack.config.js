// ch03-configuration/11-optimization/minimize/webpack.config.js
module.exports = [false, true].map((minimize) => ({
  mode: 'none',
  output: {
    filename: `${minimize}.js`,
  },
  optimization: {
    minimize,
  },
}));
