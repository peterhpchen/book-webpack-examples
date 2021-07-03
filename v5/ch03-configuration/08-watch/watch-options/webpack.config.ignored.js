// ch03-configuration/08-watch/watch-options/webpack.config.ignored.js
module.exports = {
  watch: true,
  watchOptions: {
    // ignored: /ignore/,
    // ignored: '**/ignore/**/*.js',
    ignored: ['**/ignore/**/*.js', 'node_modules/**'],
  },
};
