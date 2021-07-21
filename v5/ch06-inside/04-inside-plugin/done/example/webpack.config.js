const path = require('path');
const Plugin = require('../src');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new Plugin()],
};
