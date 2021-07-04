// ch03-configuration/11-optimization/node-env/webpack.config.js
module.exports = ['development', 'production'].map((nodeEnv) => ({
  mode: 'none',
  output: {
    filename: `${nodeEnv}.js`,
  },
  optimization: {
    nodeEnv,
  },
}));
