// ch04-real-world/05-production-minimize/optimization-node-env/webpack.config.js
module.exports = {
  mode: 'none',
  optimization: {
    nodeEnv: 'production',
    minimize: true,
  },
};
