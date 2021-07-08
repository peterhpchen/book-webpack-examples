// ch03-configuration/13-use-node-api/node-plugins/build.js
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const compiler = webpack({});
new CompressionPlugin().apply(compiler);
compiler.run(() => {});
