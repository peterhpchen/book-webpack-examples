// ch03-configuration/02-entry/entry-object-object-filename/webpack.config.demo.js
module.exports = {
  mode: 'development',
  entry: {
    app: {
      import: './app/index.js',
      filename: 'hello/world.js',
    },
  },
};
