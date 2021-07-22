// ch04-real-world/05-module-federation/host-and-remote/remote/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  output: {
    publicPath: 'http://localhost:3002/',
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './name': './src/name.js',
      },
    }),
    new HtmlWebpackPlugin(),
  ],
};
