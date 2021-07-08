const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const configurationObject = {
  plugins: [new CompressionPlugin()],
};

webpack(configurationObject, () => {});
