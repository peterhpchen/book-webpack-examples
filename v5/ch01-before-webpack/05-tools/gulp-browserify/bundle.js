(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function add(a, b) {
  return a + b;
}

module.exports = add;

},{}],2:[function(require,module,exports){
function divide(a, b) {
  return a / b;
}

module.exports = divide;

},{}],3:[function(require,module,exports){
// ch01-before-webpack/05-tools/browserify/main.js
var add = require('./add.js');
var subtract = require('./subtract.js');
var multiply = require('./multiply.js');
var divide = require('./divide.js');

console.log(add(5, subtract(4, multiply(3, divide(2, 1)))));

},{"./add.js":1,"./divide.js":2,"./multiply.js":4,"./subtract.js":5}],4:[function(require,module,exports){
function multiply(a, b) {
  return a * b;
}

module.exports = multiply;

},{}],5:[function(require,module,exports){
function subtract(a, b) {
  return a - b;
}

module.exports = subtract;

},{}]},{},[3]);
