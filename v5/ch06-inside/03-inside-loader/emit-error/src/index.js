// ch06-inside/03-inside-loader/emit-error/src/index.js
module.exports = function (source) {
  this.emitError('Error');
  return `// Hello, loader!
${source}`;
};
