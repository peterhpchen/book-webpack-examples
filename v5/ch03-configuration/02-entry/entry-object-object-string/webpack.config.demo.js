// ch03-configuration/02-entry/entry-object-object-string/webpack.config.demo.js
module.exports = {
  entry: {
    main: {
      import: './app/index.js',
    },
    main2: {
      import: './app/index2.js',
    },
  },
};
