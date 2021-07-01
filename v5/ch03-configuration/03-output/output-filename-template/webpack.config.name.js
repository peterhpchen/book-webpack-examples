// ch03-configuration/03-output/output-filename-template/webpack.config.name.js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: '[name].js',
  },
};
