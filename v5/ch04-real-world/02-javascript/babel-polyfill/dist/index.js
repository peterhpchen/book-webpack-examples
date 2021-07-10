"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// ch04-real-world/02-javascript/babel-polyfill/src/index.js
var add = function add(a, b) {
  // ES2015: Arrow Function
  return a + b;
};

var addAsync = function addAsync(a, b) {
  return new Promise(function (resolve, reject) {
    resolve(a + b);
  });
};

var _default = {
  add: add,
  addAsync: addAsync
};
exports.default = _default;