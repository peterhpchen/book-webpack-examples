// ch03-configuration/11-optimization/side-effects/webpack.config.js
module.exports = [false, true].map((sideEffects) => ({
  mode: 'none',
  output: {
    filename: `${sideEffects}.js`,
  },
  optimization: {
    sideEffects,
  },
}));
