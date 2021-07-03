// ch03-configuration/04-resolve/mainfiles/webpack.config.main.js
module.exports = {
  resolve: {
    mainFiles: ['main', 'index'],
  },
  stats: {
    orphanModules: true,
  },
};
