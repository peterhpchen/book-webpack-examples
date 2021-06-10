// ch01-before-webpack/05-tools/gulp-example/gulpfile.js
const { series } = require('gulp');

function prestart(cb) {
  console.log('Before npm start');
  cb();
}

function start(cb) {
  console.log('Hello npm start');
  cb();
}

function poststart(cb) {
  console.log('After npm start');
  cb();
}

function start2(cb) {
  console.log('Hello npm run start2');
  cb();
}

function poststart2(cb) {
  console.log('After npm run start2');
  cb();
}

exports.start = series(prestart, start, poststart);
exports.start2 = series(prestart, start2, poststart2);
