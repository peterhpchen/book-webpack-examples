// ch03-configuration/03-output/output-filename-multi/webpack.config.demo.js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: 'bundle.[name].js',
  },
};
