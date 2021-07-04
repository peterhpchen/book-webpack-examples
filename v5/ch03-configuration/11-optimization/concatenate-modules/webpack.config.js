// ch03-configuration/11-optimization/concatenate-modules/webpack.config.js
module.exports = [false, true].map((concatenateModules) => ({
  mode: 'none',
  output: {
    filename: `${concatenateModules}.js`,
  },
  optimization: {
    concatenateModules,
  },
}));
