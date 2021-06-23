// ch03-configuration/01-configuration-object/node-api/build.js
const webpack = require('webpack');
const path = require('path');

webpack(
  {
    // Configuration Object
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index2.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
    },
  },
  (err, stats) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stats.toString({ colors: true }));
  }
);
