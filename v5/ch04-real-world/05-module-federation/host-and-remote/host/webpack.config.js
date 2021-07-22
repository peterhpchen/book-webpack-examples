// ch04-real-world/05-module-federation/host-and-remote/host/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  output: {
    publicPath: 'http://localhost:3001/',
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_host',
      remotes: {
        app_remote: 'app_remote@http://localhost:3002/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin(),
  ],
};
