// ch01-before-webpack/02-history-of-js-module/iife/index.js
var outputStr = 'Hello, world!';

var output = (function (innerOutputStr) {
  return function () {
    console.log(innerOutputStr);
  };
})(outputStr);
