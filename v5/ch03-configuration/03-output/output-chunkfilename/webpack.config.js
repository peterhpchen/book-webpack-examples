// ch03-configuration/03-output/output-chunkfilename/webpack.config.js
module.exports = {
  output: {
    chunkFilename: '[id].chunk.js',
  },
  stats: {
    ids: true,
  },
};
