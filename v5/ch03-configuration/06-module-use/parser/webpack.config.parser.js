// ch03-configuration/06-module-use/parser/webpack.config.parser.js
module.exports = {
  mode: 'none',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        parser: {
          harmony: false,
        },
      },
    ],
  },
};
