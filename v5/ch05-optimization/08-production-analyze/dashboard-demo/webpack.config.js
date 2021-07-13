// ch04-real-world/08-production-analyze/dashboard-demo/webpack.config.js
const WebpackDashboardPlugin = require('webpack-dashboard/plugin');

module.exports =
  // [
  {
    mode: 'none',
    entry: {
      main: ['./src/index.js', './src/index2.js'],
      sub: './src/sub.js',
    },
    plugins: [new WebpackDashboardPlugin()],
  };
// ,{
//     mode: 'none',
//     entry: {
//         main: ['./src/index.js', './src/index2.js'],
//         sub: './src/sub.js'
//     }
// }]
