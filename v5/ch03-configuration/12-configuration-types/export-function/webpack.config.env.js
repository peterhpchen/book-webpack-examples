// ch03-configuration/12-configuration-types/export-function/webpack.config.env.js
const path = require('path');

module.exports = (env, argv) => {
  console.log(env);
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/index2.js',
    output: env.production
      ? {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'build'),
        }
      : {},
  };
};
