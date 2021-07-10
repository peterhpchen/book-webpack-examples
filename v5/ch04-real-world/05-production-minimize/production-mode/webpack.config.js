// ch04-real-world/05-production-minimize/production-mode/webpack.config.js
module.exports = ['none', 'production'].map((mode) => ({
  mode,
  output: {
    filename: `${mode}.js`,
  },
}));
