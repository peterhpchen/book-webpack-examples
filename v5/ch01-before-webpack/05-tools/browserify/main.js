// ch01-before-webpack/05-tools/browserify/main.js
var add = require('./add.js');
var subtract = require('./subtract.js');
var multiply = require('./multiply.js');
var divide = require('./divide.js');

console.log(add(5, subtract(4, multiply(3, divide(2, 1)))));
