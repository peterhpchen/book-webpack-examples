// ch03-configuration/13-use-node-api/node-interface-error-handling/build.js
const webpack = require('webpack');

const callbackFunction = (err, stats) => {
  if (err) {
    console.log('\n-----Fatal Errors-----\n');
    // console.error(err.stack || err);
    // if (err.details) {
    //   console.error(err.details);
    // }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.log('\n-----Compilation Errors-----\n');
    // 編譯過程發生錯誤
    // info.errors.forEach((error) => {
    //   console.error(error);
    // });
  }

  if (stats.hasWarnings()) {
    console.log('\n-----Compilation Warnings----\n');
    // 編譯過程發生警告
    // info.warnings.forEach((warning) => {
    //   console.warn(warning);
    // });
  }
};

const fatalError = { wrong: 'error' };
webpack(fatalError, callbackFunction);

const compilationError = { mode: 'production', entry: 'error' };
webpack(compilationError, callbackFunction);

const compilationWarning = {};
webpack(compilationWarning, callbackFunction);
