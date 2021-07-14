// ch05-optimization/03-production-code-splitting/entry/webpack.config.js
module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.js',
    sub: './src/sub.js',
  },
  stats: {
    modules: false,
  },
};
