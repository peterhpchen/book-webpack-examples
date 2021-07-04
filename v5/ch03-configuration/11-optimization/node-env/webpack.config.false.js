// ch03-configuration/11-optimization/node-env/webpack.config.false.js
module.exports = ['none', 'development', 'production'].map((nodeEnv) => ({
  mode: nodeEnv,
  output: {
    filename: `false_${nodeEnv}.js`,
  },
  optimization: {
    nodeEnv: false,
  },
}));
