// ch01-before-webpack/02-history-of-js-module/iife/index.js
var output = (function () {
  var outputStr = 'Hello, world!';

  return function output() {
    console.log(outputStr);
  };
})();
