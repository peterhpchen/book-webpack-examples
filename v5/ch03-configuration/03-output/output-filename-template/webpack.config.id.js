// ch03-configuration/03-output/output-filename-template/webpack.config.id.js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: '[id].js',
  },
  stats: {
    ids: true,
  },
};
