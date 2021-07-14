// ch05-optimization/02-production-minimize/production-mode/webpack.config.js
module.exports = ['none', 'production'].map((mode) => ({
  mode,
  output: {
    filename: `${mode}.js`,
  },
}));
