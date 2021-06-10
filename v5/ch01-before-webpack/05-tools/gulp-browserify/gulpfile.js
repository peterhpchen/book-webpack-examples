// ch01-before-webpack/05-tools/gulp-browserify/gulpfile.js
var { series, dest } = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var connect = require('gulp-connect');

function bundle(cb) {
  browserify('main.js').bundle().pipe(source('bundle.js')).pipe(dest('./'));
  cb();
}

function devServer(cb) {
  connect.server({ port: 8082 });
}

exports.default = series(bundle, devServer);
