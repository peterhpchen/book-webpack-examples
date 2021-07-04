// ch03-configuration/11-optimization/node-env/webpack.config.default.js
module.exports = ['none', 'development', 'production'].map((nodeEnv) => ({
  mode: nodeEnv,
  output: {
    filename: `mode_${nodeEnv}.js`,
  },
}));
