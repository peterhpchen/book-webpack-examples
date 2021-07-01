// ch03-configuration/03-output/output-filename-template/webpack.config.fullhash.js
module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[fullhash].js',
  },
};
