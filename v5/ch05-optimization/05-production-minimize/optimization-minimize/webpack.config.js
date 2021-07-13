// ch04-real-world/05-production-minimize/optimization-minimize/webpack.config.js
const TerserWebpackPlugin = require('terser-webpack-plugin');
// const ClosureWebpackPlugin = require("closure-webpack-plugin"); // 2.5.0 will be broken in webpack 5
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = [
  { name: 'terser', plugin: TerserWebpackPlugin },
  // { name: "closure", plugin: ClosureWebpackPlugin },
  { name: 'esbuild', plugin: ESBuildMinifyPlugin },
].map((minimizer) => ({
  mode: 'none',
  output: {
    filename: `${minimizer.name}.js`,
  },
  optimization: {
    minimize: true,
    minimizer: [new minimizer.plugin()],
  },
}));
