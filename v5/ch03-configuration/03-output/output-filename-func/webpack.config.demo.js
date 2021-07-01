// ch03-configuration/03-output/output-filename-func/webpack.config.demo.js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename(chunkData) {
      return chunkData.chunk.name === 'main'
        ? 'main.js'
        : `bundle.${chunkData.chunk.name}.js`;
    },
  },
};
