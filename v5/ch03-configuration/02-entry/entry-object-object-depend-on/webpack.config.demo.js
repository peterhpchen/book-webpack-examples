// ch03-configuration/02-entry/entry-object-object-depend-on/webpack.config.demo.js
module.exports = {
  mode: 'development',
  entry: {
    main: {
      import: './app/index.js',
      dependOn: 'common',
    },
    main2: {
      import: './app/index2.js',
      dependOn: 'common',
    },
    common: './app/msgCommon.js',
  },
};
