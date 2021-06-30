// ch03-configuration/02-entry/entry-object-object-array/webpack.config.demo.js
module.exports = {
  entry: {
    main2: {
      import: ['./app/index.js', './app/index2.js'],
    },
  },
};
