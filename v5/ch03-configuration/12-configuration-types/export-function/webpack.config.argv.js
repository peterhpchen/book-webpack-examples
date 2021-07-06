// ch03-configuration/12-configuration-types/export-function/webpack.config.argv.js
const path = require('path');

module.exports = (env, argv) => {
  console.log(argv);
  return {
    mode: argv.mode,
    entry: './src/index2.js',
    output:
      argv.mode === 'production'
        ? {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
          }
        : {},
  };
};
