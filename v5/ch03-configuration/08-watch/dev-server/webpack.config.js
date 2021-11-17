// ch03-configuration/08-watch/dev-server/webpack.config.js
module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
    static: './dist',
  },
};
